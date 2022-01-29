/*
SC-nya JANGAN DIJUAL BRO [❗]
TQTO
-> Allah SWT 
-> baileys 
-> MhankBarBar 
-> Hexa 
-> MRHRTZ 
-> KIZAKIXD 
-> BrCode
-> vall Popaye
-> all cretaor bot 
-> and all ResAPI
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const imgbbUploader = require("imgbb-uploader")
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions');
const { color, bgcolor } = require('./lib/color');
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { cmdadd } = require('./lib/totalcmd.js')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')

//JSON FILE 
const afk = JSON.parse(fs.readFileSync('./lib/off.json')) 
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
let _scommand = JSON.parse(fs.readFileSync('./db/scommand.json'))
const setting = JSON.parse(fs.readFileSync('./src/global/settings.json'))
const readmr = JSON.parse(fs.readFileSync('./src/jsonfile/rdmr.json'))
const mess = JSON.parse(fs.readFileSync('./src/global/message.json'))
const ban = JSON.parse(fs.readFileSync('./db/banned.json'))

// SETTING DI ./src/global/settings.json 
// YG DIBAWAH INI JANGAN DI RUBAH [❗]
banChats = false;
offline = false;
namaBot = setting.namabot;
ownerNumber = setting.ownerNumber;
targetpc = setting.targetpc;
namaOwner =setting.namaowner; 
owner = setting.owner;
ownerNo = setting.ownerno;
botNum = setting.botnom;
fake = setting.fake;
wmNya = setting.wmnya;
waktu = '-';
alasan = '-';
readmore = readmr.rdmr;

/*APIKEY 
SETTINGNYA DI ./src/global/settings.json 
JANGAN NGERUBAH DIBAWAH [❗]*/
DapKey = setting.DapuhyKey;
Zekais = setting.ZkeY;
ZeksKey = setting.ZeksKey;
VelApi = setting.Velgrynd;

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:owner fake-bot\n'
            + 'ORG:devnya;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285156724122:+62 851-5672-4122\n'
            + 'END:VCARD'
