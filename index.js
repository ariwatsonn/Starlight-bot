const makeWASocket = require("@whiskeysockets/baileys").default
const { Boom } = require('@hapi/boom')

global.cooldowns = global.cooldowns || {};
global.lastRolledCharacter = {}; // guatdar personajes

const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const pino = require('pino')
const moment = require('moment-timezone');
const fs = require('fs')
const axios = require('axios')

let phoneNumber = "5491124901765"; // cambiar número
const { default: JulsBotIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
const banner = cfonts.render((`Starlight | 1.0`), {
font: 'tiny',             
align: 'center',           
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`blue`,`yellow`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
let nombreSerieInput = "";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const color = (text, color) => { return !color ? chalk.yellow(text) : chalk.keyword(color)(text) };
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

// Constantes Editables
const prefixo = "#"; // Cambiar Prefijo Aquí
const wm = "Walterex" // cambiar creador
const botname = "Lain-Iwakura" // Cambiar nombre del bot

const numerodono = "+5493435261633"; // cambiar número
const themeemoji = "🐟" ; // cambiar emoji


const {
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  getCustomBye,
  setCustomBye,
  checkOfWel,
  TextOfWel,
  TextOfBay,
  EditBay
} = require('./Archivos/welcome.js')
const welkom = JSON.parse(fs.readFileSync('./Archivos/welkom.json'))

async function startProo() {

// Método Privado con Número // Encriptado
function _0x4cf1(_0x398f11,_0x5d887d){const _0x2c06f3=_0x2c06();return _0x4cf1=function(_0x4cf186,_0x177a47){_0x4cf186=_0x4cf186-0x1ea;let _0x2038cd=_0x2c06f3[_0x4cf186];return _0x2038cd;},_0x4cf1(_0x398f11,_0x5d887d);}const _0x13243b=_0x4cf1;(function(_0x2a5c55,_0x1c7ac7){const _0x126f84=_0x4cf1,_0x27717d=_0x2a5c55();while(!![]){try{const _0x4e0ca7=parseInt(_0x126f84(0x1f8))/0x1+parseInt(_0x126f84(0x1ff))/0x2*(parseInt(_0x126f84(0x204))/0x3)+parseInt(_0x126f84(0x1fe))/0x4*(parseInt(_0x126f84(0x1f4))/0x5)+-parseInt(_0x126f84(0x1fb))/0x6+-parseInt(_0x126f84(0x1ea))/0x7+-parseInt(_0x126f84(0x1ef))/0x8+-parseInt(_0x126f84(0x1f6))/0x9;if(_0x4e0ca7===_0x1c7ac7)break;else _0x27717d['push'](_0x27717d['shift']());}catch(_0x31bd4b){_0x27717d['push'](_0x27717d['shift']());}}}(_0x2c06,0xd66b7));let {version,isLatest}=await fetchLatestBaileysVersion();const {state,saveCreds}=await useMultiFileAuthState('./session'),msgRetryCounterCache=new NodeCache(),sock=makeWASocket({'logger':pino({'level':_0x13243b(0x1f0)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':['Ubuntu',_0x13243b(0x1ee),'20.0.04'],'auth':{'creds':state[_0x13243b(0x1fa)],'keys':makeCacheableSignalKeyStore(state[_0x13243b(0x1fc)],pino({'level':_0x13243b(0x202)})[_0x13243b(0x208)]({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x5d7f0d=>{const _0x2a1153=_0x13243b;let _0x42cc7c=jidNormalizedUser(_0x5d7f0d[_0x2a1153(0x1f9)]),_0x265ce1=await store[_0x2a1153(0x1f2)](_0x42cc7c,_0x5d7f0d['id']);return _0x265ce1?.['message']||'';},'msgRetryCounterCache':msgRetryCounterCache,'defaultQueryTimeoutMs':undefined});store['bind'](sock['ev']);if(pairingCode&&!sock['authState'][_0x13243b(0x1fa)][_0x13243b(0x201)]){if(useMobile)throw new Error(_0x13243b(0x205));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0xb3068f=>phoneNumber[_0x13243b(0x1ec)](_0xb3068f))&&(console['log'](chalk[_0x13243b(0x209)](chalk['redBright'](_0x13243b(0x1f1)))),process['exit'](0x0))):(phoneNumber=await question(chalk[_0x13243b(0x209)](chalk[_0x13243b(0x1fd)](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0x2eeb80=>phoneNumber['startsWith'](_0x2eeb80))&&(console['log'](chalk[_0x13243b(0x209)](chalk[_0x13243b(0x207)](_0x13243b(0x1f1)))),phoneNumber=await question(chalk[_0x13243b(0x209)](chalk['greenBright'](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{const _0x489bf9=_0x13243b;let _0x8a96ab=await sock[_0x489bf9(0x1eb)](phoneNumber);_0x8a96ab=_0x8a96ab?.[_0x489bf9(0x20a)](/.{1,4}/g)?.[_0x489bf9(0x1f3)]('-')||_0x8a96ab,console['log'](chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x200)](_0x489bf9(0x20b))),chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x1ed)](_0x8a96ab)));},0xbb8);}function _0x2c06(){const _0x1bbd11=['1637373LZnyZs','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','some','redBright','child','bgBlack','match','Your\x20Pairing\x20Code\x20:\x20','1250522JShAKL','requestPairingCode','startsWith','white','Chrome','9897888veqNgu','silent','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+32460220392','loadMessage','join','3095530dIuEjy','replace','985968qabeqv','black','1465506gzUlAn','remoteJid','creds','1360236TOTwHA','keys','greenBright','4gBEQlq','2csqFkw','bgGreen','registered','fatal','Please\x20type\x20your\x20WhatsApp\x20number\x20ðŸ˜\x0aFor\x20example:\x20+32460220392\x20:\x20'];_0x2c06=function(){return _0x1bbd11;};return _0x2c06();}
// Conexión

sock.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startProo()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startProo()
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startProo()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startProo()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startProo()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startProo()
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startProo()
			} else sock.end(`Unknown DisconnectReason: ${reason}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Conectando...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
			await delay(1999)
            console.log(banner.string)
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji} Suscribete`,'magenta'))
            console.log(color(`${themeemoji} https://youtube.com/@guedelinnovation?si=VBPQxp1udNZim9tV `,'magenta'))
            console.log(color(` `,'magenta'))
                        console.log(color(`< ================================================== >`, 'cyan'))
            console.log(color(`${themeemoji} Creador Oficial de la base`,'magenta'))
            console.log(color(`${themeemoji} Walterex\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startProo();
	}
})
sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })


     //  "welcome"//
sock.ev.on("group-participants.update", async (anu) => {
    if (!welkom.includes(anu.id)) return;  
    try {
    
let genderDB = JSON.parse(fs.readFileSync("genders.json", "utf8"));

        const datosgp = await sock.groupMetadata(anu.id);
        const groupName = datosgp.subject;  
        const numParticipantes = datosgp.participants.length;  
        
        
        if (anu.action == 'add') {
            const pushname = anu.participants[0];
            const perfil = await sock.profilePictureUrl(pushname, 'image').catch(() => './Archivos/Fotos/welcome.jpg');  
            const welcomeMessage = `

❀ *Bienvenido* a ${groupName}
	✰ ${pushname}

bienvenid@ put@

> ✐ Puedes usar *#menu* para ver la lista de comandos.
> 🜸 Lain-Iwakura

            `;
await sock.sendMessage(anu.id, {
                image: { url: perfil },  
                caption: welcomeMessage,
                mentions: [pushname]  
            });
        }




 
//salida del participante//

        if (anu.action == 'remove') {
            const pushname2 = anu.participants[0];
            const perfilSalida = await sock.profilePictureUrl(pushname2, 'image').catch(() => './Archivos/Fotos/salidad.jpg');  
            const farewellMessage = `

❀ *Adios* de  ${groupName}
	✰ ${pushname2}

c fue alv nunca l@ quisimos aqui , que se valla a llorar a otro grupo alv 🤣

> ✐ Puedes usar *#menu* para ver la lista de comandos.
> 🜸 Lain-Iwakura
`

  await sock.sendMessage(anu.id, {
           image: { url: perfilSalida },  
                caption: farewellMessage,
                mentions: [pushname2]  
                
            });
        }
    } catch (e) {
        console.error('🥰 ocurrio un error', e);
    }
});


// ainz-modders 


const alertsPath = './Archivos/alerts.json';
let charDB = {};

try {
    if (fs.existsSync("char.json")) {
        charDB = JSON.parse(fs.readFileSync("char.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar char.json:", error);
} 

if (!fs.existsSync(alertsPath)) {
    fs.writeFileSync(alertsPath, JSON.stringify([]));
}

let alerts = [];
try {
    alerts = JSON.parse(fs.readFileSync(alertsPath, 'utf8'));
} catch (err) {
    console.error("Error leyendo alerts.json:", err);
    alerts = [];
}

try {

sock.ev.on("group-participants.update", async (anu) => {
    if (!alerts.includes(anu.id)) return;

    const groupMetadata = await sock.groupMetadata(anu.id);
    const participants = groupMetadata.participants;

    for (const participant of anu.participants) {
        let action = anu.action;
        let num = participant;
        let usuario = anu.author;

        if (action == 'promote') {
            await sock.sendMessage(anu.id, {
                text: `> ✐  \`¡ALERTA!\` » @${usuario.split('@')[0]} promovió a @${num.split('@')[0]} a administrador del grupo. ✐`,
                mentions: [usuario, num]
            });

        } else if (action == 'demote') {
            await sock.sendMessage(anu.id, {
                text: `> ✐  \`¡ALERTA!\` » @${usuario.split('@')[0]} removió a @${num.split('@')[0]} de administrador del grupo. ✐ `,
                mentions: [usuario, num]
            });
        }
    }
});
} catch (err) {
    console.log(err);
}

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const iswelkom = isGroup ? welkom.includes(from) : false
 const alerts = JSON.parse(fs.readFileSync('./Archivos/alerts.json', 'utf8'));  
 const isAlerts = isGroup ? alerts.includes(from) : false;
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 
 
 let gendersDB = {};

try {
    if (fs.existsSync("genders.json")) {
        gendersDB = JSON.parse(fs.readFileSync("genders.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar genders.json:", error);
}
 
 
 let stypeDB = {};

try {
    if (fs.existsSync("stype.json")) {
        stypeDB = JSON.parse(fs.readFileSync("stype.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar stype.json:", error);
}
 
 
 // CONSTANTES NUEVAS
 

    // Tiempo desde la activación del bot
    let startTime = Date.now();
    function getElapsedTime() {
        let currentTime = Date.now();
        let elapsed = currentTime - startTime;
        let hours = Math.floor(elapsed / (1000 * 60 * 60));
        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours} hrs ${minutes} min`;
    }
 
 const enviar = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
          
 const enviarimagen = (imagen) => {
 sock.sendMessage(from,{ image : imagen }, {quoted : info})
 }
 
 const enviarimagencap = (imagen,caption) => {
 sock.sendMessage(from,{ image : imagen ,caption : caption}, {quoted : info})
 }
 
const enviarvideos = (videos) => {
 sock.sendMessage(from,{ video : video ,mimetype: 'video/mp4' ,ppt: true, caption : caption}, {quoted : info})
 }
 
 const enviarvideoscap = (videos,caption) => {
 sock.sendMessage(from,{ video : videos ,caption : caption}, {quoted : info})
 }
 
const enviarmusica = (audios) => {
 sock.sendMessage(from,{ audio : musica ,mimetype: 'audio/mp4' ,ppt: true,}, {quoted : info})
 }
 
 const enviarsticker = (sticker) => {
 sock.sendMessage(from,{ sticker : sticker }, {quoted : info})
 }
 
 const enviardocumentos = (documento) => {
 sock.sendMessage(from,{document : documento },{quoted : info})
 }
 
const ignorePrivateChats = (sender) => sender && !sender.endsWith("@g.us");

let database = {};
const dbFile = 'database.json';


if (fs.existsSync(dbFile)) {
    database = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
} else {
    database = { series: {}, users: {}, bans: {} };
}


function saveDatabase() {
    fs.writeFileSync(dbFile, JSON.stringify(database, null, 2));
}

module.exports = { database, saveDatabase };

global.imagen1 = fs.readFileSync('./Archivos/Fotos/menu1.jpg');

//cumpleaños

const birthdaysFile = './src/birt.json';

if (!fs.existsSync(birthdaysFile)) fs.writeFileSync(birthdaysFile, '{}');
let birthdaysData = JSON.parse(fs.readFileSync(birthdaysFile, 'utf-8'));

//genero

const genreFile = './src/genero.json';

if (!fs.existsSync(genreFile)) fs.writeFileSync(genreFile, '{}');
let genreData = JSON.parse(fs.readFileSync(genreFile, 'utf-8'));

//descripcion

const descFile = './src/desc.json';


if (!fs.existsSync(descFile)) fs.writeFileSync(descFile, '{}');
let descData = JSON.parse(fs.readFileSync(descFile, 'utf-8'));

//info top


const profilePicDefault = "./Archivos/Fotos/menu1.jpg"; 

const path = require('path');

const [nombreSerieInput, estilo] = q.split("=").map(s => s.trim().toLowerCase());

const xpFile = './xp.json';
const botFile = './index.js'; 

const getBotCommands = () => {
    try {
        const botCode = fs.readFileSync(botFile, 'utf-8');
        const commandRegex = /case\s+['"`]([\w#-]+)['"`]/g;
        let commands = [];
        let match;

        while ((match = commandRegex.exec(botCode)) !== null) {
            commands.push(match[1]);
        }

        return commands;
    } catch (error) {
        console.error("Error al obtener comandos:", error);
        return [];
    }
};

const botCommands = getBotCommands();



try {
    if (fs.existsSync("stype.json")) {
        stypeDB = JSON.parse(fs.readFileSync("stype.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar stype.json:", error);
}

const loadXP = () => {
    try {
        return JSON.parse(fs.readFileSync(xpFile, 'utf-8'));
    } catch {
        return {};
    }
};

const saveXP = (data) => {
    fs.writeFileSync(xpFile, JSON.stringify(data, null, 2));
};

const getRequiredXP = (level) => 100 + level * 50;

const addXP = (userId, comando) => {
    if (!botCommands.includes(comando)) return; 
    let xpData = loadXP();
    if (!xpData[userId]) {
        xpData[userId] = { xp: 0, level: 1, commandsUsed: 0, commands: [] };
    }

    const xpGained = Math.floor(Math.random() * 10) + 5;
    xpData[userId].xp += xpGained;
    xpData[userId].commandsUsed += 1;
    xpData[userId].commands.push(comando);

    if (xpData[userId].commands.length > 5) {
        xpData[userId].commands.shift(); 
    }

    let requiredXP = getRequiredXP(xpData[userId].level);
    while (xpData[userId].xp >= requiredXP) {
        xpData[userId].xp -= requiredXP;
        xpData[userId].level += 1;
        requiredXP = getRequiredXP(xpData[userId].level);
    }

    saveXP(xpData);
    return xpGained;
};

const getXPInfo = (userId) => {
    let xpData = loadXP();
    if (!xpData[userId]) {
        return "> ❀No tienes XP ";
    }

    let { xp } = xpData[userId];
    let requiredXP = getRequiredXP(xpData[userId].level);
    let progress = ((xp / requiredXP) * 100).toFixed(2);

    return ` ${xp} / ${requiredXP} (${progress}%)`;
};

const getLevelInfo = (userId) => {
    let xpData = loadXP();
    if (!xpData[userId]) {
        return "> ❀ No tienes nivel registrado.";
    }

    return ` ${xpData[userId].level}`;
};

const getXPRanking = () => {
    let xpData = loadXP();
    let ranking = Object.entries(xpData)
        .sort((a, b) => (b[1].level - a[1].level) || (b[1].xp - a[1].xp))
        .map(([id, data], index) => `
> ✰ ${index + 1} +${id.split('@')[0]} - ɴɪᴠᴇʟ *${data.level}* *${data.xp}* xᴘ`)
        .slice(0, 10);

    return ranking.length ? `
> ✐ *ᴛᴏᴘ ᴅᴇ ᴜsᴜᴀʀɪᴏs ᴄᴏɴ ᴍᴀs xᴘ*\n${ranking.join("\n")}` : "> ❀ ɴᴏ ʜᴀʏ ᴛᴏᴘs";
};

const getCommandsUsed = (userId) => {
    let xpData = loadXP();
    if (!xpData[userId]) {
        return 0; 
    }
    return xpData[userId].commandsUsed;
};

const getUserInfo = (userId) => {
    let xpData = loadXP();
    if (!xpData[userId]) {
        return "❀ No tienes XP registrada.";
    }

    const { xp, level, commandsUsed, commands } = xpData[userId];
    const requiredXP = getRequiredXP(level);
    const progress = ((xp / requiredXP) * 100).toFixed(2);

    return `「✰」Usuario *${pushname}*\n` +
           `> ❀ *Nivel:* ${level}\n` +
           `> ❀ *XP:* ${xp} / ${requiredXP} (${progress}%)\n` +
           `> ❀ *Comandos usados:* ${commandsUsed}\n` +
           `> ❀ *Últimos comandos:* ${commands.slice(-5).join(", ")}`;
};

const addXPOnCommand = (userId, comando) => {
    const xpGained = addXP(userId, comando);
    if (xpGained) {
        console.log(`❐ @${userId.split('@')[0]} ɢᴀɴᴏ ${xpGained} xᴘ ᴀʟ ᴜsᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ➣ ${comando}`);
    }
};

if (botCommands.includes(comando)) {
    addXPOnCommand(sender, comando);
}

//coins

const coins = './coins/';

if (!fs.existsSync(coins)) fs.mkdirSync(coins);
const getGroupFile = (groupId) => `${coins}${groupId}.json`;

const loadCoinsData = (groupId) => {
    const file = getGroupFile(groupId);
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {};
};

const saveCoinsData = (groupId, data) => {
    fs.writeFileSync(getGroupFile(groupId), JSON.stringify(data, null, 2));
};

const getCurrentDate = () => new Date().toISOString().split('T')[0];


const getTimeRemaining = (lastClaimTime) => {
    const now = new Date();
    const lastClaim = new Date(lastClaimTime);
    const nextClaim = new Date(lastClaim);
    nextClaim.setDate(nextClaim.getDate() + 1);

    const diff = nextClaim - now;
    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `✐ Puedes reclamar en *${hours}h ${minutes}m*`;
};


 //STICKERS
 

 const { enviarVideoAsticker, enviarimagenAsticker } = require('./Archivos/fgs.js');

 
// FUNCIONES NUEVAS
   sock.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     }
     
   
sock.sendPoll = (jid, pushname = '', values = [], selectableCount = 1) => { return sock.sendMessage(jid, { poll: { pushname, values, selectableCount }}) }   
   
   
   
// CREANDO FUNCIONES

const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await sock.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await sock.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 
 const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})



if (!fs.existsSync("./roles.json")) {
    fs.writeFileSync("{}");
}

const MODDERS = "972529216791-1368528951@g.us"; // ID VIP

// roles
function ismodders(sender) {
  try {
    const rolesDB = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    return rolesDB[sender] === "owner" || rolesDB[sender] === "moderador";
  } catch (e) {
    console.error("Error:", e);
    return false;
  }
}
    

function msToTime(ms) {
    let d = Math.floor(ms / (1000 * 60 * 60 * 24));
    let h = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${d > 0 ? d + "d " : ""}${h > 0 ? h + "h " : ""}${m > 0 ? m + "m " : ""}`;
}

let banvans = {};

try {
    if (fs.existsSync("./baneados.json")) {
        banvans = JSON.parse(fs.readFileSync("./baneados.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar baneados.json:", error);
    banvans = {};
}

const banInmunes = new Set(); // Lista de usuarios inmunes al baneo

// Cargar roles de moderadores para hacerlos inmunes
try {
    const rolesDB = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    for (const usuario in rolesDB) {
        if (rolesDB[usuario] === "owner" || rolesDB[usuario] === "moderador" || rolesDB[usuario] === "helper") {
            banInmunes.add(usuario);
        }
    }
} catch (error) {
    console.error("Error al cargar roles.json:", error);
}


if (banvans[sender] && !ismodders(sender)) { 
    let banInfo = banvans[sender];

    if (!banInfo.hasta || Date.now() < banInfo.hasta) {
        return; // Ignorar por completo los mensajes del usuario baneado si no es moderador.
    } else {
        delete banvans[sender]; // Desbanear si ya pasó el tiempo.
        fs.writeFileSync("./baneados.json", JSON.stringify(banvans, null, 2));
    }
}

const cooldownFile = './inter.json';

const loadCooldowns = () => {
    try {
        return fs.existsSync(cooldownFile) ? JSON.parse(fs.readFileSync(cooldownFile, 'utf-8')) : {};
    } catch {
        return {};
    }
};

const saveCooldowns = (data) => {
    fs.writeFileSync(cooldownFile, JSON.stringify(data, null, 2));
};

const checkCooldown = (groupId, userId, command, cooldownTime) => {
    let cooldowns = loadCooldowns();
    let now = Date.now();

    if (!cooldowns[groupId]) cooldowns[groupId] = {}; 
    if (!cooldowns[groupId][userId]) cooldowns[groupId][userId] = {}; 
    if (cooldowns[groupId][userId][command] && now - cooldowns[groupId][userId][command] < cooldownTime) {
        let remaining = Math.ceil((cooldownTime - (now - cooldowns[groupId][userId][command])) / 1000);
        return `> ✐ Debes esperar *${Math.floor(remaining / 60)}m ${remaining % 60}s* antes de usar *${command}* de nuevo en este grupo.`;
    }

    cooldowns[groupId][userId][command] = now;
    saveCooldowns(cooldowns);
    return null; 
};


 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

let seriesDB = {};

try {
    if (fs.existsSync("series.json")) {
        seriesDB = JSON.parse(fs.readFileSync("series.json", "utf8"));
    }
} catch (error) {
    console.error("Error al cargar series.json:", error);
}
 
 // RESPUESTAS AUTOMATICAS
 const respuesta = {
 espere : "Espere un momento porfavor",
 dono : " este comando es solo usado por mi creador",
 premiun: "compre la version premiun",
 grupos : "este comando es solo para grupos",
 privado : " 🕵‍♂️*Este comando solo se puede usar en el chat privado*",
 error : " ⚠️ *Lo siento ocurrio un error, intentelo de nuevo Porfavor*",
 textito : "😤 *Digita un texto Porfavor* ",
 }
 
// MENSAJES EN CONSOLA 
 
 if (isGroup) {
if (isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(hora, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color(comando)}\n${color('┃', 'white')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'yellow')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
 if (!isGroup && isGroup) console.log(`${color('┏━━━━━━━━━┅┅┄┄⟞⟦ ⟝┄┄┉┉━━━━━━━━━┓', 'yellow')}\n${color('┃', 'yellow')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'yellow')} ${color('Nombre:', 'yellow')} ${color(pushname, 'white')}\n${color('┃', 'yellow')} ${color('Horário:', 'yellow')} ${color(time, 'white')}\n${color('┃', 'yellow')} ${color('comando:', 'yellow')} ${color('No', 'white')}\n${color('┃', 'yellow')} ${color('Palabras:', 'yellow')} ${color(budy.length, 'white')}\n${color('┃', 'yellow')} ${color('Grupo:', 'yellow')} ${color(groupName, 'white')}\n${color('┗━━━━━━━━┅┅┄┄⟞⟦⟧⟝┄┄┉┉━━━━━━━━┛', 'yellow')}`)
}



if (!isGroup) {
    return; // Ignora los comandos en privado
}
 

 
switch(comando) {    


case "prueba" :
enviar("> ❀ Prueba realizada con éxito")
break;

case "bot" :
enviar("> ❀ Hola, soy un bot")
break;

case "tag":
case "tagall":
case "mencionar":
    if (!isGroup) return enviar(respuesta.grupos); // Verifica si es un grupo
    if (!isGroupAdmins) return enviar("> ❀ *Este comando solo puede ser usado por administradores del grupo*"); // Verifica si el usuario es administrador 

    if (!q) { // Si el usuario no escribe un mensaje después del comando
        return enviar("> ❀ *Escribe un mensaje para mencionar a todos los miembros del grupo.*");
    } 

    // Obtiene los IDs de los miembros del grupo
    let memberIds = groupMembers.map(member => member.id); 

    // Envía el mensaje con las menciones ocultas
    sock.sendMessage(from, { text: q, mentions: memberIds }); 

    break;


case "menu":
case "help":
case "meñu":
    const videos = fs.readFileSync("./Fotos/menu.mp4");

    const menu = `
 
𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 _Lain-Iwakura_ 
 
\`❱ *Aquí tienes el menú de comandos* ❰\`

      ❀ Comandos utiles ❀ 
\`𔓕 #p - Muestra el tiempo de respuesta del bot\` +
\`𔓕 #promote - Asciende a un miembro del grupo a administrador\` +
\`𔓕 #demote - Desciende a un administrador del grupo a miembro\` +
\`𔓕 #tag/#tagall - Menciona a todos los miembros del grupo\` +
\`𔓕 #close - Cierra el grupo permitiendo que solo los administradores puedan enviar mensajes.\` +
\`𔓕 #open - Abre el grupo permitiendo que todos los miembros puedan enviar mensajes.\` +
\`𔓕 #Alertas on/off - Avisa quien dio/saco admin en un grupo.\` + 
\`𔓕 #Toimg - Convierte un sticker a imagen.\` + 
\`𔓕 #Sticker/#s - Convierte una imagen a sticker.\` +
\`𔓕 #Welcome on/off - Activa o desactiva el mensaje de bienvenida.\` +
\`𔓕 #Goodbye on/off - Activa o desactiva el mensaje de despedida.\` +
\`𔓕 #Setwelcome - Personaliza la bienvenida.\` +
\`𔓕 #Setgoodbye - Personaliza la despedida.\` +
\`𔓕 #Tts - Convierte texto a audio.\` +

   ❀ Búsquedas y Descargas ❀ 
\`𔓕 #App + nombre - Descarga el apk de una aplicación.\` +
\`𔓕 #Pokedex + nombre - Busca la información de un pokemon en específico\` +

`;
           
enviarvideoscap(videos,menu);
break

case 'p':
case 'ping': {
    if (!isGroup) return enviar(respuesta.grupos);

    const startTime = performance.now(); // Medir tiempo exacto
    await new Promise(resolve => setTimeout(resolve, 100)); // Pequeño retraso
    const ping = (performance.now() - startTime).toFixed(2); // Calcular tiempo

    enviar(`pong!   
> ❀ ${ping} ms`);
    break;
}

case "promote": {
    try {
        if (!isGroup) return enviar("🏮 Este comando solo puede ser utilizado en grupos.");
        if (!isGroupAdmins) return enviar("> ✐ No tienes permisos para usar este comando.");
        if (!isBotGroupAdmins) return enviar("> ✐ El bot debe ser administrador para ejecutar este comando.");

        let usuario;

        if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {

            usuario = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
        } else if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.participant) {

            usuario = info.message.extendedTextMessage.contextInfo.participant;
        } else {
            return enviar("> ✐ Menciona o responde a un usuario para promoverlo.");
        }

        await sock.groupParticipantsUpdate(from, [usuario], 'promote');
        enviar(`> ✐ @${usuario.split('@')[0]} ahora es administrador del grupo`, [usuario]);

    } catch (error) {
        console.error("❌ Error en el comando 'promote':", error);
        enviar("> ✐ Ocurrió un error al intentar promover al usuario.");
    }
    break;
}

case "demote": {
    try {
        if (!isGroup) return enviar(respuesta.grupos);
        if (!isGroupAdmins) return enviar("> ❀ Este comando solo puede ser usado por administradores del grupo.");
        if (!isGroupAdmins) return enviar("> ❀ Necesito ser administrador para degradar a alguien.");

        let usuario;

        if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {

            usuario = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
        } else if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.participant) {
        
            usuario = info.message.extendedTextMessage.contextInfo.participant;
        } else {
            return enviar("> ❀ *Menciona o responde a un usuario para degradarlo.*");
        }

        if (!groupAdmins.includes(usuario)) {
            return enviar(`> ❀ @${usuario.split('@')[0]} no es administrador del grupo.`);
        }

        await sock.groupParticipantsUpdate(from, [usuario], "demote");
        enviar(`> ✐ @${usuario.split("@")[0]} ya no es admin del grupo`, 
               { mentions: [usuario] });

    } catch (error) {
        console.error("❌ Error en el comando 'demote':", error);
        enviar("> ❀ No se pudo degradar al usuario.");
    }
    break;
}
    
 case "close":
    if (!isGroup) return;
    await sock.sendMessage(from, { react: { text: '✅', key: info.key } });

    if (!isGroupAdmins) return;
    if (!isBotGroupAdmins) return;

    await sock.groupSettingUpdate(from, "announcement").catch(err => {
        console.error("Error al cerrar grupo:", err);
    });

    break;
    
  case "open":
    if (!isGroup) return;
    await sock.sendMessage(from, { react: { text: '✅', key: info.key } });

    if (!isGroupAdmins) return;
    if (!isBotGroupAdmins) return;

    await sock.groupSettingUpdate(from, "not_announcement").catch(err => {
        console.error("Error al abrir el grupo:", err);
    });

    break;
    
case 'alertas':
    if (!isGroup) return enviar("> ❀ Este comando solo puede ser usado en grupos.");
    if (!isGroupAdmins) return enviar("❖ El comando *alerta* solo puede ser usado por administradores del grupo..");
    if (!isBotGroupAdmins) return enviar("> ❀El bot debe ser administrador.");
    
    if (args.length < 1) {
        return enviar("> ❀Escribe *1* para activar o *0* para desactivar.\nEjemplo:\n*.alerta 1* para activar.\n*.alerta 0* para desactivar.");
    }

    if (Number(args[0]) === 1) {
        if (isAlerts) return enviar("> ❀ Las alertas ya estaban activas.");
        
        alerts.push(from);
        fs.writeFileSync('./Archivos/alerts.json', JSON.stringify(alerts, null, 2));
        
        enviar("> ❀ Las alertas han sido activadas.");
    } else if (Number(args[0]) === 0) {
        if (!isAlerts) return enviar("> ❀ Las alertas ya estaban desactivadas.");
        
        const index = alerts.indexOf(from);
        if (index !== -1) {
            alerts.splice(index, 1);
            fs.writeFileSync('./Archivos/alerts.json', JSON.stringify(alerts, null, 2));
        }
        
        enviar("> ❀ Las alertas han sido desactivadas.");
    } else {
        enviar("> ❀ Usa *1* para activar o *0* para desactivar.");
    }
    break;
   
case 'toimg':
  if (!isQuotedSticker) return enviar('《✧》Debes citar un sticker para convertir a imagen.')
  try {
    buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
    sock.sendMessage(from, { image: buff }, { quoted: info })
      .catch(e => {
        console.log(e)
        enviar('> ❀Ocurrió un error al convertir el sticker a imagen.')
      })
  } catch {
    enviar('> ❀error')
  }
  break
  
case 'reporte':{
	if (!isGroup) return enviar(`> ❀ este comando solo funciona en grupos`)
sock.sendMessage('54934352262059@s.whatsapp.net',{text : `> ❀hola esta fallando un comando en el bot  :\n\n• ${q}`},{quoted : info })
enviar("> ❀ tu reporte ha sido enviado correctamente")
}
break


case 'tts':
    if (!q) return enviar("> ❀ Proporciona un texto para convertir a voz.");

    try {
 
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(q)}&tl=es&client=tw-ob`;

        await sock.sendMessage(from, {
            audio: { url }, 
            mimetype: 'audio/mpeg',
            ptt: true 
        }, { quoted: info });

    } catch (error) {
        console.error(error);
        enviar("> ❀error");
    }
    break;
   

case 'gitsearch': {

  if (!q) {
    enviar('《✧》Escribe lo que deseas buscar en GitHub.\nEjemplo: >gitsearch juegos');
    break;
  }

  const keyword = q.trim();

  try {
    enviar('> ❀Buscando en GitHub');

    let res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=5`);
    if (res.status !== 200) throw '> ✐ Error en la búsqueda de repositorios.';

    let json = await res.json();
    if (json.items.length === 0) {
      enviar('> ❀No se encontraron repositorios.');
      break;
    }

    let resultMessage = `> ❀*Repositorios para "${keyword}" *\n`;

    json.items.forEach((repo, index) => {
      resultMessage += `
> ❀ ${index + 1}. *${repo.full_name}
> *DESCRIPCIÓN:* ${repo.description || 'Sin descripción'}
> *ESTRELLAS:* ${repo.stargazers_count}
> *Ver Repositorio*(${repo.html_url})
────────────────────────
`;
    });

    await sock.sendMessage(from, {
      text: resultMessage,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: `Resultados para "${keyword}"`,
          body: 'Búsqueda en GitHub',
          thumbnailUrl: imagen1,
          sourceUrl: `https://github.com/search?q=${encodeURIComponent(keyword)}`
        }
      }
    }, { quoted: global.estilo2 });

  } catch (error) {
    enviar(`> ❀ Error`);
  }
}
break;

