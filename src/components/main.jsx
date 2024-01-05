import React from "react"

const Main =() => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-waves-z7N8YMSM-v4"></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <h1>Joe's Here!</h1>
                <h2>I'm a software engineering professional looking to help you!</h2>
            </div>
        </div>
    )
}

export default React