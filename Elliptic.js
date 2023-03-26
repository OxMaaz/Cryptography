const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const keccak256 = require('keccak256');

// generate a new key pair
const keyPair = ec.genKeyPair();

// get the private key in hexadecimal format
const privateKey = keyPair.getPrivate('hex');

// get the public key in uncompressed format
const publicKey = keyPair.getPublic(false, 'hex');

// derive the Ethereum address from the public key
const address = '0x' + keccak256(publicKey, "hex")

// print the results
console.log("Private Key: " + privateKey);
console.log("Public Key: " + publicKey);
console.log("Public Key: " + typeof(publicKey));
console.log("Ethereum Address: " + address);