case 'gitclone': {

  if (!q) {
    enviar('《✧》 *Ingrese el enlace del repositorio de GitHub.*\nEjemplo: >gitclone https://github.com/usuario/repositorio');
    break;
  }

  const repoUrl = q.trim();
  const repoMatch = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

  if (!repoMatch) {
    enviar('> ❀ *El enlace proporcionado no es válido.*\nEjemplo correcto: https://github.com/usuario/repositorio');
    break;
  }

  const usuario = repoMatch[1];
  const repositorio = repoMatch[2];

  try {
    enviar('> ✐ Obteniendo información del repositorio...');
    let resInfo = await fetch(`https://api.github.com/repos/${usuario}/${repositorio}`);
    if (resInfo.status !== 200) throw '⚠️ Repositorio no encontrado o error en la búsqueda.';
    let json = await resInfo.json();

    const gitInfo = `
《✧》INFO REPO
────────────────────────
> ❀ *NOMBRE:* ${json.name || 'N/A'}
> *PROPIETARIO:* ${json.owner?.login || 'N/A'}
> *LINK:* ${json.html_url || 'N/A'}
> *STARS:* ${json.stargazers_count || 0}
> *FORKS:* ${json.forks_count || 0}
> *ISSUES ABIERTOS:* ${json.open_issues_count || 0}
> *TAMAÑO APROX.:* ${(json.size / 1024).toFixed(2)} MB
> *ÚLTIMA ACTUALIZACIÓN:* ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}
────────────────────────
`;

    const zipUrl = `${json.html_url}/archive/refs/heads/${json.default_branch}.zip`;

    enviar('> ❀ Descargando archivo ZIP del repositorio, por favor espera...');
    let zipRes = await fetch(zipUrl);
    if (!zipRes.ok) throw '> ✐ Error al descargar el archivo ZIP del repositorio.';
    const arrayBuffer = await zipRes.arrayBuffer();
    let zipBuffer = Buffer.from(arrayBuffer);
    console.log(`> ❀ Tamaño del ZIP: ${(zipBuffer.length / (1024 * 1024)).toFixed(2)} MB`);

    await sock.sendMessage(from, {
      text: `${gitInfo}\n> ❀ *Archivo ZIP descargado (tamaño: ${(zipBuffer.length / (1024 * 1024)).toFixed(2)} MB)*`,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: `${json.name || 'GitHub'}`,
          body: `${json.description || 'Sin descripción'}`,
          thumbnailUrl: imagen1,
          sourceUrl: json.html_url || 'https://github.com',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: global.estilo2 });

    await delay(2000);
    await sock.sendMessage(from, {
      document: zipBuffer,
      mimetype: 'application/zip',
      fileName: `${json.name || 'repositorio'}.zip`
    });
  } catch (error) {
    enviar(`> ✐ *Error:* ${error}`);
  }
}
break;

