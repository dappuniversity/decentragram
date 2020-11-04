import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import Decentragram from '../abis/Decentragram.json'
import Navbar from './Navbar'
import Main from './Main'

// config for IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
})
// if there is no arguement then the default value is used as like in npm documentation

export default function App() {
  const [account, setAccount] = useState('');
  const [decentragram, setDecentragram] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(1)
  const [buffer, setBuffer] = useState(null)

  const loadWeb3 = async () => {
    // connect the browser to ethereum blockchain
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
    }

    // connect to local blockchain where current provider came from ganache
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }

    // if both eth browser or metamask is undetected show the error/
    else window.alert('Non-Ethereum Browser. Consider using metamask or web3 compatible browser.')
  }

  const loadBlockchainData = async () => {
    // load accounts
    await loadWeb3();
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])

    // Get network id
    // network id differs, for ganache it's 5777, for eth 1 and so on
    const networkId = await web3.eth.net.getId()
    const networkData = Decentragram.networks[networkId]

    // checks if the contract is available or not in current chain network
    if (networkData) {
      const decentragram = web3.eth.Contract(Decentragram.abi, networkData.address);
      setDecentragram(decentragram)
      const imageCount = await decentragram.methods.imageCount().call();

      // load images
      for(let i = 1; i <= imageCount; i++){
        const image = await decentragram.methods.images(i).call()
        setImages([...images, image])
      }

      // sort images from highest tipped image to least
      setImages(
        images.sort((a,b) => b.tipAmount - a.tipAmount)
      )

      setLoading(0)
    }
    else window.alert('Decentragram contract is not deployed n current chain network')
  }

  const captureFile = e => {
    e.preventDefault();
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result))
      console.log('buffer', buffer)
    }
  }

  const uploadImage = (description) => {
    console.log('Submitting file to ipfs...')

    // adding file to ipfs
    ipfs.add(buffer, (err, result) => {
      console.log('IPFS result', result)
      if (err) {
        return console.log(err)
      }
 
      setLoading(true);

      decentragram.methods
        .uploadImage(result[0].hash, description)
        .send({ from: account })
        .on('transactionHash', hash => {
          setLoading(0)
        })
    })
  }

  const tipImageOwner = async (id, tipAmount) => {
    setLoading(true)
    decentragram.methods.tipImageOwner(id)
    .send({
      from: account, 
      value: tipAmount
    })
    .on('transactionHash', hash => {
      setLoading(false)
    })
  }

  useEffect(() => {
    loadBlockchainData()
  }, [loadWeb3])

  return (
    <div>
      <Navbar account={account} />
      {
        loading ?
          (<h3 style={{ marginTop: "50px", textAlign: "center" }}>Loading...</h3>) :
          <Main
            captureFile={captureFile}
            uploadImage={uploadImage}
            images={images}
            tipImageOwner={tipImageOwner}
          />
      }
    </div>
  )
}
