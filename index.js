const dotenv = require('dotenv')
if (process.env.NODE_ENV !== 'production') 
  dotenv.config()

const { BOT_TOKEN } = process.env

const Discord = require('discord.js')

const bot = new Discord.Client()

bot.login(BOT_TOKEN)

bot.on('message', message => {
  if (message.content === 'Seja bem vindo NEX!') {
    message.reply('É um prazer servir vocês! Caso precise de algo mais é só mandar um /ajuda.')
  }
})

bot.on('message', message => {
  if (message.content === '/ajuda') {
    message.channel.send({embed: {
      "color": '07F9A2',
      "title": `Como posso te ajudar ${message.author.username}?`,
      "description": `Que tal se começarmos com...`,
      "fields": [
        {
          "name": "/time",
          "value": "Posso te explicar tudo sobre as equipes!"
        },
        {
          "name": "/criterios",
          "value": "Te conto todos os critérios de avaliação."
        },
        {
          "name": "/mentoria",
          "value": "Se quiser saber como funcionam as mentorias."
        }
      ],
      "footer": {
        "text": `Com carinho. NEX Hackathon!`
      }
    }})
  }
})

bot.on('message', message => {
  if (message.content === 'oi nex') {
    message.reply(`Oi ${message.author.username}, é um prazer ver você aqui!`)
    message.reply(`${message.author.username}, você pode digitar /ajuda quando precisar.`)
  }
})

bot.on('message', message => {
  if (message.content === 'Oi nex') {
    message.reply(`Oi ${message.author.username}, é um prazer ver você aqui!`)
    message.reply(`${message.author.username}, você pode digitar /ajuda quando precisar.`)
  }
})

bot.on('message', message => {
  if (message.content === 'Oi NEX') {
    message.reply(`Oi ${message.author.username}, é um prazer ver você aqui!`)
    message.reply(`${message.author.username}, você pode digitar /ajuda quando precisar.`)
  }
})

bot.on('message', message => {
  if (message.content === '/time') {
    message.channel.send({embed: {
      "color": '07F9A2',
      "title": `Como os times funcionam?`,
      "description": `Bom, nessa maratona os times estarão organizados em 5 integrantes, esses times podem ser formados no site na aba "Grupos".`,
    }})
  }
})

bot.on('message', message => {
  if (message.content === '/criterios') {
    message.channel.send({embed: {
      "color": '07F9A2',
      "title": `Quais são critérios?`,
      "description": `Certo, nosso nossa banca vai avaliar os seguintes pontos em cada projeto:`,
      "fields": [
        {
          "name": "Criatividade",
          "value": "O quão a solução é criativa e original."
        },
        {
          "name": "Viabilidade do projeto",
          "value": "Se vale a pena aplicar no contexto."
        },
        {
          "name": "Tecnologias",
          "value": "O quão a solução faz uso de tecnologias consideradas disruptivas e que de fato pode oferecer escala ao projeto."
        },
        {
          "name": "Elementos Futuros",
          "value": "O quão a solução apresentada demonstra elementos ligados a tendências futuristas."
        },
        {
          "name": "Qualidade de Produto",
          "value": "O quão o protótipo exibido no vídeo de demonstração apresenta aparente qualidade em suas funcionalidades."
        }
      ],
    }})
  }
})

bot.on('message', message => {
  if (message.content === '/mentoria') {
    message.channel.send({embed: {
      "color": '07F9A2',
      "title": `Como as mentorias funcionam?`,
      "description": `Ok, nós selecionamos ótimos mentores para te apoiar e dar aquele empurrãozinho quando seu grupo estiver com dificuldades. Para conversar com um mentor basta entrar na aba "mentoria" aqui no Discord e chamar um mentor.`,
    }})
  }
})