const RedirectionAuth = require('./auth')
const Client = require('node-rest-client').Client;

const responseCtrl = {}
responseCtrl.renderResponse = (req, res) => {
    const client = new Client();
    let authGenerator = new RedirectionAuth(process.env.TOKEN, process.env.SECRETKEY);
    let auth = authGenerator.asObject();

    let request = {
        data: {
            auth: auth,
        },
        headers: { "Content-Type": "application/json" }
    }
    client.registerMethod("GetRequestInformation", `https://test.placetopay.com/redirection/api/session/${req.session.requestId}`, "POST");

    client.methods.GetRequestInformation(request, function (data, response) {
        let states = {
            'APPROVED': {
                message: 'La transacción ha sido exitosa!', 
                status: 'APROBADA'
            },
            'FAILED': {
                message: 'Fallo en una petición de autenticación.', 
                status: 'FALLIDA'
            },
            'REJECTED': {
                message: 'Se ha declinado la transacción.', 
                status: 'RECHAZADA'
            },
            'PENDING': {
                message: 'Transaccion pendiente.', 
                status: 'PENDIENTE'
            },

        }
        let { message, status } = states[data.status.status]
        total = data.request.payment.amount.total

        console.log(data)

        res.render('response', {requestId: req.session.requestId, message, status, total })
    })
}

module.exports = responseCtrl
