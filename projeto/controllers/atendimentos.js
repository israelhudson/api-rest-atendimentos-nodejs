const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos',  (req, res) => res.send('Voce está em atendimentos e realizando GET'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })
}