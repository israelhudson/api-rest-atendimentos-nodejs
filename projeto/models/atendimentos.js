const conexo = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexo.query(sql, atendimento, (erro) => {
            if(erro)
                console.log(erro)
            else
                console.log(resultados)
        })
    }
}

module.exports = new Atendimento