//=================================================//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌘'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore ✨'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🌞'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'                                       }
//=================================================//
// Sticker Cmd
// Function ini saya enc ya bro, sorry wkwkwk
function _0x187e(){const _0x5201c3=['354332XZSVKt','stringify','10gXCFmS','writeFileSync','chats','826660vMhFZs','push','831785OvEahb','9YWQYLr','30yImjxS','6342256ZSdPUT','2360940FsKSew','forEach','333777enEhHA','keys','5973359gTLRyl'];_0x187e=function(){return _0x5201c3;};return _0x187e();}function _0x53ad(_0x327943,_0x496650){const _0x187e5a=_0x187e();return _0x53ad=function(_0x53ad6b,_0x638151){_0x53ad6b=_0x53ad6b-0x7b;let _0x56c9cd=_0x187e5a[_0x53ad6b];return _0x56c9cd;},_0x53ad(_0x327943,_0x496650);}(function(_0x5c82b1,_0x583797){const _0x404869=_0x53ad,_0x5daaac=_0x5c82b1();while(!![]){try{const _0x4771ab=-parseInt(_0x404869(0x88))/0x1+parseInt(_0x404869(0x8a))/0x2*(parseInt(_0x404869(0x85))/0x3)+-parseInt(_0x404869(0x83))/0x4+parseInt(_0x404869(0x7f))/0x5*(-parseInt(_0x404869(0x81))/0x6)+parseInt(_0x404869(0x87))/0x7+parseInt(_0x404869(0x82))/0x8+-parseInt(_0x404869(0x80))/0x9*(-parseInt(_0x404869(0x7d))/0xa);if(_0x4771ab===_0x583797)break;else _0x5daaac['push'](_0x5daaac['shift']());}catch(_0x52bd20){_0x5daaac['push'](_0x5daaac['shift']());}}}(_0x187e,0x7c338));const addCmd=(_0x36813b,_0x481a74)=>{const _0x5c67d7=_0x53ad,_0x3aa4ea={'id':_0x36813b,'chats':_0x481a74};_scommand[_0x5c67d7(0x7e)](_0x3aa4ea),fs[_0x5c67d7(0x7b)]('./db/scommand.json',JSON[_0x5c67d7(0x89)](_scommand));},getCommandPosition=_0x467b73=>{const _0xde6c6=_0x53ad;let _0x564579=null;Object[_0xde6c6(0x86)](_scommand)[_0xde6c6(0x84)](_0x12d946=>{_scommand[_0x12d946]['id']===_0x467b73&&(_0x564579=_0x12d946);});if(_0x564579!==null)return _0x564579;},getCmd=_0x2ac48e=>{const _0x252724=_0x53ad;let _0x3b3ee6=null;Object[_0x252724(0x86)](_scommand)[_0x252724(0x84)](_0x2c0eb9=>{_scommand[_0x2c0eb9]['id']===_0x2ac48e&&(_0x3b3ee6=_0x2c0eb9);});if(_0x3b3ee6!==null)return _scommand[_0x3b3ee6][_0x252724(0x7c)];},checkSCommand=_0x214db0=>{const _0x4d3d7e=_0x53ad;let _0x597323=![];return Object[_0x4d3d7e(0x86)](_scommand)['forEach'](_0x2b847a=>{_scommand[_0x2b847a]['id']===_0x214db0&&(_0x597323=!![]);}),_0x597323;};
module.exports = client = async (client, brc) => {
	try {
        if (!brc.hasNewMessage) return
        brc = brc.messages.all()[0]
		if (!brc.message) return
		if (brc.key && brc.key.remoteJid == 'status@broadcast') return
		global.blocked
        	brc.message = (Object.keys(brc.message)[0] === 'ephemeralMessage') ? brc.message.ephemeralMessage.message : brc.message
        	const content = JSON.stringify(brc.message)
		const from = brc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	    const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
                const type = Object.keys(brc.message)[0]  
                const cmd = (type === 'conversation' && brc.message.conversation) ? brc.message.conversation : (type == 'imageMessage') && brc.message.imageMessage.caption ? brc.message.imageMessage.caption : (type == 'videoMessage') && brc.message.videoMessage.caption ? brc.message.videoMessage.caption : (type == 'extendedTextMessage') && brc.message.extendedTextMessage.text ? brc.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
                 body = (type === 'conversation' && brc.message.conversation.startsWith(prefix)) ? brc.message.conversation : (type == 'imageMessage') && brc.message[type].caption.startsWith(prefix) ? brc.message[type].caption : (type == 'videoMessage') && brc.message[type].caption.startsWith(prefix) ? brc.message[type].caption : (type == 'extendedTextMessage') && brc.message[type].text.startsWith(prefix) ? brc.message[type].text : (type == 'listResponseMessage') && brc.message[type].singleSelectReply.selectedRowId ? brc.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && brc.message[type].selectedButtonId ? brc.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(brc.message[type].fileSha256.toString('base64')) !== null && getCmd(brc.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(brc.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? brc.message.conversation : (type === 'extendedTextMessage') ? brc.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = client.user.jid
		const botNumberss = client.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? brc.participant : brc.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await client.chats.all()
		const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isOwner = owner.includes(sender)
		const isBanned = ban.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const conts = brc.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        if (isCmd) cmdadd()
        const pushname = brc.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
     
     //IMAGE 
    var thumbbot = await fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')
    var ownerImg = await fs.readFileSync('./src/image/owner/me.jpg')
     var trthImg = await fs.readFileSync('./src/image/todimg/truth.jpg')
     var dareImg = await fs.readFileSync('./src/image/todimg/dare.jpg')
     var todImg = await fs.readFileSync('./src/image/todimg/tod.jpg')
     
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? brc.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? brc.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return client.relayWAMessage(po, {waitForAck: true})
        }
        
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            client.sendMessage(from, teks, text, {quoted:fvid})
        }
const textImg = (teks) => {
           return client.sendMessage(from, teks, text, {quoted: brc, thumbnail: fs.readFileSync('./src/image/owner/me.jpg')})
        }
        const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: brc, contextInfo: { "mentionedJid": memberr } })
        }
        
        //FTROL
        const ftrol = {
                  	key : {
                          participant : '0@s.whatsapp.net'
                        },
            message: {
                    orderMessage: {
                            itemCount : 999999,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: thumbbot, //inigambar
                            sellerJid: '6283108833678@s.whatsapp.net' 
                          }
                        }
                      }
   //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283108833678@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./src/image/thumb/thumb-fakebot.jpg`)},"title": `Hai ${pushname}`,"description": "𝙱𝚛𝙲𝚘𝚍𝚎", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝙵𝚊𝚔𝚎-𝙱𝚘𝚝","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283108833678@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283108833678@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283108833678@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6285878313791-6283108833678@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
   //FAKEREPLY PRODUCT
            const toko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283108833678@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./src/image/thumb/thumb-fakebot.jpg`)},"title": `Hai ${pushname}`,"description": "𝙱𝚛𝙲𝚘𝚍𝚎", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝙵𝚊𝚔𝚎-𝙱𝚘𝚝","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285878313791-6283108833678@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999999999",
                 "ptt": "true"
                        }
	                  } 
                     } 
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"Apasih Lu",
                 "h": `Hmm`, 
                 'seconds': '99', 
                 'caption': '𝙵𝚊𝚔𝚎-𝙱𝚘𝚝',
                 'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')
                        }
                       }
	                  }
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6285878313791-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}} 
            
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./src/image/thumb/thumb-fakebot.jpeg'),quoted:brc,caption:yes})
            
        }
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:brc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
  const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       client.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       client.sendMessage(from, hasil, type, options).catch(e => {
	       client.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: brc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

//BUTTON FUNCTION 
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await client.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//=============================================================//


//FUNCTION
            cekafk(afk)
            if (!brc.key.remoteJid.endsWith('@g.us') && offline){
            if (!brc.key.fromMe){
            if (isAfk(brc.key.remoteJid)) return
            addafk(brc.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            client.sendMessage(brc.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}})
            }
            }   
        if (brc.key.remoteJid.endsWith('@g.us') && offline) {
        if (!brc.key.fromMe){
        if (brc.message.extendedTextMessage != undefined){
        if (brc.message.extendedTextMessage.contextInfo != undefined){
        if (brc.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of brc.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(brc.key.remoteJid)) return
        addafk(brc.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        client.sendMessage(brc.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!brc.key.fromMe && !isOwner && banChats === true) return
switch (command) {
    case 'jadibot':
    if(!brc.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,client,from)
    break
    case 'stopjadibot':
    if(!brc.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    
case 'leaveall':
             if (!isOwner) return  
             let totalgroup = client.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             client.groupLeave(id)
}
             break
case 'teruskan':
client.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
	case 'menu':
        if (isBanned) return reply(mess.banned)
        mension = `@${sender.split('@')[0]}`
        txtt =`Hai Kak ${mension}, ${ucapanWaktu}\nPilih Opsi Dibawah Ini Ya..\n\nJika Button tidak muncul, silahkan ketik ${prefix}cmnd`

               sendButLocation(from, txtt, wmNya, {jpegThumbnail:thumbbot}, [{buttonId:`${prefix}allmenu`, 
               buttonText:{displayText:'MENU 🔖'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER 👤'},type:1}, {buttonId:`${prefix}donasi`,buttonText:{displayText:'COFFEE ☕'},type:1}], {contextInfo: { mentionedJid: [sender]}})
               break
               
    case 'allmenu':
    case 'p':
 if (isBanned) return reply(mess.banned)
    	var menu = `*「 BOT INFO 」*
 hai @${sender.split('@')[0]}
