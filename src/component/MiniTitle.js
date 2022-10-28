import React from 'react'
import {Divider} from './'
const MiniTitle =({title})=>{
    return(
        <div className="flex place-items-center gap-4">
        <h1 className="tex-h16 font-medium text-black">{title}</h1>
        <Divider width={"w-1/2"} />
      </div>

    )
}

export default MiniTitle;