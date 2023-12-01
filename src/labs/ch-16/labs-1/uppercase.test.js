const uppercase = require("./uppercase");
const expect = require('chai').expect

describe('uppercase()', ()=>{
    it('should run', ()=>{
        const ans = uppercase('a')
        expect(ans).to.equal('A')
    })
    it('should fail', ()=>{
        expect(()=>uppercase(1)).to.throws('input must be a string')
    })

})