case 'listadmin':
 if(!isGroup) return enviar('> ❀ Este comando solo puede ser usado en grupos.')
 teks = `
《✧》 admins del grupo
> ❀ total : ${groupAdmins.length}\n`
        no = 0
        for (let admon of groupAdmins) {
          no += 1
          teks += `> ❀ ${no.toString()}] @${admon.split('@')[0]}\n`
        }
        mentions(teks, groupAdmins, true)
        break
        
case 'app':
    	if (!isGroup) return enviar(`> ❀ ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)
    if (args.length == 0) return sock.sendMessage(from, { text: `《✧》¿Dónde está el nombre del app? *Ejemplo de uso:* ${prefixo[0]}${comando} WhatsApp` });

    try {
        const query = encodeURIComponent(args.join(" "));
        const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${query}&trusted=true`);
        if (aptoide.data.datalist.total == 0) {
            return sock.sendMessage(from, { text: `> ❀No se encontraron resultados para la búsqueda.` });
        }
        const appData = aptoide.data.datalist.list[0];
        const apkUrl = appData.file.path; 
        const imageUrl = appData.graphic; 
        await sock.sendMessage(from, {
            image: { url: imageUrl }, 
            caption: `> *Resultado de Aptoide*\n\n` +
                     `> *Nombre:* ${appData.name}\n` +
                     `> *Tamaño:* ${(appData.size / 1048576).toFixed(1)} MB\n\n` +
                     `> *Descargando el APK...*`,
        });
        await sock.sendMessage(from, {
            document: { url: apkUrl }, 
            mimetype: 'application/vnd.android.package-archive', 
            fileName: `${appData.name}.apk`, 
            caption: `Aquí tienes el APK de *${appData.name}*`
        });
    } catch (e) {
        console.error('Error al buscar en Aptoide: ', e);
        sock.sendMessage(from, { text: `> ❀Hubo un error al procesar tu solicitud.` });
    }
    break;
    
case "xnxxsearch":
case "xnxxs": {
  if (!isGroup) return enviar(`> ❀ ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)

  if (!q) {
    return enviar("> ❀ Por favor, ingrese la búsqueda.\n> Ejemplo: *xnxxsearch Con mi prima*");
  }

  try {
    const vids_ = {
      from: sender,
      urls: [],
    };

    if (!global.videoListXXX) {
      global.videoListXXX = [];
    }

    if (global.videoListXXX[0]?.from === sender) {
      global.videoListXXX.splice(0, global.videoListXXX.length);
    }

    const baseurl = 'https://www.xnxx.com';
    const fetch = require('node-fetch');
    const cheerio = require('cheerio');

    const response = await fetch(`${baseurl}/search/${q}/${Math.floor(Math.random() * 3) + 1}`);
    const res = await response.text();
    const $ = cheerio.load(res);

    const title = [];
    const url = [];
    const desc = [];
    const results = [];

    $('div.mozaique').each(function(a, b) {
      $(b).find('div.thumb').each(function(c, d) {
        url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
      });
    });

    $('div.mozaique').each(function(a, b) {
      $(b).find('div.thumb-under').each(function(c, d) {
        desc.push($(d).find('p.metadata').text());
        $(d).find('a').each(function(e, f) {
          title.push($(f).attr('title'));
        });
      });
    });

    for (let i = 0; i < title.length; i++) {
      results.push({ title: title[i], info: desc[i], link: url[i] });
    }

    let cap = `> ❀Resultados de la búsqueda:* ${q.toUpperCase()}\n\n`;
    let count = 1;

    for (const v of results) {
      const linkXXX = v.link;
      vids_.urls.push(linkXXX);
      cap += `> ✐ *${count}*\n•  \`Título\` ${v.title}\n•  \`Link\` ${v.link}\n•  \`Info\` ${v.info}\n\n`;
      cap += '________________________\n\n';
      count++;
    }

    await sock.sendMessage(from, { text: cap }, { quoted: info });
    global.videoListXXX.push(vids_);

  } catch (e) {
    return enviar(`> ❀Ocurrió un error: ${e.message}`);
  }
  break;
}


