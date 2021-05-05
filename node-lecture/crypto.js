const {
  createCipheriv,
  scryptSync,
  createDecipheriv,
  getCiphers,
} = require('crypto');

// console.table(getCiphers())

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0);


const cipher = createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Yo common everybody', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('encrypted',encrypted)

const decipher = createDecipheriv(algorithm, key, iv);
let decrypted = '';

decipher.on('readable', () => {
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});
decipher.on('end', () => {
  console.log('decrypted',decrypted);
});

// Encrypted with same algorithm, key and iv.

decipher.write(encrypted, 'hex');
decipher.end();
