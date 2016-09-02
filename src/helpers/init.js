'use strict'
var Web3 = require('web3')
var Web3Admin = require('../util/web3Admin')

module.exports = {
  loadWeb3: function (cb) {
    window.addEventListener('load', function() {

      var web3
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
      } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }

      Web3Admin.extend(web3)
      cb(null, web3)
    })
  },

  extendWeb3: function (web3) {
    Web3Admin.extend(web3)
  },

  setProvider: function (web3, url) {
    web3.setProvider(new web3.providers.HttpProvider(url))
  }
}
