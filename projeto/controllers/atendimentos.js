module.exports = app => {
    app.get('/atendimentos',  (req, res) => res.send('Voce está em atendimentos e realizando GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Voce está em atendimentos e realizando POST '+ req.body['nome'])
    })
}