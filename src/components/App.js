import React, { Component } from 'react';
import Web3 from 'web3';
import Identicon from 'identicon.js';
import './App.css';
import Decentrabook from '../abis/Decentrabook.json'
import Navbar from './Navbar'
import Main from './Main'

const ipfsClient = require("ipfs-http-client")
const ipfs = ipfsClient({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})


class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3(){

    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('No ethereum browser found. You should add metamask extension to your browser.')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3

    //load acount
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})

    const networkId =await web3.eth.getId()
    const networkData = Decentrabook.networks[networkId]

    if (networkData){
      const decentrabook = web3.eth.Contract(Decentrabook.abi, networkData.address)
      this.setState({decentrabook})
      const imagesCount = await decentrabook.methods.imageCount().call()
      this.setState({imagesCount})

      //load images
      for(var i = 1; i <= imagesCount; i++){
        const image = await decentrabook.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }

      //Sort images
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount)
      })

      this.setState({loading: false})

    } else{
      window.alert("Decentrabook contract is not deployed to detected network.")


    }
  }

  captureFile = event =>{
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () =>{
      this.setState({buffer: Buffer(reader.result)})
      console.log('buffer', this.state.buffer)
    }
  }

  uploadImage = description =>{

    console.log("Submiting the file to IPFS...")

    //adding the file to ipfs
    ipfs.add(this.state.buffer, (error,result) => {
      console.log('IPFS result', result)
      if(error) {
        console.error(error)
        return
      }

      this.setState({loading:true})
      this.state.decentrabook.methods.uploadImage(result[0].hash, description).send({from: this.state.account}).on('transactionHash', (hash) =>{
        this.setState({loading:false})
      })
    })
  }

  tipImageOwner = (id, tipAmount) =>{

    this.setState({loading:true})
    this.state.decentrabook.methods.tipImageOwner(id).send({from: this.state.account, value: tipAmount}).on('transactionHash', (hash) =>{
      this.setState({loading:false})
      })
    }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      decentrabook: null,
      images: [],
      loading: true
    }
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          : <Main
              images={this.state.images}
              captureFile={this.captureFile}
              uploadImage={this.uploadImage}
              tipImageOwner={this.tipImageOwner}
            />
          }
        }
      </div>
    );
  }
}

export default App;