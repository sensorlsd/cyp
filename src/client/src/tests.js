let chai = require("chai");
let expect = chai.expect;

let foo = "ba";


expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
