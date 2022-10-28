import React from 'react'
const TopPage = ({item}) =>(  <div className="grid place-items-center gap-4 ">
<h1 className="xl:text-h56 text-h24 font-bold ">{item.title}</h1>
<p className="text-h18 w-full md:w-3/4  lg:w-1/2 xl:w-2/5 text-center">{item.description}
</p>
{item.image&&<img className="xl:h-500 lg:h-400 h-350 aspect-auto w-full" src={item.image} alt="image" />}
</div>)
export default TopPage;