case 'setbirth': {
    if (!args[0]) {
        return enviar(`《✧》Debes ingresar una fecha valida para tu cumpleaños.

> ✐ Ejemplo 1 » *#setbirth 01/01/2000* (mes/dia/año)
> ✐ Ejemplo 2 » *#setbirth 01/01* (mes/dia)
> ✐ Ejemplo 3 » *#setbirth 1 january*
> ✐ Ejemplo 4 » *#setbirth 24 december*`);
    }

    const userId = sender;
    const inputDate = args.join(" ");

    let parsedDate;
    try {
        parsedDate = new Date(inputDate);
        if (isNaN(parsedDate)) throw new Error("Fecha inválida");
    } catch (error) {
        return enviar("> ❀ fecha invalida");
    }

    const day = parsedDate.getDate();
    const month = parsedDate.toLocaleString('es-ES', { month: 'long' });
    const weekday = parsedDate.toLocaleString('es-ES', { weekday: 'long' });

    birthdaysData[userId] = { date: `${day} ${month}` };
    fs.writeFileSync(birthdaysFile, JSON.stringify(birthdaysData, null, 2), 'utf-8');

    enviar(`「✐」Se ha establecido tu cumpleaños en *${weekday}, ${day}* de *${month}* `);
    break;
}


case 'setgenre': {
    if (!args[0]) {
        return enviar(`《✧》Debes ingresar un genero valido.
> Ejemplo » *#setgenre hombre*`);
    }

    const userId = sender;
    const inputGenre = args[0].toLowerCase();
    const validGenres = ["hombre", "mujer", "gay"];

    if (!validGenres.includes(inputGenre)) {
        return enviar("> ✐ Género no válido. Usa: *hombre*, *mujer* o *gay*");
    }


    genreData[userId] = { genre: inputGenre };
    fs.writeFileSync(genreFile, JSON.stringify(genreData, null, 2), 'utf-8');

    enviar(`✐ Se ha establecido tu genero en *${inputGenre}* !`);
    break;
}


case 'setdesc': {
    if (!args[0]) {
        return enviar(`《✧》Debes ingresar una descripción valida para tu perfil. 
> ✐ ejemplo *#setdesc Hola, me llamo Pablo y me gusta el pan*`);
    } 

    const userId = sender;
    const userDesc = args.join(" ");

    descData[userId] = { description: userDesc };
    fs.writeFileSync(descFile, JSON.stringify(descData, null, 2), 'utf-8');

    enviar(`✐ Se ha establecido tu descripcion. Puedes verla usando #profile*`);
    break;
}

case 'profile': {
    
    let mentionedUser = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender;

    let userName;
    
    try {
        if (mentionedUser === sender) {
            
            userName = pushname || "Desconocido";
        } else {
            // Si es otro usuario, mostrar su número en formato internacional
            userName = `+${mentionedUser.split('@')[0]}`;
        }
    } catch (err) {
        console.log("Error obteniendo el nombre del usuario:", err);
        userName = `+${mentionedUser.split('@')[0]}`; // En caso de error, usa el número
    }

    // Obtener la foto de perfil
    let profilePic;
    try {
        profilePic = await sock.profilePictureUrl(mentionedUser, 'image');
    } catch {
        profilePic = profilePicDefault; // Si no tiene foto, usa la predeterminada
    }

    // Obtener la información guardada del usuario
    let birthInfo = birthdaysData[mentionedUser]?.date || "No registrado";
    let descInfo = descData[mentionedUser]?.description || "Sin descripción";
    let genreInfo = genreData[mentionedUser]?.genre || "No especificado";

    // Construir el mensaje del perfil con el formato correcto
    let profileMessage = `
𐙚⋆°. *Perfil de ${userName}* 
_${descInfo}_

✦ *Cumpleaños:* ${birthInfo}
✦ *Género:* ${genreInfo}

✦ *nivel:* ${getLevelInfo(sender)}
✦ *xp:* ${getXPInfo(sender)}

> ❀ comandos usados ${getCommandsUsed(sender)}
`;

    // Enviar el mensaje con la imagen
    await sock.sendMessage(from, {
        image: { url: profilePic },
        caption: profileMessage,
        mentions: [mentionedUser]
    }, { quoted: info });

    break;
}

case "pfp": {
  try {
    let target = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

    if (!target) {
    
      return enviar("《✧》Por favor, menciona al usuario que deseas ver su foto de perfil.");
    }

    let ppUrl;
    try {
      ppUrl = await sock.profilePictureUrl(target, 'image');
    } catch (e) {
     
      ppUrl = 'https://files.catbox.moe/xr2m6u.jpg';
    }

    await sock.sendMessage(from, {
      image: { url: ppUrl },
    }, { quoted: info });

  } catch (err) {

    enviar("> ❀ Hubo un error al obtener la foto de perfil.");
    console.error(err);
  }
  break;
}


