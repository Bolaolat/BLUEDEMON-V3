const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒 V4.5" //𝙈𝙖𝙨𝙪𝙠𝙞𝙣 𝙉𝙖𝙢𝙖 𝘽𝙤𝙩
global.ownerName = "😈𝐃𝐄𝐌𝐎𝐍 𝐌-𝐂𝐑𝐎𝐒𝐒😈" //𝙉𝙖𝙢𝙖 𝙠𝙖𝙢𝙪
global.botNumber = "2347049602299" //𝙉𝙤𝙢𝙤𝙧 𝘽𝙤𝙩 𝙆𝙖𝙢𝙪
global.devNumber = ["2347049602299"] //𝙉𝙤𝙢𝙤𝙧 𝙊𝙬𝙣𝙚𝙧 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages
global.Type_Menu = "v1" // TypeMenu v1:IMAGE v2:TEXT V3:TEXT+QSTATUS

global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "𝘼𝙧𝙯𝙯𝙃𝙤𝙨𝙩𝙞𝙣𝙜" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
