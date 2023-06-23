//const TelegramApi = require('node-telegram-bot-api');

const TelegramApi = require('node-telegram-bot-api')

const token = '5813501479:AAEddrGGoQ9DBODOf2Iye9z576g4NGmzVJ4'

const bot = new TelegramApi(token, { polling: true })

bot.setMyCommands([
  { command: '/start', description: 'Привітання' },
  { command: '/new_delivery', description: 'Доставка' },
  { command: '/info', description: 'Інформація' }
])

bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  //bot.sendMessage(chatId, `You write me: ${text}`);

  if (text === '/start') {
    //bot.sendMessage(chatId, '')
    return bot.sendMessage(chatId, 'Ласкаво просимо до нашого сервісу доставки Boost')
  }

  if (text === '/new_delivery' || text === 'замовлення' || text === 'Ззамовлення') {
    return bot.sendMessage(chatId, 'Напишіть адресу')
  }

  if (text === '/info') {
    return bot.sendMessage(chatId, `You name: ${msg.from.first_name} ${msg.from.last_name}`)
  }
  return bot.sendMessage(chatId, 'Я Вас не розумію')
});

console.log('test')