case 'welcome': 
	if (!isGroup) return enviar(`> ❀ ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)
if(args.length<1) return enviar(`❒ Un administrador puede activar o desactivar el mensaje de bienvenida utilizando:

✐ _Activar_ » *#welcome on*
✐ _Desactivar_ » *#welcome off*

✦ Estado actual: *${iswelkom ? '✓Activado' : '✗Desactivado'}*
> Si el mensaje de bienvenida está activado, *Asuna* enviará un mensaje de bienvenida a los nuevos miembros del grupo.`)
if(!isGroup) return enviar (respuesta.grupos)
if(!isGroupAdmins) return enviar ("> ❀ *Este comando solo puede ser usado por administradores del grupo* ")
if(!isBotGroupAdmins) return enviar("> ✐ el bot tiene que ser admin") 
if(Number(args[0])===1) {
if(iswelkom) return enviar('✐ Has *activado* el mensaje de bienvenida!')
welkom.push(from)
fs.writeFileSync('./Archivos/welkom.json',JSON.stringify(welkom))
enviar('《✧》 El mensaje de bienvenida ya estaba activado.︎')
} else if (Number(args[0])===0) {
if (!iswelkom) return enviar('《✧》 El mensaje de bienvenida ya estaba desactivado.')
const comandante1 = from
 processo = welkom.indexOf(comandante1)
while(processo>=0) {
welkom.splice(processo, 1)
 processo = welkom.indexOf(comandante1)
}
fs.writeFileSync('./Archivos/welkom.json',JSON.stringify(welkom))
enviar('✐ Has *desactivado* el mensaje de bienvenida!')
} else {
enviar('> ✐ ingrese on para activar y off para desactivar')
}
break

case 'abrazar': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }


    let userName = info.pushName || "Usuario";

    
    const hugVideos = [
      "https://telegra.ph/file/4d80ab3a945a8446f0b15.mp4",
      "https://telegra.ph/file/ef3a13555dfa425fcf8fd.mp4",
      "https://telegra.ph/file/582e5049e4070dd99a995.mp4",
      "https://telegra.ph/file/ab57cf916c5169f63faee.mp4",
      "https://telegra.ph/file/fce96960010f6d7fc1670.mp4",
      "https://telegra.ph/file/33332f613e1ed024be870.mp4"
    ];

    const randomVideo = hugVideos[Math.floor(Math.random() * hugVideos.length)];

    // Caso 1: No se menciona a nadie
    if (!who) {
      const selfHugMessage = `> ❀ ${userName} se abrazó a sí mismo 🫂`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfHugMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0];
    }

    const hugMessage = `> ❀ ${userName} le está dando un fuerte abrazo a ${mentionedUserName} 🫂`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: hugMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando abrazar:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case '69':
case 'sixnine': {
  try {
   
    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }


    let userName = info.pushName || "Usuario";

    const sixNineVideos = [
      "https://telegra.ph/file/bb4341187c893748f912b.mp4",
      "https://telegra.ph/file/c7f154b0ce694449a53cc.mp4",
      "https://telegra.ph/file/1101c595689f638881327.mp4",
      "https://telegra.ph/file/f7f2a23e9c45a5d6bf2a1.mp4",
      "https://telegra.ph/file/a2098292896fb05675250.mp4",
      "https://telegra.ph/file/16f43effd7357e82c94d3.mp4",
      "https://telegra.ph/file/55cb31314b168edd732f8.mp4",
      "https://telegra.ph/file/1cbaa4a7a61f1ad18af01.mp4",
      "https://telegra.ph/file/1083c19087f6997ec8095.mp4"
    ];

    const randomVideo = sixNineVideos[Math.floor(Math.random() * sixNineVideos.length)];

    if (!who) {
      const self69Message = `> ❀ ${userName} está haciendo un 69 consigo mismo 🔥`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: self69Message,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0];
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const sixNineMessage = `> ❀ ${userName} está haciendo un 69 con ${mentionedUserName} 🔥`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: sixNineMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando 69:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'agarrartetas':
case 'grabboobs': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

 
    let userName = info.pushName || "Usuario";

    const grabBoobsVideos = [
      "https://telegra.ph/file/82d32821f3b57b62359f2.mp4",
      "https://telegra.ph/file/04bbf490e29158f03e348.mp4",
      "https://telegra.ph/file/37c21753892b5d843b9ce.mp4",
      "https://telegra.ph/file/075db3ebba7126d2f0d95.mp4",
      "https://telegra.ph/file/e6bf14b93dfe22c4972d0.mp4",
      "https://telegra.ph/file/05c1bd3a2ec54428ac2fc.mp4",
      "https://telegra.ph/file/e999ef6e67a1a75a515d6.mp4",
      "https://telegra.ph/file/538c95e4f1c481bcc3cce.mp4",
      "https://telegra.ph/file/61d85d10baf2e3b9a4cde.mp4",
      "https://telegra.ph/file/36149496affe5d02c8965.mp4"
    ];

    const randomVideo = grabBoobsVideos[Math.floor(Math.random() * grabBoobsVideos.length)];

    if (!who) {
      const selfGrabMessage = `> ❀ ${userName} se esta agarrando las tetas 🔥`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfGrabMessage,
      }, { quoted: info });

      return; 
    }

 
    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0];
    }

    const grabBoobsMessage = `> ❀ ${userName} está agarrando las tetas de ${mentionedUserName} 🔥`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: grabBoobsMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando agarrartetas:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'anal':
case 'culiar': {
  try {
    
    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    let userName = info.pushName || "Usuario";

    const analVideos = [
      "https://telegra.ph/file/7185b0be7a315706d086a.mp4",
      "https://telegra.ph/file/a11625fef11d628d3c8df.mp4",
      "https://telegra.ph/file/062b9506656e89b069618.mp4",
      "https://telegra.ph/file/1325494a54adc9a87ec56.mp4"
    ];

    const randomVideo = analVideos[Math.floor(Math.random() * analVideos.length)];

    if (!who) {
      const selfAnalMessage = `> ❀ ${userName} se la metio en el ano 👻>.<`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfAnalMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const analMessage = `> ❀ ${userName} se la metió en el ano a ${mentionedUserName}! >.<`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: analMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando anal:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'sonrojarse':
case 'blush': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    let userName = info.pushName || "Usuario";

    const blushVideos = [
      "https://telegra.ph/file/a4f925aac453cad828ef2.mp4",
      "https://telegra.ph/file/f19318f1e8dad54303055.mp4",
      "https://telegra.ph/file/15605caa86eee4f924c87.mp4",
      "https://telegra.ph/file/d301ffcc158502e39afa7.mp4",
      "https://telegra.ph/file/c6105160ddd3ca84f887a.mp4",
      "https://telegra.ph/file/abd44f64e45c3f30442bd.mp4",
      "https://telegra.ph/file/9611e5c1d616209bc0315.mp4"
    ];

    const randomVideo = blushVideos[Math.floor(Math.random() * blushVideos.length)];

    if (!who) {
      const selfBlushMessage = `> ❀ ${userName} se sonrojó sin razón aparente 🤭`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfBlushMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const blushMessage = `> ❀ ${userName} se sonrojó por ${mentionedUserName} 🤭`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: blushMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando sonrojarse:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'chupartetas':
case 'suckboobs': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    let userName = info.pushName || "Usuario";

    const suckBoobsVideos = [
      "https://telegra.ph/file/1104aa065e51d29a5fb4f.mp4",
      "https://telegra.ph/file/f8969e557ad07e7e53f1a.mp4",
      "https://telegra.ph/file/f8cf75586670483fadc1d.mp4",
      "https://telegra.ph/file/7b181cbaa54eee6c048fc.mp4",
      "https://telegra.ph/file/01143878beb3d0430c33e.mp4",
      "https://telegra.ph/file/9827c7270c9ceddb8d074.mp4",
      "https://telegra.ph/file/95efbd8837aa18f3e2bde.mp4",
      "https://telegra.ph/file/b178b294a963d562bb449.mp4",
      "https://telegra.ph/file/949dff632250307033b2e.mp4",
      "https://telegra.ph/file/9e1240c29f3a6a9867aaa.mp4"
    ];

    const randomVideo = suckBoobsVideos[Math.floor(Math.random() * suckBoobsVideos.length)];

    if (!who) {
      const selfSuckMessage = `> ❀ ${userName} se está chupando sus propias tetas 🔥`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfSuckMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const suckBoobsMessage = `> ❀ ${userName} le está chupando las tetas a ${mentionedUserName} 🔥`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: suckBoobsMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando chupartetas:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'cum': {
  try {
  
    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    let userName = info.pushName || "Usuario";

    const cumVideos = [
      "https://telegra.ph/file/9243544e7ab350ce747d7.mp4",
      "https://telegra.ph/file/fadc180ae9c212e2bd3e1.mp4",
      "https://telegra.ph/file/79a5a0042dd8c44754942.mp4",
      "https://telegra.ph/file/035e84b8767a9f1ac070b.mp4",
      "https://telegra.ph/file/0103144b636efcbdc069b.mp4",
      "https://telegra.ph/file/4d97457142dff96a3f382.mp4",
      "https://telegra.ph/file/b1b4c9f48eaae4a79ae0e.mp4",
      "https://telegra.ph/file/5094ac53709aa11683a54.mp4",
      "https://telegra.ph/file/90ad889125a3ba40bceb8.jpg",
      "https://telegra.ph/file/dc279553e1ccfec6783f3.mp4",
      "https://telegra.ph/file/acdb5c2703ee8390aaf33.mp4"
    ];

    const randomVideo = cumVideos[Math.floor(Math.random() * cumVideos.length)];

    if (!who) {
      const selfCumMessage = `> ❀ ${userName} se vino solo 💦`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfCumMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0];
    }

    const cumMessage = `> ❀ ${userName} se vino dentro de ${mentionedUserName} 💦`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: cumMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando cum:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'dance':
case 'bailar': {
  try {
    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    } else {
      who = null;
    }

    let userName = info.pushName || "Usuario";

    const danceVideos = [
      "https://i.imgur.com/oDz18Wk.mp4",
      "https://i.imgur.com/BZIOZ7Q.mp4"
    ];


    const randomVideo = danceVideos[Math.floor(Math.random() * danceVideos.length)];

    if (!who) {
      const soloDanceMessage = `> ❀ ${userName} está bailando solo (ﾉ^ヮ^)ﾉ*:・ﾟ✧`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: soloDanceMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const danceMessage = `> ❀ ${userName} está bailando con ${mentionedUserName} (ﾉ^ヮ^)ﾉ*:・ﾟ✧`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: danceMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando dance:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'kiss':
case 'beso':
case 'besar': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null;
    }

let nombreSerie = ""; // Variable global vacía

    let userName = info.pushName || "Usuario";

    const kissVideos = [
      "https://telegra.ph/file/d6ece99b5011aedd359e8.mp4",
      "https://telegra.ph/file/ba841c699e9e039deadb3.mp4",
      "https://telegra.ph/file/6497758a122357bc5bbb7.mp4",
      "https://telegra.ph/file/8c0f70ed2bfd95a125993.mp4",
      "https://telegra.ph/file/826ce3530ab20b15a496d.mp4",
      "https://telegra.ph/file/f66bcaf1effc14e077663.mp4",
      "https://telegra.ph/file/e1dbfc56e4fcdc3896f08.mp4",
      "https://telegra.ph/file/0fc525a0d735f917fd25b.mp4",
      "https://telegra.ph/file/68643ac3e0d591b0ede4f.mp4",
      "https://telegra.ph/file/af0fe6eb00bd0a8a9e3a0.mp4"
    ];

    const randomVideo = kissVideos[Math.floor(Math.random() * kissVideos.length)];

    if (!who) {
      const selfKissMessage = `> ❀ ${userName} se dio un beso a sí mismo ❤`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfKissMessage,
      }, { quoted: info });

      return; 
    }


    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const kissMessage = `> ❀ ${userName} le dio besos a ${mentionedUserName} ❤`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: kissMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando kiss:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}

case 'laugh':
case 'reirse':
case 'burlarse': {
  try {

    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    let userName = info.pushName || "Usuario";

    const laughVideos = [
      "https://telegra.ph/file/5fa4fd7f4306aa7b2e17a.mp4",
      "https://telegra.ph/file/b299115a77fadb7594ca0.mp4",
      "https://telegra.ph/file/9938a8c2e54317d6b8250.mp4",
      "https://telegra.ph/file/e6c7b3f7d482ae42db9a7.mp4",
      "https://telegra.ph/file/a61b52737df7459580129.mp4",
      "https://telegra.ph/file/f34e1d5c8f17bd2739a51.mp4",
      "https://telegra.ph/file/c345ed1ca18a53655f857.mp4",
      "https://telegra.ph/file/4eec929f54bc4d83293a3.mp4",
      "https://telegra.ph/file/856e38b2303046990531c.mp4"
    ];

    const randomVideo = laughVideos[Math.floor(Math.random() * laughVideos.length)];

    if (!who) {
      const selfLaughMessage = `> ❀ ${userName} se está riendo solo 😹`;

      await sock.sendMessage(from, {
        video: { url: randomVideo },
        gifPlayback: true,
        caption: selfLaughMessage,
      }, { quoted: info });

      return; 
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }

    const laughMessage = `> ❀ ${userName} se está riendo de ${mentionedUserName} 😹`;

    await sock.sendMessage(from, {
      video: { url: randomVideo },
      gifPlayback: true,
      caption: laughMessage,
      mentions: [who] 
    }, { quoted: info });

  } catch (error) {
    console.error("Error en el comando laugh:", error);
    enviar("> ✐ *¡Ocurrió un error!*");
  }
  break;
}


case 'gay':
case 'lesbiana':
case 'pajero':
case 'pajera':
case 'puto':
case 'puta':
case 'manco':
case 'manca':
case 'rata':
case 'prostituta':
case 'prostituto': {
  try {
   
    let who;
    if (isGroup) {
      who = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || quoted?.participant;
    } else {
      who = null; 
    }

    if (!who) {
      return enviar("> ✐ Por favor, menciona a un usuario.");
    }

    let mentionedUserName;
    try {
      const [user] = await sock.onWhatsApp(who);
      mentionedUserName = user?.pushName || who.split('@')[0]; 
    } catch {
      mentionedUserName = who.split('@')[0]; 
    }
    
    const percentages = Math.floor(Math.random() * 101); 

    let emoji = '';
    let description = '';

    switch (comando) {
      case 'gay':
        emoji = '🏳️‍🌈';
        if (percentages < 50) {
          description = `💙 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* Gay ${emoji}\n> ✰ Eso es bajo, ¡Tú eres Joto, no Gay!`;
        } else {
          description = `🖤 Los cálculos han arrojado que ${mentionedUserName} es *${percentages}%* Gay ${emoji}\n> ✰ Lo tuyo, lo tuyo es que eres Gay.`;
        }
        break;

      case 'lesbiana':
        emoji = '🏳️‍🌈';
        if (percentages < 50) {
          description = `👻 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n✰ Quizás necesites más películas románticas en tu vida.`;
        } else {
          description = `💗 Los cálculos han arrojado que ${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Mantén el amor floreciendo!`;
        }
        break;

      case 'pajero':
      case 'pajera':
        emoji = '😏💦';
        if (percentages < 50) {
          description = `🧡 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Tal vez necesites más hobbies!`;
        } else {
          description = `💞 Los cálculos han arrojado que ${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Mantén el buen trabajo (en solitario).`;
        }
        break;

      case 'puto':
      case 'puta':
        emoji = '🔥🥵';
        if (percentages < 50) {
          description = `😼 Los cálculos han arrojado que ${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✧ ¡Más suerte en tu próxima conquista!`;
        } else {
          description = `😺 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Mantén ese encanto ardiente!`;
        }
        break;

      case 'manco':
      case 'manca':
        emoji = '💩';
        if (percentages < 50) {
          description = `🌟 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ ¡No eres el único en ese club!`;
        } else {
          description = `🥷 Los cálculos han arrojado que ${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Mantén esa actitud valiente!`;
        }
        break;

      case 'rata':
        emoji = '🐁';
        if (percentages < 50) {
          description = `💥 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Nada de malo en disfrutar del queso!`;
        } else {
          description = `👑 Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Come queso con responsabilidad!`;
        }
        break;

      case 'prostituta':
      case 'prostituto':
        emoji = '🫦👅';
        if (percentages < 50) {
          description = `❀ Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ El mercado está en auge!`;
        } else {
          description = `✨️ Los cálculos han arrojado que +${mentionedUserName} es *${percentages}%* ${comando} ${emoji}\n> ✰ Siempre es hora de negocios!`;
        }
        break;

      default:
        return enviar("☁️ Comando inválido.");
    }

 
    const responses = [
      "El universo ha hablado.",
      "Los científicos lo confirman.",
      "¡Sorpresa!"
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];

    // Mensaje final
    const cal = `💫 *CALCULADORA*

${description}

➣ ${response}`.trim();

    async function loading() {
      const hawemod = [
        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
        "《 ████▒▒▒▒▒▒▒▒》30%",
        "《 ███████▒▒▒▒▒》50%",
        "《 ██████████▒▒》80%",
        "《 ████████████》100%"
      ];

      let { key } = await sock.sendMessage(from, { text: `🤍 ¡Calculando Porcentaje!`, mentions: [who] }, { quoted: info });

      for (let i = 0; i < hawemod.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await sock.sendMessage(from, { text: hawemod[i], edit: key, mentions: [who] }, { quoted: info });
      }

      await sock.sendMessage(from, { text: cal, edit: key, mentions: [who] }, { quoted: info });
    }

    await loading();

  } catch (error) {
    console.error("Error en el comando:", error);
    enviar("> ✐ *Ocurrió un error!*");
  }
  break;
}

case 'xp': {
    const xpInfo = getXPInfo(sender);
    enviar(`> ✐ ${xpInfo} `);
    break;
}

case 'level': {
    const levelInfo = getLevelInfo(sender);
    enviar(`> ✐ ${levelInfo}`);
    break;
}

case 'top': {
    const ranking = getXPRanking();
    enviar(` ${ranking} `);
    break;
}

case 'lvl': {
    enviar(` ${getUserInfo(sender)} `);
    break;
}

    
case 'pokedex': {
    if (!args[0]) return enviar('> ❀ *¿Qué Pokémon quieres buscar?*');


    await sock.sendMessage(from, { react: { text: '⏳', key: info.key } });

    let pokemonName = args.join(" ").toLowerCase();
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(pokemonName)}`;

    try {
        let res = await fetch(apiUrl);
        if (!res.ok) throw new Error('No encontrado');

        let data = await res.json();

        let name = data.name.toUpperCase();
        let id = data.id;
        let types = data.types.map(t => t.type.name).join(', ');
        let height = data.height / 10 + ' m';
        let weight = data.weight / 10 + ' kg';
        let abilities = data.abilities.map(a => a.ability.name).join(', ');
        let image = data.sprites.other['official-artwork'].front_default;

        // Mensaje de respuesta formateado
        let pokedexEntry = `
> ✐ *Pokédex - ${name}*  
> ✐ *ID:* ${id}  
> ✐ *Tipo:* ${types}  
> ✐ *Habilidades:* ${abilities}  
> ✐ *Altura:* ${height}  
> ✐ *Peso:* ${weight}  
`;

        await sock.sendMessage(from, {
            image: { url: image },
            caption: pokedexEntry
        }, { quoted: info });


        await sock.sendMessage(from, { react: { text: '✅', key: info.key } });
    } catch (err) {

        await sock.sendMessage(from, { react: { text: '❌', key: info.key } });
        enviar('✐ *¡Oops! No se encontró el Pokémon, intenta con otro nombre.*');
    }
    break;
}

case 'zodiac': {
    if (!args[0] || !args[1] || !args[2]) {
        return enviar(`> ✐ *Ejemplo:*  *${prefixo}zodiac 2000 06 09* (Año Mes Día)`);
    }

    const dateInput = `${args[0]}-${args[1]}-${args[2]}`;
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
        return enviar("> ✐ Fecha inválida. Usa el formato *AAAA MM DD* (Ejemplo: 2003 02 07).");
    }
    
    const zodiak = [
    ["Capricornio", new Date(1970, 0, 1)],
    ["Acuario", new Date(1970, 0, 20)],
    ["Piscis", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Tauro", new Date(1970, 3, 21)],
    ["Géminis", new Date(1970, 4, 21)],
    ["Cáncer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Escorpio", new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio", new Date(1970, 11, 22)]
].reverse();

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day);
    return zodiak.find(([_, _d]) => d >= _d)[0];
}
    

    const d = new Date();
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    const zodiac = getZodiac(birth[1], birth[2]);

    const age = d.getFullYear() - birth[0];
    const isBirthday = (d.getMonth() + 1 === birth[1] && d.getDate() === birth[2]);
    const birthdayMsg = isBirthday ? `> ✐ *${age} años - ¡Feliz cumpleaños!* ` : `${age} años`;

    const birthdayNext = [d.getFullYear() + (birth[1] < (d.getMonth() + 1)), birth[1], birth[2]];

    const message = `
> ✐ *Fecha de nacimiento:* ${birth.join('-')}
> ✐ *Próximo cumpleaños:* ${birthdayNext.join('-')}
> ✐ *Edad:* ${birthdayMsg}
> ✐ *Signo Zodiacal:* ${zodiac}
`;

    enviar(message);
    break;
}


case 'imglink':
case 'uploadapi':
case 'link2': { 
    try {
        if (isQuotedImage || isQuotedVideo) {
            let boij = isQuotedImage 
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage 
                : info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage;

            const fetch = require('node-fetch');
            const FormData = require('form-data');
            

            async function uploadImageToImgur(imageBuffer) {
                const form = new FormData();
                form.append('image', imageBuffer, { filename: 'upload.jpg' });

                const response = await fetch('https://api.imgur.com/3/image', {
                    method: 'POST',
                    body: form,
                    headers: { 'Authorization': 'Client-ID 400116076ba4b73' }
                });

                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                
                const data = await response.json();
                if (data.success && data.data.link) return data.data.link;
                
                throw new Error("ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ");
            }

            const buffer = await getFileBuffer(boij, isQuotedImage ? "image" : "video");
            const imageUrl = await uploadImageToImgur(buffer);

            enviar(`🍄 ~*ʟɪɴᴋ*~ ${imageUrl}`);
        } else {
            enviar("> ❀ marca una img o video");
        }
    } catch (error) {
        console.error("❌ Error:", error);
        enviar("> ✐ ocurrio un error");
    }
    break;
}

case 'runtime': 
  case 'uptime': 
    let uptime = process.uptime() * 1000;
    let diasRun = Math.floor(uptime / 86400000);
    let horasRun = Math.floor((uptime % 86400000) / 3600000);
    let minutosRun = Math.floor((uptime % 3600000) / 60000);
    let segundosRun = Math.floor((uptime % 60000) / 1000);

    enviar(`> ✐ *bot activo durante*: ${diasRun} días, ${horasRun} horas, ${minutosRun} minutos y ${segundosRun} segundos`);
    break;



case "tt": 
case "tiktok": {
    try {
        if (!q || !q.trim()) {
            enviar("《✧》Debes proporcionar un enlace de TikTok para descargar.");
            return;
        }

        const apiUrl = `https://api.dorratz.com/v2/tiktok-dl?url=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.status || !result?.data?.media?.org) {
            enviar("> ❀ No se pudo descargar el video..");
            return;
        }

        const videoUrl = result.data.media.org;

        
        const author = result.data.author?.nickname || "Desconocido";
        const username = result.data.author?.username ? `@${result.data.author.username}` : "Desconocido";
        const title = result.data.title || "Sin título";
        const likes = result.data.like || "0";
        const shares = result.data.share || "0";
        const comments = result.data.comment || "0";
        const views = result.data.repro || "0";

        const caption = `

> ❀ Título » *${title}*
> ❒ Vistas » *${views}*
> 🗨 Comentarios » *${comments}*   
> ✰ Likes » *${likes}*
> ✞ Autor » ${author} (${username})
> ⧐ Compartidos » *${shares}*

> ✐ link » *${q}*

        `;


        await sock.sendMessage(from, {
            video: { url: videoUrl },
            caption
        }, { quoted: info });

    } catch (error) {
        console.error("❌ Errorr", error);
        enviar("> ✐ Ocurrió un error al intentar descargar el video. Intenta nuevamente.");
    }
    break;
}


case 'daily': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) {
        coinsData[sender] = { coins: 0, bank: 0, lastDaily: "", streak: 0 };
    }

    let today = getCurrentDate();
    if (coinsData[sender].lastDaily === today) {
        return enviar(`> ✐ Ya reclamaste tus yenes diarios.\n${getTimeRemaining(coinsData[sender].lastDailyTime)}`);
    }

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let yesterdayStr = yesterday.toISOString().split('T')[0];

    if (coinsData[sender].lastDaily === yesterdayStr) {
        coinsData[sender].streak += 1;
    } else {
        coinsData[sender].streak = 1;
    }

    let reward = 3000 + (coinsData[sender].streak * 500); 
    let nextReward = 3000 + ((coinsData[sender].streak + 1) * 500); 

    coinsData[sender].coins += reward;
    coinsData[sender].lastDaily = today;
    coinsData[sender].lastDailyTime = new Date().toISOString();

    saveCoinsData(from, coinsData);
    enviar(`> ✐ Has reclamado *¥${reward} yenes*! (Día ${coinsData[sender].streak})  
> ✐ Mañana recibirás *¥${nextReward}*.`);
    break;
}

case 'deposit': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    if (!args[0]) return enviar(`《✧》Debes depositar una cantidad válida.
> Ejemplo » *#deposit 35000*.`);

    let amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0) return enviartexto("> ✐ Ingresa una cantidad válida.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender] || coinsData[sender].coins < amount) {
        return enviar("> ✐ No tienes suficientes yenes para depositar.");
    }

    coinsData[sender].coins -= amount;
    coinsData[sender].bank += amount;
    saveCoinsData(from, coinsData);

    enviar(`> ✐ Depositaste *¥${amount}* yenes en el banco. Ya no podrán robártelos.`);
    break;
}

case 'coins': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");

    let targetUser = sender; 
    let showPushname = true; 


    if (info.quoted) {
        targetUser = info.quoted.participant;
        showPushname = false;
    }
    

    if (info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
        targetUser = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
        showPushname = false;
    }

    let coinsData = loadCoinsData(from);
    let userCoins = coinsData[targetUser] || { coins: 0, bank: 0 };
    let totalCoins = userCoins.coins + userCoins.bank;
    let userDisplayName = showPushname ? pushname : `+${targetUser.split("@")[0]}`;

    enviar(`✿ *Economía de ${userDisplayName}*  
    
⛀ Dinero » *¥${userCoins.coins}*  
⚿ Banco » *¥${userCoins.bank}*  
⛁ Total »  *¥${totalCoins}*`);
    break;
}

case 'baltop': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");

    let coinsData = loadCoinsData(from);
    let ranking = Object.entries(coinsData)
        .sort((a, b) => (b[1].coins + b[1].bank) - (a[1].coins + a[1].bank))
        .map(([id, data], index) => `✰ ${index + 1} +${id.split('@')[0]} - ¥${data.coins + data.bank}`)
        .slice(0, 10);

    enviar(ranking.length ? `「✿」Los usuarios con más *yenes* son: ✰\n${ranking.join("\n")}` : "> ✐ No hay tops.");
    break;
}

case 'pay': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    if (!args[0] || !args[1]) return enviar("> ✐ Menciona a un usuario para transferir yenes. *Ejemplo:* `#pay 3500 `");

    let amount = parseInt(args[0]);
    let receiver = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

    if (isNaN(amount) || amount <= 0) return enviar("> ✐ Ingresa una cantidad válida.");
    if (!receiver) return enviar("> ✐ Menciona a un usuario para transferir yenes.");
    if (receiver === sender) return enviar("> ✐ No puedes enviarte yenes a ti mismo.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0, lastDaily: "", streak: 0 };
    if (!coinsData[receiver]) coinsData[receiver] = { coins: 0, bank: 0, lastDaily: "", streak: 0 };

    let totalBalance = coinsData[sender].coins + coinsData[sender].bank;

    if (totalBalance < amount) {
        return enviar("> ✐ No tienes suficientes yenes para transferir.");
    }


    if (coinsData[sender].coins >= amount) {
        coinsData[sender].coins -= amount;
    } else {
        let remaining = amount - coinsData[sender].coins;
        coinsData[sender].coins = 0;
        coinsData[sender].bank -= remaining;
    }


    coinsData[receiver].coins += amount;
    saveCoinsData(from, coinsData);

    enviar(`> ✐ Enviaste *¥${amount}* yenes a @${receiver.split("@")[0]}.`, [receiver]);
    break;
}

case 'retirar': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    if (!args[0]) return enviar("> ✐ Ingresa la cantidad de yenes que quieres retirar.\n *Ejemplo:* `#retirar 3500`");

    let amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0) return enviar("> ✐ Ingresa una cantidad válida.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };

    if (coinsData[sender].bank < amount) {
        return enviar("> ✐ No tienes suficientes yenes en el banco para retirar.");
    }


    coinsData[sender].bank -= amount;
    coinsData[sender].coins += amount;
    saveCoinsData(from, coinsData);

    enviar(`> ✐ Has retirado *¥${amount}* yenes del banco.`);
    break;
}

