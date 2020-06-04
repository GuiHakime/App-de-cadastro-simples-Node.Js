const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({ force: true })
module.exports = Post     //Deve exportar para acessar o módulo Post em outros arquivos!
