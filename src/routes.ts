import {Router} from 'express'
import generateMusic from './services/ffmpeg'

const routes = Router()

routes.post('/', (req, res) => {
  const {body} = req

  if (!body.videoUrl) {
    res.status(400).send('Insira uma URL do Youtube')
    return
  }

  if (!body.name) {
    res.status(400).send('Insira um nome para o arquivo a ser gerado')
    return
  }

  try {
    generateMusic(res, {...body})
  } catch (error) {
    console.log(error.message)
    res.status(500).send(`Houve um erro no servidor. Menssagem: ${error.message}`)
  }
})

export default routes