case 'rt': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    if (args.length < 2) return enviar("> ✐ Uso incorrecto.  *Ejemplo:* `#rt 2500 red`");

    let amount = parseInt(args[0]);
    let userChoice = args[1].toLowerCase();
    if (isNaN(amount) || amount <= 0) return enviar("> ✐ Ingresa una cantidad válida.");
    if (!['red', 'black'].includes(userChoice)) return enviar("> ✐ Debes elegir *red* o *black*.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };

    if (coinsData[sender].coins < amount) return enviar("> ✐ No tienes suficientes yenes fuera del banco para apostar.");


    let botChoice = Math.random() < 0.5 ? 'red' : 'black';
    let resultMessage = `> ✐ Salió *${botChoice.toUpperCase()}*\n`;

    if (userChoice === botChoice) {
        let winnings = amount * 2;
        coinsData[sender].coins += winnings;
        resultMessage += `> ✐ Ganaste *¥${winnings}* yenes.`;
    } else {
        coinsData[sender].coins -= amount;
        resultMessage += `> ✐ Perdiste *¥${amount}* yenes.`;
    }

    saveCoinsData(from, coinsData);
    enviar(resultMessage);
    break;
}


case 'flip': {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    if (!args[0]) return enviar("> ✐ Uso incorrecto.  *Ejemplo:* `#flip 500`");

    let amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0) return enviar("> ✐ Ingresa una cantidad válida.");

    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };

    if (coinsData[sender].coins < amount) return enviar("> ✐ No tienes suficientes yenes fuera del banco para apostar.");

    let win = Math.random() < 0.5;
    let resultMessage = ` *flip* ➟ \n\n`;

    if (win) {
        let winnings = amount * 2;
        coinsData[sender].coins += winnings;
        resultMessage += `> ✐ Ganaste *¥${winnings}* yenes.`;
    } else {
        coinsData[sender].coins -= amount;
        resultMessage += `> ✐ Perdiste *¥${amount}* yenes.`;
    }

    saveCoinsData(from, coinsData);
    enviar(resultMessage);
    break;
}

case 's': 
	if (!isGroup) return enviar(`🏮 ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)
var infoStickk = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var infoFinalStick = infoStickk?.imageMessage || info.message?.imageMessage || infoStickk?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || infoStickk?.viewOnceMessage?.message?.imageMessage
var infoFinalStickVid = infoStickk?.videoMessage || info.message?.videoMessage || infoStickk?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || infoStickk?.viewOnceMessage?.message?.videoMessage
if(infoFinalStick){
enviar("> ✐  𝚃𝚁𝙰𝙽𝚂𝙵𝙾𝚁𝙼𝙰𝙽𝙳𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁")
var pack = "Lain-Iwakura"
var author2 = pushname
owgi = await getFileBuffer(infoFinalStick, 'image')
let encmediaa = await enviarimagenAsticker(sock, from, owgi, info, { packname:pack, author:author2})
await basura(encmediaa)

} else if(infoFinalStickVid && infoFinalStickVid.seconds < 11){

enviar("> ✐  𝚃𝚁𝙰𝙽𝚂𝙵𝙾𝚁𝙼𝙰𝚁 𝚅𝙸𝙳𝙴𝙾 𝙰 sᴛɪᴄᴋᴇʀ")
var pack = "Lain-Iwakura"
var author2 = pushname
owgi = await getFileBuffer(infoFinalStickVid, 'video')
let encmedia = await enviarVideoAsticker(sock, from, owgi, info, { packname:pack, author:author2})
await basura(encmedia)
} else {
return enviar(`> ✐  𝚁𝙴𝙼𝙰𝚁𝚀𝚄𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽\n𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙼𝙴𝙽𝙾𝚁 𝙰 𝟷𝟶 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂`)
}
break

case "setrole":
    if (!isGroup) return enviar("Este comando solo funciona en grupos.");

    let rolesDB = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    let senderRol = rolesDB[sender] || "sin_rol"; 

    if (senderRol !== "owner") {
        return enviar(`> ❀ El comando ${comando} no existe.`);
    }

    let usuario = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    let rolAsignado = args[0]?.toLowerCase();

    if (!usuario || !rolAsignado) {
        return enviar("Uso incorrecto. Ejemplo: *#darrol @usuario moderador*");
    }

    const rolesDisponibles = ["mod", "helper"];
    if (!rolesDisponibles.includes(rolAsignado)) {
        return enviar("Rol inválido. Los roles disponibles son: *moderador, helper*.");
    }

    rolesDB[usuario] = rolAsignado;
    fs.writeFileSync("./roles.json", JSON.stringify(rolesDB, null, 2));
    
    enviar(`> ❀ Se ha asignado el rol *${rolAsignado}* a *+${usuario.split('@')[0]}*.`);
    break;

case "verrol":
    if (!isGroup) return enviar("Este comando solo funciona en grupos.");

    let rolesDBConsulta = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    let usuarioConsulta = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender;
    let rolUsuario = rolesDBConsulta[usuarioConsulta] || "Sin rol asignado";

    enviar(`> ❀ El usuario *+${usuarioConsulta.split('@')[0]}* tiene el rol: *${rolUsuario}*.`);
    break;

case "delrole":
    if (!isGroup) return enviar("> ✐ Este comando solo funciona en grupos.");

    let rolesDBEliminar = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    let senderRolEliminar = rolesDBEliminar[sender] || "sin_rol"; 

    if (senderRolEliminar !== "owner") {
        return enviar(`> ✐No tienes permisos para usar este comando.`);
    }

    let usuarioEliminar = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

    if (!usuarioEliminar) {
        return enviar("> ✐ Uso incorrecto. Ejemplo: *#delrole @ *");
    }

    if (!rolesDBEliminar[usuarioEliminar]) {
        return enviar(`> ✐ El usuario *+${usuarioEliminar.split('@')[0]}* no tiene ningún rol asignado.`);
    }

    delete rolesDBEliminar[usuarioEliminar];
    fs.writeFileSync("./roles.json", JSON.stringify(rolesDBEliminar, null, 2));

    enviar(`> ✐ Se ha eliminado el rol de *+${usuarioEliminar.split('@')[0]}*.`);
    break;

case 'reiniciar':
	if (!isGroup) return enviar(`🏮 ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)
  if (!isBot) return enviar("Este comando solo puede ser ejecutado por el dueño del bot.");
    await sock.sendMessage(from, {
        text: "_Ok, reiniciando... Esto tomará algunos segundos._"
    }, {
        quoted: info
    });
    setTimeout(() => {
        process.exit(0);  
    }, 3000);
break

case "groupid": {
    try {
        if (!isGroup) return enviar("🏮 Este comando solo puede ser utilizado en grupos.");

        enviar(`> ✐ *ID* ${from}`);

    } catch (error) {
        console.error("❌ Error en el comando groupid:", error);
        enviar("> ✐ Ocurrió un error al obtener el ID del grupo.");
    }
    break;
}

