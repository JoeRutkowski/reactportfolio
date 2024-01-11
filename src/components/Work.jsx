import React from 'react'

const data = [
        {
           Year: 'filler text',
           Title: 'filler text',
           Duration: 'filler text',
           Details: 'filler text'
        },
        {
            Year: 'filler text',
            Title: 'filler text',
            Duration: 'filler text',
            Details: 'filler text'
         }
]
const Work = () => {
    return (
        <div id='work' classname='max-w-[1040px] n-auto md:pl-20 p4 py-16'>
            <h1 classname="text-4xl font-bold text-center text-[#001b5e]"> Work </h1>
            {
                data.map(item, idx) => (
                    <WorkItem key={idx} year={item.Year} title={item.Title} Duration={item.Duration} Details={item.Details}/>
    )
            }
        </div>
    )
}

export default Work