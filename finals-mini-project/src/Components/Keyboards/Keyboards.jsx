import { Keyboard } from "./Keyboard"
import keyboards from './../../Data/Keyboards.json'
export const Keyboards = () => {
    
  return (
    <>
        {keyboards.length>0&& <Keyboard keyboards={keyboards}/> }
    </>
  )
}