🔰 NAMA : ${pushname}
🔰 CREATOR : ${namaOwner}
🔰 BOT NAME : ${namaBot}
🔰 PREFIX :「 MULTI PREFIX 」
🔰 BOT MODE : ${banChats ? "SELF-MODE" : "PUBLIC-MODE"}
${readmore}
*📑 ISLAM MENU 🔰*
ﾒ ${prefix}bacaanshalat
ﾒ ${prefix}niatshalat
ﾒ ${prefix}doaharian
ﾒ ${prefix}wirid
ﾒ ${prefix}tahlil
ﾒ ${prefix}asmaulhusna
ﾒ ${prefix}kisahnabi

*📑 OWNER 🔰*
ﾒ ${prefix}off
ﾒ ${prefix}on
ﾒ ${prefix}bc
ﾒ ${prefix}self
ﾒ ${prefix}public
ﾒ ${prefix}ban
ﾒ ${prefix}unban
ﾒ ${prefix}setcmd
ﾒ ${prefix}delcmd
ﾒ ${prefix}listcmd
ﾒ ${prefix}shutdown
ﾒ ${prefix}leaveall
ﾒ ${prefix}setthumb
ﾒ ${prefix}settarget
ﾒ ${prefix}setfakeimg
ﾒ ${prefix}setreply

