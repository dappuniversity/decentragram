const Decentrabook = artifacts.require('./Decentrabook.sol')


require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentrabook', ([deployer, author, tipper]) => {
  let decentrabook



  before(async() =>{
    decentrabook = await Decentrabook.deployed()

  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await decentrabook.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name and symbol', async () => {
      const name = await decentrabook.name()
      assert.equal(name, 'Decentrabook')
    })
  })


  describe('images', async() => {
    let result, imageCount
    const hash = '0x5CfBFEDCAba361B803a9f8034ac9AFBA0773279F'

    before(async() =>{
      result = await decentrabook.uploadImage(hash, 'Image Description', { from : author })
      imageCount = await decentrabook.imageCount()

    })

    it('creates images', async() =>{
     //SUCESS

     assert.equal(imageCount, 1)
     const event = result.logs[0].args
     assert.equal(event.id.toNumber(), imageCount.toNumber(), 'id is correct')
     assert.equal(event.hash, hash, 'hash is correct')
     assert.equal(event.description, 'Image Description', 'Descriptions is correct')
     assert.equal(event.tipAmount, '0', 'Tip Amount is correct')
     assert.equal(event.author, author, 'Author is correct')

     //Failure: Image Hash must exists.
     await decentrabook.uploadImage('', 'Image Description', {from:author}).should.be.rejected;
     //Failure: Image Description must exists.
     await decentrabook.uploadImage('Image Hash', '', {from:author}).should.be.rejected;
    })
    //Check structure

    it('lists images', async() => {
      

      const image = await decentrabook.images(imageCount)
      assert.equal(image.id.toNumber(), imageCount.toNumber(), 'id is correct')
      assert.equal(image.hash, hash, 'hash is correct')
      assert.equal(image.description, 'Image Description', 'Descriptions is correct')
      assert.equal(image.tipAmount, '0', 'Tip Amount is correct')
      assert.equal(image.author, author, 'Author is correct')
    })

    it('allows users to tip images', async() =>{

      // Author balance before purchace
      let oldAuthorBalance
      oldAuthorBalance = await web3.eth.getBalance(author)
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)

      result = await decentrabook.tipImageOwner(imageCount, {from: tipper, value: web3.utils.toWei('1','Ether')})


     const event = result.logs[0].args
     assert.equal(event.id.toNumber(), imageCount.toNumber(), 'id is correct')
     assert.equal(event.hash, hash, 'hash is correct')
     assert.equal(event.description, 'Image Description', 'Descriptions is correct')
     assert.equal(event.tipAmount, '1000000000000000000', 'Tip Amount is correct')
     assert.equal(event.author, author, 'Author is correct')

     //Check if author received funds.

     let newAuthorBalance
     newAuthorBalance = await web3.eth.getBalance(author)
     newAuthorBalance = new web3.utils.BN(newAuthorBalance)

     let tipImageOwner
     tipImageOwner =  web3.utils.toWei('1', 'Ether')
     tipImageOwner = new web3.utils.BN(tipImageOwner)

     const expectedBalance = oldAuthorBalance.add(tipImageOwner)
     assert.equal(newAuthorBalance.toString(), expectedBalance.toString())

     //Failure: Tries to tip img that is not exists.

     await decentrabook.tipImageOwner(99, {from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;

    })
  })
})