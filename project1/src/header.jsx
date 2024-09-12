import { AiFillHome } from "react-icons/ai";
import { Input } from "@/components/ui/input"; // Ensure the path is correct for the Input component
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbBellFilled } from "react-icons/tb";
import Body from './body';
import CardWithForm from './CardWithForm';
import CardWithForm1 from "./CardWithForm1";
import CardWithForm2 from "./CardWithForm2";
export function Header() {
  return (
    <div className="relative flex flex-wrap items-center justify-between w-full px-6">
      <div className="flex items-start flex-col">
        <p className="text-sm flex items-center space-x-2 whitespace-nowrap">
          <AiFillHome />
          <span>/ Dashboard</span>
        </p>
        {/* Move Dashboard text below the span */}
        <div className="font-bold text-xl whitespace-nowrap mt-2 mr-60">Dashboard</div>
      </div>
      <div className="ml-60">
        <div className="flex justify-end space-x-4">
          <Input type="text" placeholder="Search" className="rounded border px-4 py-2" />
          <FaUserCircle size={24} />
          <IoMdSettings size={24} />
          <TbBellFilled size={24} />
        </div>
      </div>
      <Body />
      <CardWithForm />
      <CardWithForm1 />
      <CardWithForm2 />
    </div>
  );
}

export default Header;