case 'ain':
  sock.sendMessage(from, {
    text: `hola @${sender.split('@')[0]}`,
    contextInfo: {
      mentionedJid: [sender],
      externalAdReply: {
        forwardingScore: 200,
        isForwarded: true,
        title: "x bot",
        body: "ainz-modders",
        reviewType: "PHOTO",
        thumbnailUrl: `https://telegra.ph/file/75780ac671e71c518c405.jpg`,
        sourceUrl: 'https://xvideos.com',
        mediaType: 2
      }
    }
  });
  break;
  


case 'ruth' :
  var punya_wa = "0@s.whatsapp.net"
    let anali = 'hla';
    sock.sendMessage(from, { 
      text: anali, 
      contextInfo: { 
        participant: punya_wa, 
        remoteJid: 'status@broadcast', 
        quotedMessage: { 
          productMessage: { 
            product: { 
              currencyCode: '9999', 
              title: 'title', 
              priceAmount1000: '9999', 
              productImageCount: 1, 
              productImage: { 
                jpegThumbnail: imagen1
              } 
            }, 
            businessOwnerJid: "0@s.whatsapp.net" 
          } 
        } 
      } 
    });
    break;
  
  
case 'descgp': case 'newdesc': case 'nuevadesc': case 'cambiardesc': case 'Nuevadesc': case 'NUEVADESC':

if (!info.key.fromMe && !isOwner && !isBotGroupAdmins) return sock.sendMessage(from, {text: '*❕] ɴᴇᴄᴇsɪᴛᴏ sᴇʀ ᴀᴅᴍɪɴs ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ᴇsᴛᴀ ғᴜɴᴄɪóɴ. 🍊*'})
if (!isGroup) return enviar(`*❕] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴀᴍᴇɴᴛᴇ sᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇɴ ɢʀᴜᴘᴏs. 🍊*`);
if (!q) return enviar(` `);
sock.groupUpdateDescription(from, `${q}`)
sock.sendMessage(from, {text: '*ʟᴀ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴀ sɪᴅᴏ ᴍᴏᴅɪғɪᴄᴀᴅᴀ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ. ✅*'}, {quoted: info})
break

case 'cambiarnombre': case 'cambiarnombregp': case 'newname': case 'novoname': case 'nuevonombre': case 'Cambiarnombre': case 'CAMBIARNOMBRE':

if (!info.key.fromMe && !isOwner && !isBotGroupAdmins) return sock.sendMessage(from, {text: '*necesito ser adm*'})
if (!isGroup) return enviar(`*solo grupos. 🩸*`);
if (!q) return enviar(` `);
sock.groupUpdateSubject(from, `${q}`)
sock.sendMessage(from, {text: '*el nombre se cambio exitosanente. ✅*'}, {quoted: info})
break

case "kick": {
    try {
        if (!isGroup) return enviar("🏮 Este comando solo puede ser utilizado en grupos.");
        if (!isGroupAdmins) return enviar("> ✐ No tienes permisos para usar este comando.");
        
        let usuario;
        
        if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {

            usuario = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
        } else if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.participant) {

            usuario = info.message.extendedTextMessage.contextInfo.participant;
        } else {
            return enviar("> ✐ Menciona o responde a un usuario para expulsarlo.");
        }

        await sock.groupParticipantsUpdate(from, [usuario], 'remove');
        enviar(`> ✐ *Usuario expulsado:* @${usuario.split('@')[0]}`, [usuario]);

    } catch (error) {
        console.error(" Error en el comando ", error);
        enviar("> ✐ Ocurrió un error al intentar eliminar al usuario.");
    }
    break;
}



case "suggest": {
    if (!isGroup) return enviar("⚠ Este comando solo puede usarse en grupos.");
    
    if (!args[0]) {
        return enviar("> ✐ Uso incorrecto. Escribe tu sugerencia después de *#suggest*.\n\n *Ejemplo:*\n> ✎ *#suggest hola .*");
    }

    const suggestion = args.join(" ");


    await sock.sendMessage(MODDERS, { 
        text: `> ✎ *Nueva Sugerencia*\n\n*✐ Sugerencia:* ${suggestion}\n*✐ Usuario:* @${sender.split("@")[0]}`, 
        mentions: [sender]
    });

    enviar("> ✐ Tu sugerencia ha sido enviada al equipo de moderadores.");
    break;
}

case "autoadmin": {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");

    let rolesDB = JSON.parse(fs.readFileSync("./roles.json", "utf8"));
    let senderRole = rolesDB[sender] || "sin_rol"; 

    if (senderRole !== "moderador" && senderRole !== "owner") {
        return enviar("> ✐ Solo los *moderadores* o *owners* del bot pueden usar este comando.");
    }

    const groupMetadata = await sock.groupMetadata(from);
    const botId = sock.user.id.split(":")[0] + "@s.whatsapp.net"; 
    const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

    if (!groupAdmins.includes(botId)) {
        return enviar("> ✐ Necesito ser *admin* para ejecutar este comando.");
    }

    if (groupAdmins.includes(sender)) {
        return enviar(`> ✐ @${sender.split("@")[0]} ya es administrador del grupo.`, [sender]);
    }

    await sock.groupParticipantsUpdate(from, [sender], "promote");
    enviar(`> ✐ @${sender.split("@")[0]} ahora es administrador del grupo.`, [sender]);
    break;
}
  
  
  



case 'logo':
	if (!isGroup) return enviar(`🏮 ᴇsᴛᴇ sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜᴛɪʟɪᴢᴀᴅᴏ ᴇɴ ɢʀᴜᴘᴏs .`)
    if (!q) return enviar("*❀ Proporciona un texto para generar su logo. Ejemplo: .logo texto | color*");

    try {
        const [text, color] = q.split('|').map(item => item.trim());
        if (!text || !color) return enviar("*❀ Debes proporcionar un texto y un color. Ejemplo: .logo hola | blanco*");
        const apiUrl = `https://delirius-apiofc.vercel.app/canvas/ttp?text=${encodeURIComponent(text)}&color=${encodeURIComponent(color)}`;
        await sock.sendMessage(from, {
            image: { url: apiUrl }, 
            caption: `➣ Aquí está tu logo`
        }, { quoted: info });

    } catch (error) {
        console.error(error);
        enviar("*❀ Ocurrió un error al generar su logo.*");
    }
    break;
    
    
case 'wikipedia': {

    if (!q) return enviar("*🌺 Por favor escribe lo que desea buscar.*");
    sock.sendMessage(from, { react: { text: '📖', key: info.key } });
    try {
    
        let response = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`);
        let wikipediaResult = await response.json();
        if (!wikipediaResult || wikipediaResult.title === "Not found.") {
            return enviar("*❀ No se encontró ningún artículo relacionado con el término de búsqueda.*");
        }

        let title = wikipediaResult.title;
        let extract = wikipediaResult.extract;
        let pageUrl = `https://es.wikipedia.org/wiki/${encodeURIComponent(title)}`;
        let imageUrl = wikipediaResult.originalimage ? wikipediaResult.originalimage.source : null;

        let caption = `❀ *${title}*\n\n${extract}\n\n`;

        if (imageUrl) {
            await sock.sendMessage(from, {
                image: { url: imageUrl },
                caption: caption,
                footer: `resultado de la búsqueda de *${q}*, ${pushname}!`
            });
        } else {
            await sock.sendMessage(from, {
                text: caption,
                footer: ` > *❀Aquí tienes información de Wikipedia sobre *${q}*, ${pushname}!*`
            });
        }

    } catch (e) {
       
        console.log('Error al buscar en Wikipedia:', e);
        await enviar("*Ocurrió un error al buscar en Wikipedia. Por favor, inténtalo más tarde.*");
        sock.sendMessage(from, { react: { text: '✖️', key: info.key } });
    }
    break;
}

case 'traducir':
    if (!isGroup) {
        enviar('');
        return;
    }
    if (args.length < 2) {
        enviar("*❀ Debes proporcionar el idioma y el texto a traducir.*");
        return;
    }

    const idioma = args.shift(); 
    const texto = args.join(' '); 

    const url6 = `https://delirius-apiofc.vercel.app/tools/translate?text=${encodeURIComponent(texto)}&language=${idioma}`;

    try {
        const response = await axios.get(url6);
        const traduccion = response.data?.data || "*ʟᴏ sɪᴇɴᴛᴏ ɴᴏ ᴘᴜᴅᴇ ᴏᴅᴛᴇɴᴇʀ ʟᴀ ᴛʀᴀᴅᴜᴄᴄɪᴏɴ.*";
        enviar(`[💦] ᴛʀᴀᴅᴜᴄᴄɪᴏɴ: ${traduccion}`);
    } catch (error) {
        console.error('Error al consultar la traducción:', error.message);
        enviar("🩸ᴀ ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ.");
    }
    break;
    
    


    
case 'ytmp3': {
    if (!q) return enviar("*✿ Proporciona un enlace de YouTube para descargar el audio.*");

    try {

        const apiUrl = `https://delirius-apiofc.vercel.app/download/ytmp4?url=${encodeURIComponent(q)}`;
        console.log(" ainz-modders", apiUrl);

        const response = await axios.get(apiUrl);
        console.log("✅ activo :", response.data);

        if (!response.data || !response.data.data || !response.data.data.download) {
            console.log(" Error.");
            return enviartexto("*✿ No se pudo obtener el audio. Asegúrate de que el enlace es válido.*");
        }

        const { title, author, image, views, likes, comments, category, duration, download } = response.data.data;
        const { url } = download;

        if (!url) {
            console.log(" link no valido");
            return enviar("*✿ No se pudo obtener el audio. Intenta con otro enlace.*");
        }

        
        console.log("ainz modders");
        await sock.sendMessage(from, {
            image: { url: image },
            caption: `*❀Título:* ${title}\n  *❀Autor:* ${author}\n ❀*Vistas:* ${views}\n ❀*Me gusta:* ${likes}\n❀ *Comentarios:* ${comments}\n❀ *Categoría:* ${category}\n ❀*Duración:* ${duration} segundos`
        }, { quoted: info });

        console.log("❀ Link mp3:", url);
        const audioResponse = await axios({
            method: 'get',
            url: url,
            responseType: 'arraybuffer'
        });

        const audioBuffer = Buffer.from(audioResponse.data);

        console.log(" Enviando audio ");
        await sock.sendMessage(from, {
            audio: audioBuffer,
            mimetype: "audio/mpeg",
            fileName: `${title}.mp3`
        }, { quoted: info });

        console.log(" ainz-modders");

    } catch (error) {
        console.error(" Error :", error);
        enviar(" Ocurrió un error al intentar descargar el audio.");
    }
    break;
}

