import { TfiWorld } from "react-icons/tfi";
import { TableDemo } from "./TableDemo";
export function Body(){
    return(
        <div className=" w-full h-1/2 bg-white py-2 mt-4 rounded-[5px]">
        <div className="flex flex-row">
            <TfiWorld  className=" bg-black text-white text-4xl m-2 p-2 rounded-[5px]"/>
           <p className="font-bold m-2 p-2 "> Sales by Country</p>
        </div>
        <div className="flex flex-row w-full">
        <div className="w-1/2 p-6"><TableDemo /></div>
        <div className=" w-1/2 p-6"><img src="src/assets/world1.jpg" /></div>
        </div>
        </div>
    );
}
export default Body;