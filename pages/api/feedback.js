const axios = require('axios')
const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function sendMessage(token, chat_id, text) {
    const baseUrl = `https://api.telegram.org/bot${token}/sendMessage`
    const data = {chat_id, text}
    console.log(data)
    axios
        .get(baseUrl, data)
        .then(resp => console.log(resp.data))
}

export default (request, response) => {
    const {
        body = {chat_id: telegramUserId, text: "Hey there! Simple response!"}
    } = request
    console.log(body)
    const messageText = JSON.stringify(body)
    sendMessage(token, telegramUserId, messageText)
    response.status(200).send(`Thank you for your feedback!`)
}