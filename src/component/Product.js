import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {themes} from "../db/data"
import { MiniTitle } from "../component";

const ProductItem = ({index,item}) =>{
    return <div className=" flex justify-between place-items-center">
     <div className="flex gap-20">
     <h1 className="text-h32 font-semibold text-grayscale-50">0{index+1}</h1>
     <div className="grid gap-6">
     <h2 className="text-h32 font-semibold text-grayscale-50">{item.title}</h2>
     <h2 className="text-h18  text-grayscale-50 w-3/4">{item.description}</h2>
 
     </div>
     </div>
     <AiOutlineArrowRight className="text-h32 font-semibold text-grayscale-50"/>
     </div>
 }
const Product = () =>{
return (<div className="grid gap-16">
<div>
<MiniTitle title="PRODUCT"/>
<div className="lg:flex grid gap-2 justify-between place-items-baseline mt-4">
    <p className="lg:text-h36 text-h24 font-semibold text-grayscale-50 lg:w-350">Choose your product themes.</p>
    <p className="text-h18 text-grayscale-10 lg:w-481">Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>

</div>
</div>

<div className="grid gap-8">
{
themes.map((theme,index)=><ProductItem key={index} index={index} item={theme}/>)
}
</div>
</div>)
}

export default Product;