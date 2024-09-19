import ButtonDemo from "./ButtonDemo";
import ButtonDemo1 from "./ButtonDemo1";
import DropdownMenuDemo from "./DropdownMenuDemo";
import DropdownMenuDemo1 from "./DropdownMenuDemo1";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
export function Header(){
  return(
    <div>
    <div className="bg-black text-white w-full rounded">
      <div className="flex flex-row font-bold pt-6 py-2 ml-4"><p className="mr-4">Notus Design System PRO</p>
      <p className="mr-4 text-sm pt-2">DOCUMENTATION</p>
      <p className=" text-white mr-4 borderless"><DropdownMenuDemo /></p>
      <p className=" text-white mr-20"><DropdownMenuDemo1 /></p>
    <div className=" ml-40 mr-4"><FaFacebook size={22}/></div>
    <div className="mr-4"><FaTwitter size={22}/></div>
    <div className="mr-4"><FaGithub size={22}/></div>
    <div className="bg-gray-500 text-white rounded px-4 mr-2"><ButtonDemo /></div>
    <div className="bg-white text-black rounded px-4 mr-2"><ButtonDemo1 /></div></div>
    </div>
    <div className="flex flex-row"> <h2 className="mt-10 ml-4 font-bold text-xl text-gray-600">Presentation</h2>
    <p className="mt-12 ml-4 font-bold text-xl text-gray-600"><IoIosArrowForward /></p>
    <h2 className="mt-10 ml-4 font-bold text-xl text-gray-600">Sections</h2>
    </div>
   <div className="m-6 border border-gray-200 rounded px-4 py-8">
   <p className="mr-0 leading-tight rounded mb-2">
  <span className="bg-gray-400 rounded px-1">HAVE YOU SEEN US?</span>
</p>

    <h1 className="text-3xl font-bold mb-2">Our recent writings</h1>
    <p className="text-xl text-gray-400 mb-4">The time is now for it to be okay to be great. People in this world shun people for being great.</p>
    <div className="flex flex-row w-full mb-4">
    <div className="bg-purple-200 w-1/4 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/OIP (4).jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    <div className="bg-purple-200 w-1/4 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/R.jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    <div className="bg-purple-200 w-1/2 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/R (1).jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    </div>
    <div className="flex flex-row w-full mb-4">
    <div className="bg-purple-200 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/OIP.jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    <div className="bg-purple-200 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/OIP (2).jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    <div className="bg-purple-200 w-1/2 mr-3 duration-1000 ease-in-out delay-1000 rounded "><img src="src/assets/rain.jpg" alt="rain-photo"  className="transition-transform duration-500 ease-in-out transform hover:scale-90 rounded"/></div>
    </div>

    </div>
    </div>
  );
}
export default Header;