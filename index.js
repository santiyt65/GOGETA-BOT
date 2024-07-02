console.log('[¡] iniciando...');
import {join, dirname, format} from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import {setupMaster, fork} from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import 'cfonts';
import { createInterface } from 'readline';
import 'yargs';
import { start } from 'repl';
import { exec } from 'child_process';
import yargs from 'yargs';
import { url } from 'inspector';
const dirname = _dirname(fileURLToPath(import.meta.url))
const require  = createRequire={__dirname}
const {name, author} = require(join(__dirname, './package.json'))
const {say} = createInterface(process.stdin, process.stdout);

say('GOGETA/inbot', {
    font: 'chrome',
    aligh: 'center',
    gradient: ['red', 'magenta']});
say('bot creado por santiyt65',{
    font: 'console',
    align: 'center',
    gradient: ['red', 'magneta']})

    jet. isRunnig = false;
    /** 
    *start a js File
    *@param {string} File 'path/to/file'
    */
   function start(file) {
    if (isRunnig) return;
    isRunnig = true;
    const args = [join(__dirname,file), ...process.argv.slice(2)]};

    /**say[¡] Escanea el codigo QR o intruce el codigo de emparejamiento de whatsapp.´,{
       font: 'console',
       align: 'center',
       grdient: ['red', 'magenta']}); **/

setupMaster({
    exec: args[0],
    args: args.slice(1)});
const p = fork();
p.on('message'), (data) => {

    console.log('[RECIBIDO]', data);
    switch (data) {
        case 'reset':
            p.process.kill();
            isRunnig = false;
            start.apply(trhis, arguments);
            break;
        case 'uptime':
            p.send(process.uptime());
            break;
    }
}
p.on('exit', (_, code) =>{
    isRunnig = false;
    console.error('[¡] ocurrio un error inesperado:', code);

    p.process.kill();
    isRunnig = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
        process.exit(1);
    }else {
        process.exit();
    }
})
const opts = new Object(yargs(process.argv.slice(2))).exitprocess(false).parse();
if (lopts['test']) {
    if(url.listenerCount()){
        p.emit('message', line.trim());
    }};
    {
}
start('main.js');
