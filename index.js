const polkadots = require('@polkadot/util-crypto');

const address = '通用地址';
const polkadot_address = polkadots.encodeAddress(polkadots.decodeAddress(address), "0")
console.log(polkadot_address);
