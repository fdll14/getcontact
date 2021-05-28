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
            Selamat menggunakan @contactdosen_bot, tekan <b>cara penggunaan</b> untuk mulai menggunakan bot.

hubungi @fdll14 jika bot mengalami masalah terimakasih.
        `, {
    parse_mode: 'HTML',
    'reply_markup': {
      'keyboard': [["Cara penggunaan","List dosen"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true,
    }
  }
  );
});

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text == 'Cara penggunaan'){
	bot.sendMessage(msg.chat.id,`Hai `+msg.from.first_name+` untuk menggunakan bot ini kamu cukup mengetikan nama panggilan dosen saja.

Contoh dengan mengirimkan pesan '*Pak nishom*' tanpa tanda petik.

Lalu tekan *nomor yang tertera*. Untuk nantinya akan dialihkan ke obrolan whatsapp.`,{parse_mode : "markdown"}); 
}
})

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text == 'List dosen'){
	bot.sendMessage(chatId, `Berikut merupakan list kontak dosen yang tersimpan pada database bot kami.

1. Bu dyah
2. Bu dairoh
3. Pak taufik
4. Pak nishom
5. Pak ardi
6. Pak ary
7. Pak slamet
8. Pak fikri
9. Pak ginanjar

`,{parse_mode : "markdown"})
}
})

bot.on('message', (msg) => {
const chatId = msg.chat.id
if(msg.text.toLowerCase() == 'bu dyah'){ 
  bot.sendMessage(chatId, "Hai "+msg.from.first_name+" berikut kontak Whatsapp Bu Dyah [085226635634](https://wa.me/6285226635634)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak taufik'){
  bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Topik [085293376863](https://wa.me/6285293376863)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak nishom'){
  bot.sendMessage(chatId, "Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Nishom [081316468844](https://wa.me/6281316468844)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak ardi'){
  bot.sendMessage(chatId, "Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Ardi [082313593935](https://wa.me/6282313593935)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak ary'){
  bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Ary [085290400057](https://wa.me/6285290400057)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak fikri'){
  bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Fikri [085868999245](https://wa.me/6285868999245)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak slamet'){
  bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Slamet [089663239223](https://wa.me/6289663239223)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'bu dairoh'){
	bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Bu Dairoh [085742716148](https://wa.me/6285742716148)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'pak ginanjar'){
	bot.sendMessage(chatId,"Hai "+msg.from.first_name+" berikut kontak Whatsapp Pak Ginanjar [085865268215](https://wa.me/6285865268215)",{parse_mode : "markdown"})
}else if(msg.text.toLowerCase() == 'dega' || msg.text.toLowerCase() == 'fikri' || msg.text.toLowerCase() == 'nishom' || msg.text.toLowerCase() == 'taufik' || msg.text.toLowerCase() == 'ginanjar' || msg.text.toLowerCase() == 'ardi' || msg.text.toLowerCase() == 'ari' || msg.text.toLowerCase() == 'dyah' || msg.text.toLowerCase() == 'dairoh' || msg.text.toLowerCase() == 'slamet'){
  bot.sendMessage(chatId, `tolong gunakan panggilan yang sopan saat menggunakan bot

contoh : *pak nishom* atau *bu dyah*`,{parse_mode : "markdown"})
}else if(msg.text == 'Cara penggunaan' || msg.text == '/start' || msg.text == 'List dosen'){
}else{
  bot.sendMessage(chatId,` Sepertinya kamu tidak mengetikan nama dosen dengan benar atau contact dosen tersebut belum ada di database kami.

Kamu bisa mengirimkan pesan ke @fdll14 untuk penambahan contact terimakasih.`)}
});
