const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./config');


const scrypt = util.promisify(crypto.scrypt);

class UserRepository extends Repository {
    async comparePasswords(saved, supplied){
          const [hashed, salt] = saved.split('.');
          const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

          return hashed === hashedSuppliedBuf.toString('hex');
    }
}

module.exports = new UserRepository('user.json');
