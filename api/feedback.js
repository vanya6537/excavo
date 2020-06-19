const reqPromse = require('request-promise');
const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function getSendUrl(token, chat_id, text) {
    return `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`
}

export default (request, response) => {
    const {
        body
    } = request
    const confUrl = getSendUrl(token, telegramUserId, body.toString())
    reqPromse(confUrl).then(resp => {
        response.status(200).send(`Thank you for your feedback!`)

    }).catch(err => {
        response.status(200).send(err.toString())
    })
}