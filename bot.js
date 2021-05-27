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
   bot.sendMessage(chatId, `Hai `+msg.from.first_name+` untuk menggunakan bot ini kamu cukup mengetikan nama panggilan dosen saja.

Contoh dengan mengirimkan pesan 'Pak nishom' tanpa tanda petik.`)
}
})

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text == 'bu dyah' || msg.text == 'Bu dyah'){
  bot.sendMessage(chatId, "Berikut kontak wa pak dega ()[]wa.me/6285226635634")
}else if(msg.text == 'pak taufik' || msg.text == 'Pak taufik'){
  bot.sendMessage(chatId, "Berikut kontak wa pak topik wa.me/6285293376863")
}else if(msg.text == 'pak nishom' || msg.text == 'Pak nishom'){
  bot.sendMessage(chatId, "Berikut kontak wa pak nishom wa.me/6281316468844")
}else if(msg.text == 'Pak ardi' || msg.text == 'pak ardi'){
  bot.sendMessage(chatId, "Berikut kontak wa pak ardi wa.me/6282313593935")
}else if(msg.text == 'Pak ary' || msg.text == 'pak ary'){
  bot.sendMessage(chatId, "Berikut kontak wa pak ary wa.me/6285290400057")
}else if(msg.text == 'Pak fikri' || msg.text == 'pak fikri'){
  bot.sendMessage(chatId, "Berikut kontak wa pak fikri wa.me/6285868999245")
}else if(msg.text == 'Pak slamet' || msg.text == 'pak slamet'){
  bot.sendMessage(chatId, "Berikut kontak wa pak slamet wa.me/6289663239223")
}else if(msg.text == 'dega'|| msg.text == 'Dega' || msg.text == 'fikri' || msg.text == 'Fikri' || msg.text == 'nishom' || msg.text == 'taufik' || msg.text == 'ginanjar' || msg.text == 'ardi' || msg.text == 'ari' || msg.text == 'dyah'){
  bot.sendMessage(chatId, `tolong gunakan kata yang sopan saat menggunakan bot

contoh : pak nishom atau bu dyah`)
}else{
  bot.sendMessage(chatId,` Sepertinya kamu tidak mengetikan nama dosen dengan benar atau contact dosen tersebut belum ada di database kami.

Kamu bisa mengirimkan pesan ke @fdll14 untuk penambahan contact terimakasih.`)}
});
