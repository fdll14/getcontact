require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
  polling: true
});

// Listener (handler) for telegram's /start event
// This event happened when you start the conversation with both by the very first time
// Provide the list of available commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `
            Selamat menggunakan <b>Contact Dosen Bot</b>,

hubungi @fdll14 jika bot mengalami masalah terimakasih.
        `, {
    parse_mode: 'HTML',
    'reply_markup': {
      'keyboard': [['Help']],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true,
    }
  }
  );
});

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text == 'Help'){
	bot.sendPhoto(msg.chat.id,"https://i.imgur.com/dofqO3P.jpg" ,{caption : `Hai `+msg.from.first_name+` untuk menggunakan bot ini kamu cukup mengetikan nama panggilan dosen saja.

Contoh dengan mengirimkan pesan '*Pak nishom*' tanpa tanda petik.` , {parse_mode : "markdown"}});
}
})


bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://i.imgur.com/dofqO3P.jpg" );
    
});

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text == 'bu dyah' || msg.text == 'Bu dyah'){
  bot.sendMessage(chatId, "Berikut kontak wa bu dyah [get contact](https://wa.me/6285226635634)",{parse_mode : "markdown"})
}else if(msg.text == 'pak taufik' || msg.text == 'Pak taufik'){
  bot.sendMessage(chatId, "Berikut kontak wa pak topik [get contact](https://wa.me/6285293376863)",{parse_mode : "markdown"})
}else if(msg.text == 'pak nishom' || msg.text == 'Pak nishom'){
  bot.sendMessage(chatId, "Berikut kontak wa pak nishom [get contact](https://wa.me/6281316468844)",{parse_mode : "markdown"})
}else if(msg.text == 'Pak ardi' || msg.text == 'pak ardi'){
  bot.sendMessage(chatId, "Berikut kontak wa pak ardi [get contact](https://wa.me/6282313593935)",{parse_mode : "markdown"})
}else if(msg.text == 'Pak ary' || msg.text == 'pak ary'){
  bot.sendMessage(chatId, "Berikut kontak wa pak ary [get contact](https://wa.me/6285290400057)",{parse_mode : "markdown"})
}else if(msg.text == 'Pak fikri' || msg.text == 'pak fikri'){
  bot.sendMessage(chatId, "Berikut kontak wa pak fikri [get contact](https://wa.me/6285868999245)",{parse_mode : "markdown"})
}else if(msg.text == 'Pak slamet' || msg.text == 'pak slamet'){
  bot.sendMessage(chatId, "Berikut kontak wa pak slamet [get contact](https://wa.me/6289663239223)",{parse_mode : "markdown"})
}else if(msg.text == 'dega'|| msg.text == 'Dega' || msg.text == 'fikri' || msg.text == 'Fikri' || msg.text == 'nishom' || msg.text == 'taufik' || msg.text == 'ginanjar' || msg.text == 'ardi' || msg.text == 'ari' || msg.text == 'dyah'){
  bot.sendMessage(chatId, `tolong gunakan panggilan yang sopan saat menggunakan bot

contoh : *pak nishom* atau *bu dyah*`,{parse_mode : "markdown"})
}else if(msg.text == 'Help' || msg.text == '/start'){
}else{
  bot.sendMessage(chatId,` Sepertinya kamu tidak mengetikan nama dosen dengan benar atau contact dosen tersebut belum ada di database kami.

Kamu bisa mengirimkan pesan ke @fdll14 untuk penambahan contact terimakasih.`)}
});