*📑 DOWNLOAD 🔰*
ﾒ ${prefix}ytsearch
ﾒ ${prefix}play
ﾒ ${prefix}video
ﾒ ${prefix}ytmp3
ﾒ ${prefix}ytmp4
ﾒ ${prefix}igdl
ﾒ ${prefix}igstory
ﾒ ${prefix}twitter
ﾒ ${prefix}tiktok
ﾒ ${prefix}tiktokaudio
ﾒ ${prefix}fb
ﾒ ${prefix}brainly
ﾒ ${prefix}image
ﾒ ${prefix}anime
ﾒ ${prefix}pinterest
ﾒ ${prefix}komiku
ﾒ ${prefix}lirik
ﾒ ${prefix}chara
ﾒ ${prefix}playstore
ﾒ ${prefix}otaku

*📑 MAKER 🔰*
ﾒ ${prefix}sticker
ﾒ ${prefix}swm
ﾒ ${prefix}take
ﾒ ${prefix}fdeface
ﾒ ${prefix}emoji

*📑 CONVERT 🔰*
ﾒ ${prefix}toimg
ﾒ ${prefix}tomp3
ﾒ ${prefix}tomp4
ﾒ ${prefix}slow
ﾒ ${prefix}fast
ﾒ ${prefix}reverse
ﾒ ${prefix}tourl

*📑 UP SW 🔰*
ﾒ ${prefix}upswteks
ﾒ ${prefix}upswimage
ﾒ ${prefix}upswvideo

*📑 FUN 🔰*
ﾒ ${prefix}fitnah
ﾒ ${prefix}fitnahpc
ﾒ ${prefix}teruskan
ﾒ ${prefix}kontak
ﾒ ${prefix}truthordare

*📑 TAG 🔰*
ﾒ ${prefix}hidetag
ﾒ ${prefix}kontag
ﾒ ${prefix}sticktag
ﾒ ${prefix}totag

*📑 INFO 🔰*
ﾒ ${prefix}owner
ﾒ ${prefix}sc
ﾒ ${prefix}status
ﾒ ${prefix}speed
ﾒ ${prefix}githubstalk
ﾒ ${prefix}tiktokstalk

*📑 OTHER 🔰*
ﾒ ${prefix}ping
ﾒ ${prefix}inspect
ﾒ ${prefix}join
ﾒ ${prefix}caripesan
ﾒ ${prefix}linkwa
ﾒ ${prefix}get
ﾒ ${prefix}jadibot
ﾒ ${prefix}listjadibot
ﾒ ${prefix}voting
ﾒ ${prefix}get
ﾒ ${prefix}term
ﾒ ${prefix}delvote
ﾒ x
ﾒ $
ﾒ vote
ﾒ devote

╭─❒ TQTO 
│ Allah SWT
│ Vall Popaye
│ MhankBarBar
│ MRHRTZ
│ KIZAKIXD
│ BrCode (Me)
│ DENZ
│ ARIFI RAZZAQ
│ Dappa uhyy
│ FA DEV 
│ ALL API
│ AND OTHER BOT BUILDERS
└──────────────────❍

╭─❒ 「 PESAN 」 
│Thank you very much for using this bot.
│And sorry if there are still many errors.
│We will fix the error soon :)
└──────────────────❍`

sendButLocation(from, menu, wmNya, {jpegThumbnail:thumbbot}, [{buttonId:`${prefix}owner`, buttonText:{displayText:'OWNER'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC BOT'},type:1}, {buttonId:`${prefix}donasi`,buttonText:{displayText:'COFFE'},type:1}], {contextInfo: { mentionedJid: [sender]}, quoted: ftoko})
               break
  case 'owner':
    case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
		          // if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
		         if (isBanned) return reply(mess.banned)
		           //case ⌈❗」 by  fauzan
 infownr = `◪ Hallo @${sender.split('@')[0]}
