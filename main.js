const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (client = new WAConnection()) => {
    client.logger.level = 'warn'
    client.version = [3, 3234, 9]
    client.browserDescription = [ 'Linux', 'Chrome', '3.0' ]
    console.log(banner.string)
    client.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Hallo kawan, thanks udah make script ini'))
    })

    fs.existsSync('./src/start/session.json') && client.loadAuthInfo('./src/start/session.json')
    client.on('connecting', () => {
        start('2', 'Connecting...')
    })
    client.on('open', () => {
        success('2', 'Connected')
    })
    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./src/start/session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

    client.on('chat-update', async (message) => {
        require('./index.js')(client, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
