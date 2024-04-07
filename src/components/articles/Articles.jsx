import React from 'react'
import './Articles.css'
import ImgComponents from '../ImgComponents'

const Articles = (props) => {
    return (
        <div>
            <div className="miVideo">
                <div className='video-prueba'>
                    <video src={props.url1} controls muted loop className='video-bg' />
                </div>
                <div className='text-video'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus odio et voluptates? Quam iusto sed eligendi doloribus, odit iste atque adipisci quae sapiente eveniet assumenda aut officiis laudantium aliquam.</p>
                </div>
            </div>
            
            <div className="miVideo2">
                <div className='text-video2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus odio et voluptates? Quam iusto sed eligendi doloribus, odit iste atque adipisci quae sapiente eveniet assumenda aut officiis laudantium aliquam.</p>
                </div>
                <div className='video-prueba2'>
                    <video src={props.url2} controls muted loop className='video-bg' />
                </div>
            </div>
            <ImgComponents/>
        </div>
    )
}

export default Articles