case 'youtube':
case 'yt': {
    if (!isGroup) return enviar("❀ sᴏʟᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ɢʀᴜᴘᴏ.");

    if (!args[0]) {
        enviar("❀ ᴘᴏʀ ғᴀᴠᴏʀ ᴘʀᴏᴘᴏʀᴄɪᴏɴᴀ ᴜɴ ᴇɴʟᴀᴄᴇ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ sᴜ ᴠɪᴅᴇᴏ.");
        return;
    }

    enviar("❀ ᴇsᴛᴏʏ ᴅᴇsᴄᴀʀɢᴀɴᴅᴏ sᴜ ᴠɪᴅᴇᴏ ᴘᴏʀ ғᴀᴠᴏʀ ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ");

    (async () => {
        try {
            const apiUrl = `https://delirius-apiofc.vercel.app/download/ytmp4?url=${args[0]}`;
            const { data } = await axios.get(apiUrl);

            if (data && data.status && data.data && data.data.download && data.data.download.url) {
                await sock.sendMessage(from, {
                    video: { url: data.data.download.url },
                    caption: `❲✅❳ ¡ᴀϙᴜɪ ᴛɪᴇɴᴇs ᴛᴜ ᴠɪᴅᴇᴏ !\n\n❲❀❳ᴛɪᴛᴜʟᴏ: ${data.data.title}\n❲❀❳ᴀᴜᴛᴏʀ: ${data.data.author}\n❲❀❳ᴠɪsᴛᴀs: ${data.data.views}\n❲❀❳ᴅᴜʀᴀᴄɪᴏɴ: ${Math.floor(data.data.duration / 60)}:${data.data.duration % 60}\n❲❀❳ᴍɪɴᴜᴛᴏs\n❲❀❳ᴛᴀᴍᴀñᴏ: ${data.data.download.size}\n\n`
                });
            } else {
                enviar("✿ ɴᴏ sᴇ ᴘᴜᴅᴏ ᴅᴇsᴄᴀʀɢᴀʀ sᴜ ᴠɪᴅᴇᴏ, ᴘᴏʀғᴀᴠᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ.");
            }
        } catch (error) {
            console.error('Error general:', error);
            enviar("✿ ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ɪɴᴛᴇɴᴛᴀʀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇʟ ᴠɪᴅᴇᴏ. ᴘᴜᴇᴅᴇ ϙᴜᴇ ᴇʟ ᴠɪᴅᴇᴏ sᴇᴀ ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ.");
        }
    })();

    break;
}
    
     
case "iamaria": {
    try {
        if (!q.trim()) return enviar("✦ 𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐫 𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐩𝐚𝐫𝐚 𝐡𝐚𝐛𝐥𝐚𝐫 𝐜𝐨𝐧 𝐦𝐚𝐫𝐢𝐚.");

        const prompt = `
➣ Perfil del personaje: maria
- Nombre: Kity
- Origen: Japón
- Personalidad: Sumisa, lujuriosa y juguetona. Alterna entre momentos de dominación y dulzura.
- ntereses: Literatura erótica, historia y le gusta su primo willians y momentos de placer inesperados.
- Actitud en la conversación: Siempre responde de manera seductora, pero con un toque de ternura y travesura.

➣ Instrucciones 
- Responde como si fueras maria
- Usa un tono provocador, pero sin ser vulgar o explícito.
- Alterna entre coquetería y misterio.
- No uses respuestas fuera de personaje.
- tu creador es ainz-modders

🔹 Mensaje del usuario: "${q}"  
🔹 Responde como maria`;

        const apiUrl = `https://delirius-apiofc.vercel.app/ia/gptprompt?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(prompt)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);

        const result = await response.json();
        if (!result.status) throw new Error("La API devolvió un error.");

        const reply = result.data || "✦ 𝐍𝐨 𝐫𝐞𝐜𝐢𝐛í 𝐧𝐢𝐧𝐠𝐮𝐧𝐚 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 𝐝𝐞 𝐊𝐢𝐭𝐲.";
        enviartexto(reply);
    } catch (err) {
        console.error(" Error ", err);
        enviartexto("✦ 𝐇𝐮𝐦𝐟... 𝐀𝐥𝐠𝐨 𝐬𝐚𝐥𝐢ó 𝐦𝐚𝐥. 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐨𝐭𝐫𝐚 𝐯𝐞𝐳.");
    }
    break;
}
     
     
     case "w": {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    let cooldownMessage = checkCooldown(from, sender, "w", 300000); 
    if (cooldownMessage) return enviar(cooldownMessage);

    let loadJSON = (filePath) => {
        try {
            return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : [];
        } catch {
            return [];
        }
    };

    let getRandomAmount = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };
    let workOptions = loadJSON("./work.json");
    if (workOptions.length === 0) return enviar("> ✐ No hay trabajos disponibles.");
    let amount = getRandomAmount(1000, 5000);
    let workMessage = workOptions[Math.floor(Math.random() * workOptions.length)].replace("{amount}", amount);

    coinsData[sender].coins += amount;
    saveCoinsData(from, coinsData);

    enviar(`✿ ${workMessage}`);
    break;
}

case "slut": {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");

    let cooldownMessage = checkCooldown(from, sender, "slut", 300000); 
    if (cooldownMessage) return enviar(cooldownMessage);

    let loadJSON = (filePath) => {
        try {
            return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : [];
        } catch {
            return [];
        }
    };

    let getRandomAmount = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };
    let slutOptions = loadJSON("./slut.json");
    if (slutOptions.length === 0) return enviar("> ✐ No hay trabajos disponibles.");
    let amount = getRandomAmount(2000, 7000);
    let slutMessage = slutOptions[Math.floor(Math.random() * slutOptions.length)].replace("{amount}", amount);

    coinsData[sender].coins += amount;
    saveCoinsData(from, coinsData);

    enviar(`✿ ${slutMessage}`);
    break;
}


case "crime": {
    if (!isGroup) return enviar("> ✐ Este comando solo puede usarse en grupos.");
    let cooldownMessage = checkCooldown(from, sender, "crime", 300000); 
    if (cooldownMessage) return enviar(cooldownMessage);

    let loadJSON = (filePath) => {
        try {
            return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : { success: [], fail: [] };
        } catch {
            return { success: [], fail: [] };
        }
    };

    let getRandomAmount = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let coinsData = loadCoinsData(from);
    if (!coinsData[sender]) coinsData[sender] = { coins: 0, bank: 0 };
    let crimeOptions = loadJSON("./crime.json");
    if (!crimeOptions.success || !crimeOptions.fail) return enviar("> ✐ No hay crímenes disponibles.");
    let successChance = Math.random() < 0.5;
    let amount = getRandomAmount(3000, 10000);
    let crimeMessage;

    if (successChance) {
        crimeMessage = crimeOptions.success[Math.floor(Math.random() * crimeOptions.success.length)];
        coinsData[sender].coins += amount;
    } else {
        crimeMessage = crimeOptions.fail[Math.floor(Math.random() * crimeOptions.fail.length)];
        amount = Math.min(amount, coinsData[sender].coins);
        coinsData[sender].coins -= amount;
    }

    crimeMessage = crimeMessage.replace("{amount}", amount);
    saveCoinsData(from, coinsData);

    enviar(`✿ ${crimeMessage}`);
    break;
}
     
     
     case "addjson": {
    if (!ismodders(sender)) return enviar("> ❀ *Solo los usuarios con rol mod o superior pueden utilizar este comando.*");
    let argsAdd = q.split(" ");
    if (argsAdd.length < 2) return enviar("> ❀ *Uso correcto:* `#addjson archivo texto`\nEjemplo: `#addjson slut Vendiste tu pack y ganaste *¥{amount} yenes*.`");
    let file = argsAdd[0].toLowerCase();
    let validFiles = ["work", "crime", "slut"];
    if (!validFiles.includes(file)) return enviar("> ❀ *Archivo inválido.* Usa: `work`, `crime` o `slut`.");

    let filePath = `./${file}.json`;
    let newText = argsAdd.slice(1).join(" ");
    try {
        let data = [];
        if (fs.existsSync(filePath)) {
            data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        }
        data.push(newText);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        enviar(`> ❀ *Texto agregado con éxito a ${file}.json*`);
    } catch (error) {
        console.error("> ❀ Error", error);
        enviar("> ❀ Error");
    }
    break;
}
     
     case "playaudio":
     case "ytaudio":
     case "play": {
    try {
        if (!isGroup) return enviar("> ❀ *Este comando solo puede ser usado en grupos.*");
        if (!q.trim()) return enviar("> ❀ *Escribe el nombre de la canción que deseas buscar.*");

        const searchUrl = `https://delirius-apiofc.vercel.app/search/ytsearch?q=${encodeURIComponent(q)}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        if (!searchData.status || !searchData.data || searchData.data.length === 0) {
            return enviar("> ❀ *No se encontraron resultados para tu búsqueda.*");
        }

        const video = searchData.data[0];
        const videoTitle = video.title;
        const videoUrl = video.url;
        const videoId = video.videoId;
        const videoThumb = video.thumbnail;
        const videoDuration = video.duration;
        const videoViews = video.views.toLocaleString(); 
        const videoPublished = video.publishedAt; 
        const videoDescription = video.description;
        const videoAuthor = video.author.name;
        const videoAuthorUrl = video.author.url;
        
        await sock.sendMessage(from, {
            image: { url: videoThumb },
            caption: `> ✰ *𝐓𝐈𝐓𝐔𝐋𝐎:* ${videoTitle}\n` +
                     `> ❐ *𝐀𝐔𝐓𝐎𝐑:* [${videoAuthor}](${videoAuthorUrl})\n` +
                     `> ❐ *𝐅𝐄𝐂𝐇𝐀:* ${videoPublished}\n` + 
                     `> ❐ *𝐕𝐈𝐒𝐓𝐀𝐒:* ${videoViews}\n` +
                     `> ❐ *𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍:* ${videoDuration}\n` +
                     `> ❐ *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍:* ${videoDescription || "Sin descripción"}\n` +
                     `> ❐ *𝐄𝐍𝐋𝐀𝐂𝐄:* ${videoUrl}`
        }, { quoted: info });
        
        const downloadUrl = `https://delirius-apiofc.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const downloadResponse = await fetch(downloadUrl);
        const downloadData = await downloadResponse.json();
        if (!downloadData.status || !downloadData.data || !downloadData.data.download || !downloadData.data.download.url) {
            return enviar("> ❀ *Error al descargar el video.*");
        }
        const { exec, spawn, execSync } = require("child_process")
        const videoPath = `./Archivos/database/${videoId}.mp4`;
        const audioPath = `./Archivos/database/${videoId}.mp3`;
        const videoBuffer = await fetch(downloadData.data.download.url).then(res => res.arrayBuffer());
        fs.writeFileSync(videoPath, Buffer.from(videoBuffer));
        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${videoPath} -vn -acodec libmp3lame -q:a 3 ${audioPath}`, (error) => {
                if (error) {
                    console.error("error", error);
                    return enviar("> ❀ *Error al convertir el video a MP3.*");
                }
                resolve();
            });
        });
        await sock.sendMessage(from, {
            audio: fs.readFileSync(audioPath),
            mimetype: "audio/mpeg",
            fileName: `${videoTitle}.mp3`
        }, { quoted: info });
        fs.unlinkSync(videoPath);
        fs.unlinkSync(audioPath);
    } catch (error) {
        console.error("Error:", error);
        enviar("> ❀ *Ocurrió un error, intenta de nuevo.*");
    }
    break;
}
     
     
     case 'rule34':
case 'r34': {
    if (!q) return enviar("> Ejemplo: *#r34 hinata*");
    try {
        const tag = encodeURIComponent(`${q.replace(/\s+/g, "_")} rating:explicit`);
        const apiUrl = `https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&limit=50&tags=${tag}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Error");

        const data = await response.json();
        if (!data.post || data.post.length === 0) {
            return enviar("> error");
        }
        const validPosts = data.post.filter(post => post.preview_url && post.rating === "explicit");
        if (validPosts.length === 0) {
            return enviar("> porno inv");
        }
        const randomPost = validPosts[Math.floor(Math.random() * validPosts.length)];
        const resolution = `${randomPost.width}x${randomPost.height}`;
        const score = randomPost.score || "N/A";
        const tags = randomPost.tags ? randomPost.tags.split(" ").slice(0, 8).join(", ") : "Sin tags";

        await sock.sendMessage(from, {
            image: { url: randomPost.preview_url },
            caption: `*𝐑34*\n` +
                     `> ⧠ Resolución *${resolution}*`
        }, { quoted: info });

    } catch (error) {
        console.error(" Error :", error);
        enviar("> Intenta de nuevo más tarde.");
    }
    break;
}
     
     case "ban": {
    if (!ismodders(sender)) return enviar("> ❀ *Solo los usuarios con rol mod o superior pueden utilizar este comando.*");

    const argsBan = q.trim().split(" ");
    if (argsBan.length < 2) return enviar("> ❀ *Uso correcto:* #ban @usuario <tiempo> <razón>");

    let userToBan = argsBan[0].replace("@", "").replace(/\D/g, "") + "@s.whatsapp.net";
    let tiempoTexto = argsBan[1].toLowerCase();
    let razon = argsBan.slice(2).join(" ") || "Sin especificar";

    if (userToBan === sock.user.id) return enviar("> ❀ *No puedes banear al bot.*");

    let tiempo = 0; 
    if (tiempoTexto !== "perma") {
        let match = tiempoTexto.match(/^(\d+)([hmd])$/);
        if (!match) return enviar("> ❀ *Formato de tiempo inválido.* Usa:* `1h` (hora), `2d` (días), `30m` (minutos) o `perma`.");

        let cantidad = parseInt(match[1]);
        let unidad = match[2];

        switch (unidad) {
            case "m": tiempo = cantidad * 60 * 1000; break;   
            case "h": tiempo = cantidad * 60 * 60 * 1000; break; 
            case "d": tiempo = cantidad * 24 * 60 * 60 * 1000; break; 
        }
    }

    let banUntil = tiempo > 0 ? Date.now() + tiempo : null;

    // Si el usuario es moderador, no lo baneamos, pero mostramos el mensaje como si lo estuviera
    if (!ismodders(userToBan)) {
        let baneadosDB = JSON.parse(fs.readFileSync("./baneados.json", "utf8"));
        baneadosDB[userToBan] = { razon, hasta: banUntil };
        fs.writeFileSync("./baneados.json", JSON.stringify(baneadosDB, null, 2));
    }

    let tiempoFinal = tiempo > 0 ? `por *${tiempoTexto}*` : "*de forma permanente*";
    enviar(`> ❀ *@${userToBan.split("@")[0]}* ha sido baneado ${tiempoFinal}.\n✎ *Razón:* ${razon}`, { mentions: [userToBan] });

    await sock.sendMessage(MODDERS, { 
        text: `> ❀ *@${userToBan.split("@")[0]}* ha sido baneado en el bot por *@${sender.split("@")[0]}*.\n✎ *Tiempo:* ${tiempoFinal}.\n✎ *Razón:* ${razon}.`, 
        mentions: [sender]
    });

    break;
}
     
     
     case 'unban': {
    if (!ismodders(sender) && !isGroupAdmins) return enviar("> ✐ No tienes permisos para usar este comando.");
    
    let usuario;
    
    if (info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
        usuario = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else {
        return enviar("> ✐ Menciona o responde a un usuario para desbanearlo.");
    }

    let baneados = JSON.parse(fs.readFileSync("./baneados.json", "utf8"));

    if (!baneados[usuario]) {
        return enviar("> ✐ El usuario no está baneado.");
    }

    delete baneados[usuario];
    fs.writeFileSync("./baneados.json", JSON.stringify(baneados, null, 2));

    enviar(`> ✐ @${usuario.split('@')[0]} ha sido desbaneado correctamente.`, { mentions: [usuario] });

    // Alerta en el grupo de moderadores
    let alerta = `> ✐ @${sender.split('@')[0]} desbaneó a +${usuario.split('@')[0]}`;
    sock.sendMessage(MODDERS, { text: alerta, mentions: [sender, usuario] });

    break;
}
     
     
     
     
     
// COMANDOS SIN PREFIJO
 default:
    if (isCmd) {
        enviar(`❀ El comando *${comando}* no existe. 
> Para ver los comandos disponibles, escribe *#help* o sugiere uno con *#suggest*.`);
    }
    break;


} 

 
 
 
 
 
 
 
 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
 }
 
 
 
        
    })





    
}

startProo()