import React from "react"
import { TypeAnimation } from "react-type-animation"
import {FaTwitter, FaFacebookF, FaLinkedin, FaInstagram} from 'react-icons-fa'
const Main =() => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-waves-z7N8YMSM-v4"></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <h1>Joe's Here!</h1>
                <h2>I'm a 
                    <TypeAnimation
                    sequence={[
                        'Web Developer',
                        2000,
                        'Scrum Master',
                        2000,
                        'Consultant',
                        2000,
                    ]}
                    wrapper='div'
                    cursor={true}
                    repeat={infinity}
                    style={{fontSize: '1em', paddingLeft: '5px'}}
                    />
                </h2>
                <div>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
    )
}

export default React