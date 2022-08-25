import React from 'react'
import './Video.css'

const Video = () => {
    return (
        <div classname="videocontainer">
            <video classname="videos" autoPlay loop muted playsinline preload="none">
                <source src="/video/banner.mp4" type="video/mp4"></source>
            </video>
            <div className='spirit'>
                <div className='spirittext'>SPIRIT BOX</div>
            </div>
        </div>
    )
}

export default Video
