import React from 'react'
import ReactPlayer from 'react-player'

const ResponsivePlayer = (props) => (
  <div className='video-player-wrapper'>
    <ReactPlayer
      className='video-player'
      url={props.url}
      width='100%'
      height='100%'
      controls
      config={{
        youtube: {
          playerVars: { showinfo: 0, modestBranding: 0, color: "white" } 
        },
        vimeo: {
          playerOptions: { color: "ff7e2a" }
        }
      }}
    />
  </div>
)

export default ResponsivePlayer

