const RedirectionAuth = require('./auth')
const Client = require('node-rest-client').Client;
const moment = require('moment')
require('dotenv').config()

const paymentCtrl = {}

paymentCtrl.processPayment = (req, res) => {
    let formData = req.body
    //res.send('Sisas')
    const client = new Client();
    let authGenerator = new RedirectionAuth(process.env.TOKEN, process.env.SECRETKEY);
    let auth = authGenerator.asObject();
    let expiration = moment().add(1, 'hour').format('YYYY-MM-DDTHH:mm:ssZ')

    let request = {
        data: {
            auth: auth,
            "locale": "en_CO",
            "buyer": {
                "name": formData['nombre'],
                "surname": formData['apellido'],
                "email": formData['email'],
                "document": formData['documento'],
                "documentType": formData['tipodoc'],
                "mobile": formData['telefono']
            },

            "payment": {
                "reference": "3210",
                "description": formData['descripcion'],
                "amount": {
                    "currency": formData['moneda'],
                    "total": formData['total']
                },
                "allowPartial":false
            },

            "expiration": expiration,
            "returnUrl": "http://localhost:3000/response",
            "ipAddress": "127.0.0.1",
            "userAgent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
        },
        headers: { "Content-Type": "application/json" }
    }
    client.registerMethod("createRequest", "https://test.placetopay.com/redirection/api/session/", "POST");

    client.methods.createRequest(request, function (data, response) {
        req.session.requestId = data['requestId']
        res.redirect(data['processUrl'])
    })
}

module.exports = paymentCtrl
