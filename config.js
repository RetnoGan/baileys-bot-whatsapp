const fs = require('fs')
const chalk = require('chalk')

global.namabot = 'Bens - MD'//setting bot name
global.owner = ["62882000681216"]//settinh owner
global.prefix =   "/^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i"
global.pairingNum = "6285861152235"//contoh: 62xxxx

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.yellow(`'${__filename}' telah di update`))
    delete require.cache[file]
    require(file)
})
