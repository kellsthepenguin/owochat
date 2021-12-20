const fs = require('fs')

fs.writeFileSync('private.key', require('crypto').randomBytes(1024).toString('utf-8'))
