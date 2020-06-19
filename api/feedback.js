const axios = require('axios')
const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function sendMessage(token, chat_id, text) {
    const baseUrl = `https://api.telegram.org/bot${token}/sendMessage`
    axios
        .get(baseUrl, {chat_id, text})
        .catch(e => {
            console.error(e)
        })
}

export default (request, response) => {
    const {
        body
    } = request
    sendMessage(token, telegramUserId, body.toString())
    response.status(200).send(`Thank you for your feedback!`)
}