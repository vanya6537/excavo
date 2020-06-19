const axios = require('axios')
const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function sendMessage(token, chat_id, text) {
    const baseUrl = `https://api.telegram.org/bot${token}/sendMessage`
    const params = {chat_id: parseInt(chat_id), text}
    console.log(params)
    axios
        .get(baseUrl, {params})
        .then(resp => {
            console.log(resp.data)
        })
        .catch(e => {
            console.error('Telegram error', e.response.data)
        });
}

module.exports = (request, response) => {
    const {
        note = "Hey there! Simple response!", emotion = null
    } = request.body
    const messageText = JSON.stringify({note, emotion})
    sendMessage(token, telegramUserId, messageText)
    response.status(200).send(`Thank you for your feedback!`)
}