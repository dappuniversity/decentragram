const { assert } = require('chai')
const { default: Web3 } = require('web3')

const Decentragram = artifacts.require('./Decentragram.sol')

// chai is used for tesing
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentragram', ([deployer, author, tipper]) => {
  let decentragram

  // before method is used to initiate the contract
  before(async () => {
    decentragram = await Decentragram.deployed()
  })

  // describe gives the title for what we are doing
  describe('deployment', async () => {
    // it method checks the specific task
    it('deploys successfully', async () => {
      // check if the address is valid
      const address = await decentragram.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    // checks if the name is retrieved successfully
    it('has a name', async () => {
      const name = await decentragram.name()
      assert.equal(name, 'Decentragram')
    })
  })

  describe('images', async () => {
    let result, imageCount
    const hash = 'ac123'

    before(async () => {
      // here the extra param is metadata
      result = await decentragram.uploadImage(hash,
        'Image Description',
        {
          from: author
        }
      )
      imageCount = await decentragram.imageCount()
    })

    it('create images', async () => {
      // success
      assert.equal(imageCount, 1)
      const event = result.logs[0].args

      assert.equal(event.id.toNumber(), imageCount.toNumber(), 'id is correct')
      assert.equal(event.hash, hash, 'Hash is correct')
      assert.equal(event.description, 'Image Description', 'description is correct')
      assert.equal(event.tipAmount, '0', 'tip amount is correct')
      assert.equal(event.author, author, 'author is correct')

      // failure: image must have a hash
      await decentragram.uploadImage('', 'Image description', { from: author }).should.be.rejected;

      // failure: image must have a description
      await decentragram.uploadImage('Image Hash', '', { from: author }).should.be.rejected;
    })

    it('lists images', async () => {
      const image = await decentragram.images(imageCount)
      assert.equal(image.id.toNumber(), imageCount.toNumber(), 'id is correct')
      assert.equal(image.hash, hash, 'Hash is correct')
      assert.equal(image.description, 'Image Description', 'description is correct')
      assert.equal(image.tipAmount, '0', 'tip amount is correct')
      assert.equal(image.author, author, 'author is correct')
    })

    it('allows the author balance before purchase')
    // tracking balance before purchase
    let oldAuthorBalance
    oldAuthorBalance = await Web3.length.getBalance(author)
    oldAuthorBalance = new Web3.utils.BN(oldAuthorBalance)

    result = await decentragram.tipImageOwner(imageCount, { from: tipper, value: web3.utils.toWei('1', 'Ether') })

    // success
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), imageCount.toNumber(), 'id is correct')
    assert.equal(event.hash, hash, 'Hash is correct')
    assert.equal(event.description, 'Image Description', 'description is correct')
    assert.equal(event.tipAmount, '1000000000000000000', 'tip amount is correct')
    assert.equal(event.author, author, 'author is correct')

    // check that author received funds
    let newAuthorBalance
    newAuthorBalance = await web3.eth.getBalance(author)
    newAuthorBalance = await web3.utils.BN(newAuthorBalance)

    let tipImageOwner
    tipImageOwner = web3.utils.toWei('1', 'Ether')
    tipImageOwner = new web3.utils.BN(tipImageOwner)

    const expectedBalance = oldAuthorBalance.add(tipImageOwner)

    assert.equal(newAuthorBalance.toString(), expectedBalance.toString())

    // failure: tries to tip a image that does not exist
    await decentragram.tipImageOwner(99, { from: tipper, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
  })
})