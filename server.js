//requisições
const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

//utilizando express
const server = express()

//utiliza a pasta public como estático para estilo e scripts
server.use(express.static('public'))

//set do template engine com nunjucks
server.set('view engine', 'njk')

//configuração nunjucks
nunjucks.configure('views', {
    express: server
})

//definição do que será renderizado na rota /
server.get('/', (req, res) => {
    const content = {
        avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title: 'Rocketseat',
        description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
        lists: [
            { name: 'React JS' },
            { name: 'Node JS' },
            { name: 'React Native' }
        ],
        links: [
            { name: 'Github', url: 'https://github.com/Rocketseat'},
            { name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial'},
            { name: 'Facebook', url: 'https://pt-br.facebook.com/rocketseat/'}
        ]
    }
    return res.render('index', { content })
})

//definição do que será renderizado na rota /courses 
server.get('/courses', (req, res) => {
    return res.render('courses', { items: courses })
})

//página para erro 
server.use((req, res) => {
    res.status(404).render("not-found");
})

//server rodando
server.listen(8000, () => console.log('server is online'))