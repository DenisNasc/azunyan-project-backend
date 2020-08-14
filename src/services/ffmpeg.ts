import fs from 'fs'
import ffmpegCommand, {FfmpegCommandOptions, FfmpegCommand} from 'fluent-ffmpeg'
import {Response} from 'express'

import downloadVideoFromYT from './ytdl'

const registerOnListeners = (ffmpeg: FfmpegCommand) => {
  ffmpeg.on('start', commandLine => {
    console.log('Editando vídeo baixado do Youtube: ' + commandLine)
  })

  ffmpeg.on('progress', progress => {
    console.log(`timemark: ${progress.timemark}`)
  })

  ffmpeg.on('end', () => {
    console.log('Proccess done')
  })

  ffmpeg.on('error', error => {
    console.log('deu erro ', error.message)
  })
}

interface ParamsGenerateMusic {
  videoUrl: string
  name: string
  startTime?: string
  duration?: string
  noVideo?: boolean
}

const generateMusic = (
  res: Response,
  {videoUrl, name, startTime, duration, noVideo}: ParamsGenerateMusic,
  ffmpegOptions?: FfmpegCommandOptions | undefined
): void => {
  const videoFromYT = downloadVideoFromYT(videoUrl, {
    filter: noVideo ? 'audioonly' : 'audioandvideo',
  })

  const ffmpeg = ffmpegCommand(ffmpegOptions)

  const videoFromFfmpeg = ffmpeg.input(videoFromYT)
  registerOnListeners(videoFromFfmpeg)

  if (noVideo) {
    videoFromFfmpeg.noVideo().format('mp3')
  } else {
    videoFromFfmpeg.format('mp4')
  }

  if (startTime) {
    videoFromFfmpeg.setStartTime(startTime)
  }

  if (duration) {
    videoFromFfmpeg.setDuration(duration)
  }

  const formatedName = name.trim().replace(/ /g, '_').toLowerCase()

  const pathToMusicFolder = `${process.cwd()}/music`

  if (noVideo) {
    videoFromFfmpeg.save(`${pathToMusicFolder}/${formatedName}.mp3`)
  } else {
    videoFromFfmpeg.save(`${pathToMusicFolder}/${formatedName}.mp4`)
  }

  videoFromFfmpeg.once('end', () => {
    if (noVideo) {
      res.download(`${pathToMusicFolder}/${formatedName}.mp3`)
    } else {
      res.download(`${pathToMusicFolder}/${formatedName}.mp4`)
    }

    setTimeout(() => {
      if (noVideo) {
        fs.unlinkSync(`${pathToMusicFolder}/${formatedName}.mp3`)
      } else {
        fs.unlinkSync(`${pathToMusicFolder}/${formatedName}.mp4`)
      }
    }, 20000)
  })
}

export default generateMusic
