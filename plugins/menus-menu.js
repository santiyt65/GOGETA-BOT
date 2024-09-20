import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

> ★ ᴛᴇᴀᴍ ᴄʀɪꜱᴛᴀʟʙᴏᴛ-ᴍᴅ ★

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

 ${tradutor.texto1[10]}
 
 ╭───── • ◆ • ─────╮ 
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎵MENUAUDꞮOS🎵
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌺MENÚANꞮMES🌺
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥵LABꞮBLꞮA🥵
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✨LANG✨ 
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🙌LANGGƦOUP🙌 
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎆GLx🎆
  ╰───── • ◆ • ─────╯
 
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[11]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🐱‍👤TEƦMꞮNOSYCONDꞮCꞮONES🐱‍👤
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧨GƦUPOS🧨
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}☘ᴇꜱᴛᴀᴅᴏ☘
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔥ɪɴꜰᴏʙᴏᴛ🔥
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚜ꜱᴘᴇᴇᴅᴛᴇꜱᴛ⚜
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤑ᴅᴏɴᴀʀ🤑
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌟ᴏᴡɴᴇʀ🌟
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌾ꜱᴄʀɪᴘᴛ🌾
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚠ʀᴇᴘᴏʀᴛᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌈ᴊᴏɪɴ <ᴡᴀɢᴘ_ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💫ꜰɪxᴍꜱɢᴇꜱᴘᴇʀᴀ💫
  ├❧ 🌟ʙᴏᴛ🌟 (ꜱɪɴ ᴘʀᴇꜰɪᴊᴏ)
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[12]}
 
  ╭───── • ◆ • ─────╮
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🪷ꜱᴇʀʙᴏᴛ --ᴄᴏᴅᴇ🪷
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌸ꜱᴇʀʙᴏᴛ🌸
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✖ᴅᴇʟᴇᴛᴇʙᴏᴛ✖
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🍁ᴛᴏᴋᴇɴ🍁
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🚫ꜱᴛᴏᴘ🚫
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤖ʙᴏᴛꜱ🤖
  ├❧
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ʀᴇꜱᴛʀɪᴄᴛ🟢
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ʀᴇꜱᴛʀɪᴄᴛ🔴
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴛᴏʀᴇᴀᴅ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴛᴏʀᴇᴀᴅ🔴
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪꜱᴘᴀᴍ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪꜱᴘᴀᴍ🔴
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴄᴀʟʟ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴄᴀʟʟ🔴
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏɪᴀ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴍᴏᴅᴏɪᴀ🔴
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ_ʙᴏᴛ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ_ʙᴏᴛ🔴
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ🟢
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ🔴
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[13]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ᴍᴀᴛᴇꜱ <ɴᴏᴏʙ / ᴇᴀꜱʏ / ᴍᴇᴅɪᴜᴍ / ʜᴀʀᴅ / ᴇxᴛʀᴇᴍᴇ /ɪᴍᴘᴏꜱꜱɪʙʟᴇ /ɪᴍᴘᴏꜱꜱɪʙʟᴇ2>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😝ꜰᴀᴋᴇ <ᴛxᴛ1> <@ᴛᴀɢ> <ᴛxᴛ2>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ᴘᴘᴛ <ᴘᴀᴘᴇʟ / ᴛɪᴊᴇʀᴀ /ᴘɪᴇᴅʀᴀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💋ᴘʀᴏꜱᴛɪᴛᴜᴛᴏ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💋ᴘʀᴏꜱᴛɪᴛᴜᴛᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🏳‍🌈ɢᴀʏ2 <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🏳‍🌈ʟᴇꜱʙɪᴀɴᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥵ᴘᴀᴊᴇʀᴏ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥵ᴘᴀᴊᴇʀᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🙊ᴘᴜᴛᴏ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🙊ᴘᴜᴛᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👻ᴍᴀɴᴄᴏ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👻ᴍᴀɴᴄᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🐀ʀᴀᴛᴀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❤ʟᴏᴠᴇ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😶‍🌫ᴅᴏxᴇᴀʀ <ɴᴏᴍʙʀᴇ / @ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⁉ᴘʀᴇɢᴜɴᴛᴀ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥳ꜱᴜɪᴛᴘᴠᴘ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎰ꜱʟᴏᴛ <ᴀᴘᴜᴇꜱᴛᴀ>
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♠ᴛᴛᴛ ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[32]}
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🪬ᴅᴇʟᴛᴛᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🪀ᴀᴄᴇʀᴛɪᴊᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ꜱɪᴍɪ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎲ᴛᴏᴘ <ᴛxᴛ>
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎲ᴛᴏᴘɢᴀʏꜱ🏳‍🌈
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎲ᴛᴏᴘᴏᴛᴀᴋᴜꜱ🍥
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❤ꜰᴏʀᴍᴀʀᴘᴀʀᴇᴊᴀ⁉
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ᴠᴇʀᴅᴀᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ʀᴇᴛᴏ
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🅱ᴄᴀɴᴄɪᴏɴ🎧
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}📲ᴘɪꜱᴛᴀ📲
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💡ᴀᴋɪɴᴀᴛᴏʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴡᴏʀᴅꜰɪɴᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💯ɢʟx (ʀᴘɢ ᴍᴜɴᴅᴏ)
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[14]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴡᴇʟᴄᴏᴍᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴡᴇʟᴄᴏᴍᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏʜᴏʀɴʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴍᴏᴅᴏʜᴏʀɴʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪʟɪɴᴋ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪʟɪɴᴋ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪʟɪɴᴋ2
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪʟɪɴᴋ2
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴅᴇᴛᴇᴄᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴅᴇᴛᴇᴄᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴛᴏxɪᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴛᴏxɪᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴛʀᴀʙᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴛʀᴀʙᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴀʀᴀʙᴇꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴀʀᴀʙᴇꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏᴀᴅᴍɪɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴍᴏᴅᴏᴀᴅᴍɪɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[15]}
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶ᴘʟᴀʏ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶ᴘʟᴀʏ2 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶ᴘʟᴀʏ.1 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶ᴘʟᴀʏ.2 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶✳ᴘʟᴀʏᴅᴏᴄ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶✳ᴘʟᴀʏᴅᴏᴄ2 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶💾ᴘʟᴀʏʟɪꜱᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶🔴ʏᴛꜱʜᴏʀᴛ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶🔴ʏᴛᴍᴘ3 <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶🔴ʏᴛᴍᴘ3ᴅᴏᴄ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶🔴ʏᴛᴍᴘ4 <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶🔴ʏᴛᴍᴘ4ᴅᴏᴄ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶♦ᴠɪᴅᴇᴏᴅᴏᴄ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ꜱᴘᴏᴛɪꜰʏ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ꜰᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴🟠ɪɴꜱᴛᴀɢʀᴀᴍ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴🟠ɪɢꜱᴛᴏʀʏ <ᴜꜱʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫⚪ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫⚪ᴛɪᴋᴛᴏᴋɪᴍɢ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫⚪ᴘᴘᴛɪᴋᴛᴏᴋ <ᴜꜱʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵ᴍᴇᴅɪᴀꜰɪʀᴇ <ᴜʀʟ> 
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴⚪ᴘɪɴᴛᴇʀᴇꜱᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚪ɢɪᴛᴄʟᴏɴᴇ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ɢᴅʀɪᴠᴇ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫ʀɪɴɢᴛᴏɴᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫ꜱᴏᴜɴᴅᴄʟᴏᴜᴅ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚪ꜱᴛɪᴄᴋᴇʀᴘᴀᴄᴋ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛxᴛ> 
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟡ᴅᴀᴘᴋ2 <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵xɴxxᴅʟ <ᴜʀʟ> (🔞)
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴xᴠɪᴅᴇᴏꜱᴅʟ <ᴜʀʟ> (🔞)
  ╰───── • ◆ • ─────╯
 ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[16]}
  
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💥ɢɪᴛʜᴜʙꜱᴇᴀʀᴄʜ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎬ᴘᴇʟɪꜱᴘʟᴜꜱ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔱ᴍᴏᴅᴀᴘᴋ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⃣ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ *<ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⃣ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ2 *<ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵xɴxxꜱᴇᴀʀᴄʜ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴀɴɪᴍᴇɪɴꜰᴏ🔷 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ɢᴏᴏɢʟᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵ʟᴇᴛʀᴀ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔵ᴡɪᴋɪᴘᴇᴅɪᴀ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ʏᴛꜱᴇᴀʀᴄʜ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴🟠ᴘʟᴀʏꜱᴛᴏʀᴇ <ᴛxᴛ>
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[17]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}➕ᴀᴅᴅ ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❗ᴋɪᴄᴋ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❗ᴋɪᴄᴋ2 <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰ʟɪꜱᴛᴀɴᴜᴍ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰❗ᴋɪᴄᴋɴᴜᴍ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰ɢʀᴜᴘᴏ <ᴀʙʀɪʀ/ᴄᴇʀʀᴀʀ>
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰⏰ɢʀᴏᴜᴘᴛɪᴍᴇ  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[30]}
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⬆ᴘʀᴏᴍᴏᴛᴇ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✴ᴅᴇᴍᴏᴛᴇ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}‼ɪɴꜰᴏɢʀᴏᴜᴘ
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❗ʀᴇꜱᴇᴛʟɪɴᴋ✅
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❕ʟɪɴᴋ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❕ꜱᴇᴛɴᴀᴍᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❕ꜱᴇᴛᴅᴇꜱᴄ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}‼ɪɴᴠᴏᴄᴀʀ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔅ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔆ꜱᴇᴛʙʏᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟰ʜɪᴅᴇᴛᴀɢ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟰ʜɪᴅᴇᴛᴀɢ <ᴀᴜᴅɪᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟰ʜɪᴅᴇᴛᴀɢ <ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟰ʜɪᴅᴇᴛᴀɢ <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❕ᴡᴀʀɴ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❕ᴜɴᴡᴀʀɴ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}‼ʟɪꜱᴛᴡᴀʀɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👻ꜰᴀɴᴛᴀꜱᴍᴀꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👾ᴅᴇꜱᴛʀᴀʙᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ꜱᴇᴛᴘᴘ <ɪᴍɢ>
  ├❧ 💯ᴀᴅᴍɪɴꜱ <ᴛxᴛ> ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[31]}
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[18]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🍥ᴛᴏᴀɴɪᴍᴇ <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💥ᴛᴏɢɪꜰᴀᴜᴅ <ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💥ᴛᴏɪᴍɢ <ꜱᴛɪᴄᴋᴇʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴏᴍᴘ3 <ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴏᴍᴘ3 <ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴏᴘᴛᴛ <ᴠɪᴅᴇᴏ / ᴀᴜᴅɪᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴏᴠɪᴅᴇᴏ <ꜱᴛɪᴄᴋᴇʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴏᴜʀʟ <ᴠɪᴅᴇᴏ / ɪᴍɢ / ᴀᴜᴅɪᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴛꜱ <ɪᴅɪᴏᴍᴀ> <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴛꜱ <ᴇꜰᴇᴄᴛᴏ> <ᴛxᴛ>
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[19]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🗨ʟᴏɢᴏꜱ <ᴇꜰᴇᴄᴛᴏ> <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🗨ʟᴏɢᴏᴄʜʀɪꜱᴛᴍᴀꜱ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🗨ʟᴏɢᴏᴄᴏʀᴀᴢᴏɴ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴🗨ʏᴛᴄᴏᴍᴍᴇɴᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✴ʜᴏʀɴʏᴄᴀʀᴅ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ꜱɪᴍᴘᴄᴀʀᴅ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🍥ʟᴏʟɪᴄᴇ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤓ɪᴛꜱꜱᴏꜱᴛᴜᴘɪᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤡ᴘɪxᴇʟᴀʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👾ʙʟᴜʀ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[20]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😽ᴘɪʀᴏᴘᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤓ᴄᴏɴꜱᴇᴊᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😻ꜰʀᴀꜱᴇʀᴏᴍᴀɴᴛɪᴄᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💌ʜɪꜱᴛᴏʀɪᴀʀᴏᴍᴀɴᴛɪᴄᴀ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[21]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}❤‍🔥ᴋᴘᴏᴘ <ʙʟᴀᴄᴋᴘɪɴᴋ/ᴇxᴏ/ʙᴛꜱ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💯ᴄʀɪꜱᴛɪᴀɴᴏʀᴏɴᴀʟᴅᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💯ᴍᴇꜱꜱɪ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😺ᴄᴀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🐕ᴅᴏɢ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😂ᴍᴇᴍᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ɪᴛᴢʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⚫ʙʟᴀᴄᴋᴘɪɴᴋ🩷
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌲ɴᴀᴠɪᴅᴀᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🏞ᴡᴘᴍᴏɴᴛᴀÑᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🪂ᴘᴜʙɢ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🪂ᴡᴘɢᴀᴍɪɴɢ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⛰ᴡᴘᴀᴇꜱᴛʜᴇᴛɪᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🏔ᴡᴘᴀᴇꜱᴛʜᴇᴛɪᴄ2
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🗻ᴡᴘʀᴀɴᴅᴏᴍ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🗺ᴡᴀʟʟʜᴘ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴡᴘᴠᴇʜɪᴄᴜʟᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴡᴘᴍᴏᴛᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}☕ᴄᴏꜰꜰᴇᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔽ᴘᴇɴᴛᴏʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶ᴄᴀʀɪᴄᴀᴛᴜʀᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ᴄɪʙᴇʀᴇꜱᴘᴀᴄɪᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧿ᴛᴇᴄʜɴᴏʟᴏɢʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴅᴏʀᴀᴇᴍᴏɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}‼ʜᴀᴄᴋᴇʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌐ᴘʟᴀɴᴇᴛᴀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}📃ʀᴀɴᴅᴏᴍᴘʀᴏꜰɪʟᴇ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[22]}
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[23]}
 
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʙᴀꜱꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʙʟᴏᴡɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴅᴇᴇᴘ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴇᴀʀʀᴀᴘᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ꜰᴀꜱᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ꜰᴀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ɴɪɢʜᴛᴄᴏʀᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʀᴇᴠᴇʀꜱᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʀᴏʙᴏᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ꜱʟᴏᴡ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ꜱᴍᴏᴏᴛʜ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴜᴘᴀɪ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[24]}
  
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}▶♦ꜱᴛᴀʀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⏩🔷ɴᴇxᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}⬆♦ʟᴇᴀᴠᴇ
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[25]}
  
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🧐ɪɴꜱᴘᴇᴄᴛ <ᴡᴀɢᴄ_ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴄʜᴀᴛɢᴘᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴅᴇʟᴄʜᴀᴛɢᴘᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ɢᴘᴛᴠᴏᴢ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴅᴀʟʟ-ᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ꜱᴘᴀᴍᴡᴀ ɴᴜᴍ|ᴛxᴛ|ᴄᴀɴᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴀᴍᴀÑᴏ <ᴄᴀɴᴛ> <ɪᴍɢ / ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ <ɪᴍɢ / ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🏜ᴄʟɪᴍᴀ <ᴘᴀÍꜱ> <ᴄɪᴜᴅᴀᴅ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}☢ᴇɴᴄᴜᴇꜱᴛᴀ <ᴛxᴛ1|ᴛxᴛ2>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}☣ᴀꜰᴋ <ᴍᴏᴛɪᴠᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴏᴄʀ <ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤩ʜᴅ <ʀᴇꜱᴘᴏɴᴅᴇ ᴀ ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴀᴄᴏʀᴛᴀʀ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✳ᴄᴀʟᴄ <ᴏᴘᴇʀᴀᴄɪᴏɴ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✴ᴅᴇʟ <ᴍꜱᴊ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴡʜᴀᴛᴍᴜꜱɪᴄ <ᴀᴜᴅɪᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ʀᴇᴀᴅQʀ <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢Qʀᴄᴏᴅᴇ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ʀᴇᴀᴅᴍᴏʀᴇ <ᴛxᴛ1|ᴛxᴛ2>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ꜱᴛʏʟᴇᴛᴇxᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴛʀᴀᴅᴜᴄɪʀ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ɴᴏᴡᴀ ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴄᴏᴠɪᴅ <ᴘᴀɪꜱ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ʜᴏʀᴀʀɪᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴅʀᴏᴘᴍᴀɪʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ɪɢꜱᴛᴀʟᴋ <ᴜꜱʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟠ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ <ᴜꜱʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ɪᴍɢ <ᴛxᴛ>
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[26]}
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🍃ᴀᴅᴠᴇɴᴛᴜʀᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😵ᴄᴀᴢᴀʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥳ᴄᴏꜰʀᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤓ʙᴀʟᴀɴᴄᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥳ᴄʟᴀɪᴍ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʜᴇᴀʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʟʙ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥳ʟᴇᴠᴇʟᴜᴘ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴍʏɴꜱ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤓ᴘᴇʀꜰɪʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🌴ᴡᴏʀᴋ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💣ᴍɪɴᴀʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}💣ᴍɪɴᴀʀ2
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤑ʙᴜʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤑ʙᴜʏᴀʟʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤠ᴠᴇʀɪꜰɪᴄᴀʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😨ʀᴏʙᴀʀ <ᴄᴀɴᴛ> <@ᴛᴀɢ>
  ├❧ _${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🥷ᴄʀɪᴍᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅ᴛʀᴀɴꜱꜰᴇʀ <ᴛɪᴘᴏ> <ᴄᴀɴᴛ> <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅ᴜɴʀᴇɢ <ꜱɴ>
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[27]}
  
  ╭───── • ◆ • ─────╮
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃ꜱᴛɪᴄᴋᴇʀ <ʀᴇꜱᴘᴏɴᴅᴇʀ ᴀ ɪᴍɢ ᴏ ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃ꜱᴛɪᴄᴋᴇʀ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃ꜱᴛɪᴄᴋᴇʀ2 <ʀᴇꜱᴘᴏɴᴅᴇʀ ᴀ ɪᴍɢ ᴏ ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃ꜱᴛɪᴄᴋᴇʀ2 <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ꜱ <ʀᴇꜱᴘᴏɴᴅᴇʀ ᴀ ɪᴍɢ ᴏ ᴠɪᴅᴇᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}ꜱ <ᴜʀʟ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃ᴇᴍᴏᴊɪᴍɪx <ᴇᴍᴏᴊɪ 1>&<ᴇᴍᴏᴊɪ 2>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ꜱᴄɪʀᴄʟᴇ <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ꜱʀᴇᴍᴏᴠᴇʙɢ <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃♦ꜱᴇᴍᴏᴊɪ <ᴛɪᴘᴏ> <ᴇᴍᴏᴊɪ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷Qᴄ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴀᴛᴛᴘ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴀᴛᴛᴘ2 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴀᴛᴛᴘ3 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴛᴘ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴛᴘ2 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴛᴘ3 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴛᴛᴘ4 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴛᴛᴘ5 <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴘᴀᴛ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👏ꜱʟᴀᴘ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴋɪꜱꜱ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🎲ᴅᴀᴅᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴡᴍ <ᴘᴀᴄᴋɴᴀᴍᴇ> <ᴀᴜᴛᴏʀ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃🔷ꜱᴛɪᴄᴋᴇʀᴍᴀʀᴋᴇʀ <ᴇꜰᴇᴄᴛᴏ> <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}😃♦ꜱᴛɪᴄᴋᴇʀꜰɪʟᴛᴇʀ <ᴇꜰᴇᴄᴛᴏ> <ɪᴍɢ>
  ╰───── • ◆ • ─────╯
  ${ᴛʀᴀᴅᴜᴛᴏʀ.ᴛᴇxᴛᴏ1[28]}
  
  ╭───── • ◆ • ─────╮ 
  ├❧ > <ꜰᴜɴᴄɪᴏɴ>
  ├❧ => <ꜰᴜɴᴄɪᴏɴ>
  ├❧ $ <ꜰᴜɴᴄɪᴏɴ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ᴅꜱᴏᴡɴᴇʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ꜱᴇᴛᴘʀᴇꜰɪx <ᴘʀᴇꜰɪᴊᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ʀᴇꜱᴇᴛᴘʀᴇꜰɪx
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ᴀᴜᴛᴏᴀᴅᴍɪɴ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ɢʀᴏᴜᴘʟɪꜱᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ᴄʜᴇᴛᴀʀ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ʟᴇᴀᴠᴇɢᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ᴄᴀᴊᴀꜰᴜᴇʀᴛᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ʙʟᴏᴄᴋʟɪꜱᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ᴀᴅᴅᴏᴡɴᴇʀ <@ᴛᴀɢ / ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ᴅᴇʟᴏᴡɴᴇʀ <@ᴛᴀɢ / ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔹ʙʟᴏᴄᴋ <@ᴛᴀɢ / ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔺ᴜɴʙʟᴏᴄᴋ <@ᴛᴀɢ / ɴᴜᴍ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ʀᴇꜱᴛʀɪᴄᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ʀᴇꜱᴛʀɪᴄᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴛᴏʀᴇᴀᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴛᴏʀᴇᴀᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴘᴜʙʟɪᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴘᴜʙʟɪᴄ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴘᴄᴏɴʟʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴘᴄᴏɴʟʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ɢᴄᴏɴʟʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ɢᴄᴏɴʟʏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴄᴀʟʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴄᴀʟʟ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ_ʙᴏᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀᴜᴅɪᴏꜱ_ʙᴏᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🟢ᴇɴᴀʙʟᴇ ᴀɴᴛɪꜱᴘᴀᴍ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴ᴅɪꜱᴀʙʟᴇ ᴀɴᴛɪꜱᴘᴀᴍ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰ᴍꜱɢ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴👊ʙᴀɴᴄʜᴀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴👊ᴜɴʙᴀɴᴄʜᴀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅🔴ʀᴇꜱᴇᴛᴜꜱᴇʀ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅🔴ʙᴀɴᴜꜱᴇʀ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅🔴ᴜɴʙᴀɴᴜꜱᴇʀ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🤝ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇꜱ <@ᴛᴀɢ> <ᴄᴀɴᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✍ᴀÑᴀᴅɪʀxᴘ <@ᴛᴀɢ> <ᴄᴀɴᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🫅🔴ʙᴀɴᴜꜱᴇʀ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʙᴄ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}👊🔴ʙᴄᴄʜᴀᴛꜱ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʙᴄɢᴄ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʙᴄɢᴄ2 <ᴀᴜᴅ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʙᴄɢᴄ2 <ᴠɪᴅ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ʙᴄɢᴄ2 <ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ʙᴄʙᴏᴛ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴄʟᴇᴀʀᴛᴘᴍ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}☢♦ʀᴇꜱᴛᴀʀᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰🟢ᴜᴘᴅᴀᴛᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔴🔰ʙᴀɴʟɪꜱᴛ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰🟢ᴀᴅᴅᴘʀᴇᴍ <@ᴛᴀɢ> <ᴛɪᴇᴍᴘᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰🟢ᴀᴅᴅᴘʀᴇᴍ2 <@ᴛᴀɢ> <ᴛɪᴇᴍᴘᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰🟢ᴀᴅᴅᴘʀᴇᴍ3 <@ᴛᴀɢ> <ᴛɪᴇᴍᴘᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔰🟢ᴀᴅᴅᴘʀᴇᴍ4 <@ᴛᴀɢ> <ᴛɪᴇᴍᴘᴏ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}✖ᴅᴇʟᴘʀᴇᴍ <@ᴛᴀɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}📃ʟɪꜱᴛᴄᴍᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ꜱᴇᴛᴘᴘʙᴏᴛ <ʀᴇꜱᴘᴏɴᴅᴇʀ ᴀ ɪᴍɢ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ᴀᴅᴅᴄᴍᴅ <ᴛxᴛ>
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴅᴇʟᴄᴍᴅ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}♦ꜱᴀᴠᴇɪᴍᴀɢᴇ
  ├❧ ${ᴜꜱᴇᴅᴘʀᴇꜰɪx}🔷ᴠɪᴇᴡɪᴍᴀɢᴇ
  ╰───── • ◆ • ─────╯`

    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
     conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    } else {
      //await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
