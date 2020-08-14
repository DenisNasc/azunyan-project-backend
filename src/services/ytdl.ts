import ytdl, {downloadOptions} from 'ytdl-core'

const downloadVideoFromYT = (videoUrl: string, options: downloadOptions) => {
  return ytdl(videoUrl, options)
}

export default downloadVideoFromYT
