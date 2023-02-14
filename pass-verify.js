const  bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'admin 123 .202'

  const hash = bcrypt.hash(myPassword, 10)

}
