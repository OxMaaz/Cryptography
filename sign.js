const { createSign, createVerify, sign } = require('crypto');
const { publicKey, privateKey } = require('./pkey');

const message = 'this data must be signed';

/// SIGN

// public key to ecnrypt
// private key to decrypt
// private key to sign
// public key to verify

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');


/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified: ${isVerified}`)
