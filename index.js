const fs =require('fs');
const { Session } = require('inspector');
const qrcode = require('qrcode-terminal');
const { json } = require('stream/consumers');

const { client } = require('whatsapp-web.js')

const SESSION_FILE_PAHT = "./session.js";

const countrycode = "54";
const number ="542604811384"
const msg = "hola un gusto en servirte yo soy gogeta-bot!"

let sessionData;
if(fs.existsSync(SESSION_FILE_PAHT)) {
    sessionData = require(SESSION_FILE_PAHT);
}

const client = new client({
    Session: sessionData,
});

client.initialize();

client.on('qr'  , qr => {
    qrcode.generate(qr, {small: true});
})

client.on('ready', () => {
    console.log('el cliente esta listo');

    let chatId = countrycode + number + "@c.us";

    client.sendMenssage(chatId, msg)
                     .then(response => {
                        if(response.id.fromMe) {
                            console.log('El mensaje fue enviado');
                        }
                     })
});

client.on('authenticated', Session => {
    sessionData = Session;

    fs.writeFile(SESSION_FILE_PAHT, json.stringify(Session), err=> {
        if(err) {
            console.error(err);
        }
    })
})

client.on('auth_failure', msg => {
    console.error('hubo un fallo en la autotenficacion', msg);
})

client.on('menssaje', msg => {
    if(msg.body = "hola"){
        client.sendMenssage(msg.from, "hola nalgon o nalgona bienvenid@ al grupo lee las reglas del grupo");
    } else if(msg.body = "¿como estan?"){
        client.sendmenssaje(smg.from, "bien....y tu?");
    } else if(msg.body = "bien..me alegro que estes bien"){
        client.sendMenssage(smg.from, "que bueno que estes bien..me alegro que estes bien");
    }
})
