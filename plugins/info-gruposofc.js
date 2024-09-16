

const handler = async (m, {conn, usedPrefix}) => {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.info_groupsofc
  
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const text = `${tradutor.texto1[0]}
  
  ${tradutor.texto1[1]}
  1.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE
  
  2.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE
  
  3.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE
  
  4.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE
  
  > GOGETA - BOT :
  
  1.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE
  
  2.- https://chat.whatsapp.com/B989oWTkzPbFsmZLa6xjCE `.trim();
    const buttonMessage= {
      'document': {url: `https://github.com/santiyt65/GOGETA-BOT`},
      'mimetype': `application/${document}`,
      'fileName': `${tradutor.texto2}`,
      'fileLength': 99999999999999,
      'pageCount': 200,
      'contextInfo': {
        'forwardingScore': 200,
        'isForwarded': true,
        'externalAdReply': {
          'mediaUrl': '',
          'mediaType': 2,
          'previewType': 'pdf',
          'title': `${tradutor.texto3}`,
          'body': wm,
          'thumbnail': imagen1,
          'sourceUrl': 'https://github.com/santiyt65/GOGETA-BOT'}},
      'caption': text,
      'footer': wm,
      'headerType': 6};
    conn.sendMessage(m.chat, buttonMessage, {quoted: m});
  };
  handler.command = ['linkgc', 'grupos'];
  export default handler;