├ my name is Fauzan
├ From: Situbondo, East Java, Indonesia
├ I'm a student
├ and my hobby is coding
└─┤My Social Media├─⊳⊳
  ├─ ❏ WhatsApp
  ├─ ❏ 085156724122
  ├─ ❏ Github
  ├─ ❏ https://github.com/BerrRecode
  ├─ ❏ Instagram
  └─ ❏ https://www.instagram.com/efzyn_`
  
  sendButLocation(from, infownr, 'Powered by: BrCode', {jpegThumbnail:ownerImg}, [{buttonId:`${prefix}developer`, 
               buttonText:{displayText:'💬 NOMOR OWNER'},type:1}, {buttonId:`${prefix}infosc`,buttonText:{displayText:'🤖 INFO SCRIPT BOT'},type:1}, {buttonId:`${prefix}menu`,buttonText:{displayText:'🔙 BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [sender]}})
			break
    case 'infosc':
      reply('bot masih beta, dan script blom bisa di publish :)')
      break
 case 'developer':
            case 'author':
             //  if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
              if (isBanned) return reply(mess.banned)
                client.sendMessage(from, {displayname: "Owner FAKE-BOT", vcard: vcard}, MessageType.contact, { quoted: ftoko})
                    .then((res) => client.sendMessage(from, '*Tuh Kontak ownerku, jangan di spam ya!*', text, {quoted: res}))
                 //   await limitAdd(sender)
                break
  case 'donasi':
      // if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
      if (isBanned) return reply(mess.banned)
      reply('mau donasi apa cuman liat-liat nih?')
      dnt =`◪𝗱𝗼𝗻𝗮𝘀𝗶
│ Silahkan scan QRIS code diatas
│ atau menggunakan metode di bawah ini
├─ ❏ DANA
├─ ❏ 085156724122
├─ ❏ OVO
├─ ❏ 089688543712
├─ ❏ PULSA
├─ ❏ 085156724122
├─ ❏ linkAja
├─ ❏ 085156724122
├─ ❑ SAWERIA
├─ ❑ https://saweria.co/EfZyN
├─ ❏ Qris
└─ ❏ https://cutt.ly/QrQris`
  //idnt = fs.readFileSync('./src/donate.jpeg')
  buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1}]
  
  imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./src/image/donate/donate.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./src/image/thumb/thumb-fakebot.jpg`)})).imageMessage
  
  //imgnya = fakethumb(idnt, dnt)
    buttonsMessage = {
      contentText: `${dnt}`,
      footerText: `${wmNya}`, imageMessage: imageMsg,
      buttons: buttons,
      headerType: 4
    }
    
    prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
               client.relayWAMessage(prep)
               break
   case 'shutdown':
           if (!brc.key.fromMe) return 
             reply(`Dada Kak...`)
             await sleep(3000)
             process.exit()
             break
//ISLAM MENU-------------------------------------------->>
case 'niatshalat':
  case 'bacaanshalat':
  if (isBanned) return reply(mess.banned)
    ini_ambil = await fetchJson(`https://api.dapuhy.xyz/api/islam/${command}?apikey=${DapKey}`)
    ini_hasil = ini_ambil.result 
     ket = ' '
    for(let x of ini_hasil){
       ket += `*${x.name}*\n
*${x.arabic}*
*Latin:* ${x.latin}
*Artinya:* ${x.terjemahan}\n\n\n`
    }
    client.sendMessage(from, ket, text, {quoted: brc})
  break
  
  case 'doaharian':
    case 'tahlil':
      if (isBanned) return reply(mess.banned)
      wir = await fetchJson(`https://api.dapuhy.xyz/api/islam/${command}?apikey=${DapKey}`)
      inti = wir.result 
      teknya = ' '
      petikt = '```'
      for (let y of inti){
        teknya += `*${y.title}*\n 
*${y.arabic}*
*Artinya:* ${y.translation}\n\n\n`
      }
      client.sendMessage(from, teknya, text, {quoted: brc})
      break
  
  case 'wirid':
    if (isBanned) return reply(mess.banned)
    rid = await fetchJson(`https://api.dapuhy.xyz/api/islam/wirid?apikey=${DapKey}`)
    tobat = rid.result
    bre = ' '
    for (let i of tobat){
      bre += ` *${i.arabic}*
*Dibaca:* ${i.times} kali 
*keterangan:* ${i.tnc}\n\n\n`
    }
    client.sendMessage(from, bre, text, {quoted: brc})
    break
    
  case 'asmaulhusna':
    if (isBanned) return reply(mess.banned)
    namaB = await fetchJson(`https://api.dapuhy.xyz/api/islam/asmaulhusna?apikey=${DapKey}`)
    namaAllah = namaB.result 
   // diack = 
    let ack = namaAllah[Math.floor(Math.random() * namaAllah.length)]
   konten = `*Arab: ${ack.arab}*
*Latin:* ${ack.latin}
*Asmaul Husna ke:* ${ack.number}
*Artinya(id):* ${ack.translate_id}
*Artinya(en):* ${ack.translate_en}`
    client.sendMessage(from, konten, text, {quoted: brc})
    break
  
  case 'kisahnabi':
    if (isBanned) return reply(mess.banned)
    if (!q) return reply(`Contoh: ${prefix + command} muhammad`)
    kiSah = await fetchJson(`https://api.dapuhy.xyz/api/islam/kisahnabi?nabi=${q}&apikey=${DapKey}`)
    nyA = `Nama: ${kiSah.name}
Lahir: ${kiSah.kelahiran}
Usia: ${kiSah.wafat_usia}
Tinggal: ${kiSah.singgah}
Kisah: ${kiSah.kisah}`
    client.sendMessage(from, nyA, text, {quoted: brc})
    break
             
//OWNER MENU------------------>>
    case 'on':
            if (!brc.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!brc.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'ban':
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./db/banned.json', JSON.stringify(ban))
				reply(`Nomor ${bnnd} telah dibanned!`)
				break
				case 'unban':
				if (!isOwner && !brc.key.fromMe) return reply(mess.only.ownerb)
				ya = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.indexOf(brc)
				ban.splice(unb, 1)
				fs.writeFileSync('./db/banned.json', JSON.stringify(ban))
				reply(`Nomor ${ya} telah di unban!`)
				break

/*
case 'add':
					
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					*/
case 'buttons1':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: brc, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: brc, mimetype: 'video/mp4', filename: res[0].output})
              break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
        if (!brc.key.fromMe && !isOwner) return 
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = brc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
         if (!brc.key.fromMe && !isOwner) return 
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = brc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./db/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'notif':
					
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: ftoko
}
await client.sendMessage(from, options, text)
break
    case 'delvote':
            if(!brc.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !brc.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (brc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || brc.message.extendedTextMessage.contextInfo == null) {
            let id = brc.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await client.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await client.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
      try{
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
      }catch(e){
        console.log(color(e, 'red'))
        reply(`${e}`)
      }
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            client.sendMessage(from,ram,image,{quoted:brc,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await client.sendMessage(from,li,image,{quoted: brc})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await client.sendMessage(from,di,image,{quoted: brc})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
   

    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!brc.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            client.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !brc.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !brc.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
  //FUN MENU-------------------------------------------->>
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = brc.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = brc.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await client.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await client.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
      case 'tod':
			 case 'truthordare':
			  if (isBanned) return reply(mess.banned)
		//	   if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
			  sistod = `@${sender.split('@')[0]}`
			  const yok = true
			  const tods = ['truth', 'dare']
			  const tds = tods[Math.floor(Math.random() * tods.length)]
			  if (tds === 'truth') {
			    tk = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *TRUTH CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${tk}`, `${wmNya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}truth`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } else if (tds === 'dare') {
			    smp = `Hai kak ${sistod}, TOD ini RANDOM ya, dan saat ini anda mendapat *DARE CARD*\nSilahkan klik TERIMA untuk lanjut menjawab pertanyan random dari bot!\nJika anda menekan TOLAK, maka anda harus menerima hukuman dari teman main/grup anda`
			    sendButLocation(from, `${smp}`, `${wmNya}`, {jpegThumbnail: todImg}, [{buttonId: `${prefix}dare`, buttonText: {displayText: `TERIMA`}, type: 1}, {buttonId: `${prefix}tolak`, buttonText: {displayText: 'TOLAK'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } 
			 // await limitAdd(sender)
			  break
			  
			case 'truth':
			  try {
      //    if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
         if (isBanned) return reply(mess.banned)
         jujur = `@${sender.split('@')[0]}`
			const trut = JSON.parse(fs.readFileSync('./db/truth.json'))
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
			//	truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				ruth = `*TRUTH*\nTolong jawab pertanyaan dibawah ya kak ${jujur}\n\n`+ ttrth
				sendButLocation(from, `${ruth}`, `${wmNya}`, {jpegThumbnail: trthImg}, [{buttonId: `${prefix}tod`, buttonText: {displayText: `TOD LAGI`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
			  } catch (e) {
			    console.log(color(e, 'red'))
			    reply(`${e}`)
			  }
				break
				case 'dare':
				  try {
			//	 if (!isUser) return sendButMessage(from, verif1, verif2, verif3, {quoted: brc})
        if (isBanned) return reply(mess.banned)
        berani = `@${sender.split('@')[0]}`
	      const dare = JSON.parse(fs.readFileSync('./db/dare.json'))
				const der = dare[Math.floor(Math.random() * dare.length)]
				//tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				tdare = `*DARE*\nWajib dilaksanakan ya kak ${berani}\n\n`+ der
				sendButLocation(from, `${tdare}`, `${wmNya}`, {jpegThumbnail: dareImg}, [{buttonId: `${prefix}tod`, buttonText: {displayText: `TOD LAGI`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: [sender]}})
				  } catch (e) {
			    console.log(color(e, 'red'))
			    reply(`${e}`)
			  }
				break
				case 'tolak': 
			const cupu = `@${sender.split('@')[0]}`
			var tol = `${cupu} Anda telah berhenti dari games TRUTH OR DARE\nSilahkan untuk para member grup boleh memberi hukuman random, namun ${cupu} berhak memilih hukuman yang ingin dia jalani`
			var group = await client.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
		 sendButLocation(from, `${tol}`, `${wmNya}`, {jpegThumbnail: todImg}, [{buttonId: ` `, buttonText: {displayText: 'OK BWANG'}, type: 1}, {buttonId: `${prefix}tod`, buttonText: {displayText: 'TOD LAGI :)'}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}], {contextInfo: {mentionedJid: mem }})
		 break
				
 //-------------------------------------------->>
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: brc })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            client.sendMessage(from,media,image,{quoted:brc,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            client.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await client.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, client, brc, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !brc.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
             media = await client.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: brc })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: brc })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && brc.message.videoMessage.seconds < 11 || isQuotedVideo && brc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: brc })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: brc })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            client.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
case 'upswaudio':
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            client.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            client.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            cihcih = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            client.sendMessage(from, bur, text, { quoted: brc })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            const tipes = await client.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await client.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		client.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!brc.key.fromMe && !isOwner) return reply(mess.only.ownerb)
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!brc.key.fromMe && !isOwner) return fakestatus(mess.only.ownerb)
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			/*if (!brc.key.fromMe) return fakestatus('SELF-BOT')*/
			if (!brc.key.fromMe && !isOwner) return reply(mess.only.ownerb)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await client.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: brc
			}
			client.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            const media = await client.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: brc})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && brc.message.videoMessage.seconds < 11 || isQuotedVideo && brc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
                const media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: brc})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await client.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *FAKE-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	  if (!brc.key.fromMe && !isOwner) return reply(mess.only.ownerb)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
 case 'bc':

client.updatePresence(from, Presence.composing)

					if (!isOwner && !brc.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await client.chats.all()

					if (isMedia && !brc.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await client.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							client.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await client.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							client.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !brc.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
						buff = await client.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							client.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./src/image/thumb/thumb-fakebot.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
 case 'youtubedl':
   case 'ytdl':
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: brc})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
	case 'setfakeimg':
	      if (!brc.key.fromMe && !isOwner) return reply(mess.only.ownerb)
        	if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
			delb = await client.downloadMediaMessage(boij)
			fs.writeFileSync(`./src/image/thumb/thumb-fakebot.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	

	case 'setthumb':
	      if (!brc.key.fromMe && !isOwner) return reply(mess.only.ownerb)
	        if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
			delb = await client.downloadMediaMessage(boij)
			fs.writeFileSync(`./src/image/thumb/thumb-fakebot.jpg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam brctuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            client.sendMessage(from,{url:images},image,{quoted:brc})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:brc,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			client.sendMessage(from, teks, text,{quoted:brc,detectLinks: false})                        
            })              
			break
    case 'ig':
      case 'igdl':
        if (!q) return reply('link ignya mana?')
	    hx.igdl(q)
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: brc,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: brc,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
	   case 'igdl2':
	     try{
	     if (!q) return reply('link ignya ndi lur?')
	     bopper = await fetchJson(`https://velgrynd.herokuapp.com/api/igdl?url=${q}&apikey=${VelApi}`)
	     resil = bopper.result
	     for(let x of resil.medias){
                if(x.type == 'video'){
                    let link = await getBuffer(x.url)
                    client.sendMessage(from,link,video,{quoted: brc,caption: `Type : ${x.type}`})
                } else {
                    let link = await getBuffer(x.url)
                    client.sendMessage(from,link,image,{quoted: brc,caption: `Type : ${x.type}`})
                }
            }
	     } catch(e) {
	       console.log(color(e, 'red'))
	       reply(`${e}`)
	     }
	     break
	 case 'igdl3': 
	   try{
	   if (isBanned) return reply(mess.banned)
	   if (!q) return reply(`contoh: ${prefix + command} https://www.instagram.com/reel/CXvVDW8AaaV/?utm_medium=copy_link`)
	   ape = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/igdownload?url=${q}&apikey=${DapKey}`)
	   rss = ape.result
	     if (rss.fileType == mp4){
	       let pidi = await getBuffer(rss.url)
	       client.sendMessage(from, pidi, video, {quoted: brc, caption: `Type: ${rss.fileType}`})
	     } else {
	       let imji = await getBuffer(rss.url)
	       client.sendMessage(from, imji, image, {quoted: brc, caption: `Type: ${rss.fileType}`})
	     }
	   } catch (e) {
	     console.log(color(e, 'red')) 
	     reply(`${e}`)
	   }
	   break
	   case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: brc,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: brc,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
//STALKER MENU--------------->>-
	case 'githubstalk':
try{
	if (!q) return reply('username girhubnya apa?')
		gtst = await fetchJson(`https://velgrynd.herokuapp.com/api/stalkgithub?username=${q}&apikey=${VelApi}`)
		salt = gtst.result
		ppmeg = await getBuffer(salt.avatar_url)
		teko = `*GITHUB STALKER*\n
Nama: ${salt.name}
Company: ${salt.company}
Blog: ${salt.blog}
Location: ${salt.location}
Email: ${salt.email}
Bio: ${salt.bio}
Username Twitter: ${salt.twitter_username}
Public Repos: ${salt.public_repos}
Public Gists: ${salt.public_gists}
Followers: ${salt.followers}
Following: ${salt.following}
Created: ${salt.created_at}
Updated: ${salt.updated_at}`
	client.sendMessage(from, ppmeg, image, {quoted: ftoko, caption: teko})
} catch(e){
	console.log(color(e, 'red'))
	reply(`${e}`)
}
	break
case 'tiktokstalk':
try{
	if (!q) return reply('sertakan username tiktoknya bro!')
	ambek = await fetchJson(`https://velgrynd.herokuapp.com/api/stalktiktok?username=${q}&apikey=${VelApi}`)
	rems = ambek.result
	makek = rems.user
	states = rems.stats 
	pepe = await getBuffer(makek.avatarLarger)
	ece = `*TIKTOK STALK*\n
Username: ${makek.uniqueId}
NickName: ${makek.nickname}
BioUser: ${makek.signature}
Verified: ${makek.verified}
Followers: ${states.followerCount}
Following: ${states.followingCount}`
	client.sendMessage(from, pepe, image, {quoted: ftoko, caption: ece})
} catch(E){
	console.log(color(E, 'red'))
	reply(`${E}`)
	}
		break
//MOVIE & KARTON----------------->>
	case 'jadwalbioskop':
		if (isBanned) return reply(mess.banned)
			nara = await fetchJson(`https://api.dapuhy.xyz/api/movie/jadwalbioskop?apikey=${DapKey}`)
			kes = '*JADWAL BIOSKOP*\n\n'
			for (let i of nara.result){	
				kes += `▪ Film: ${i.title}\n▪ Link: ${i.url}\n\n`
			}
			client.sendMessage(from, kes, text, {quoted: brc})
	break


    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
  case 'ping':
    reply('*bot on kak*')
    break
	case 'speed':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !brc.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !brc.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !brc.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: brc
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !brc.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(brc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : brc
            owgi = await client.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !brc.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(brc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : brc
            owgi = await client.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await client.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             client.sendMessage(from,par,text,{quoted:brc,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break

default:
if (budy.startsWith('x')){
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: brc})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!brc.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
