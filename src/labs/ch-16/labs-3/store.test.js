const chai = require('chai')
const expect = chai.expect
const store = require('../labs-3/store')
chai.use(require('chai-as-promised'))

describe('Store test', ()=>{
    it('should run store', async ()=>{
        const b = Buffer.from('hello', 'utf8')
        const {id} = await store(b)

       expect(id).to.exist
       expect(id.length).to.be.equal(4)
    })

    it('should fail', async ()=>{
      await expect(store('test')).to.be.rejected
    })
})