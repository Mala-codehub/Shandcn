import * as React from "react";
import { ChevronDown } from "lucide-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { GrGallery } from "react-icons/gr";
import { RiGalleryView2 } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { CiMemoPad } from "react-icons/ci";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo1() {
  const [isOpenDashboard, setIsOpenDashboard] = React.useState(false);
  const [isOpenPages, setIsOpenPages] = React.useState(false);

  return (
    <div className="space-y-4">
      {/* Dashboard Section */}
      <Collapsible
        open={isOpenDashboard}
        onOpenChange={setIsOpenDashboard}
        className="w-70 space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 ">
        <LuLayoutDashboard />
          <h4 className=" text-gray-600 ml-3 mb-2">Dashboard</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md px-4 py-3 font-mono hover:bg-gray-300 cursor-pointer text-gray-600">
            Analytics
          </div>
          <div className="rounded-md px-4 py-3 font-mono hover:bg-gray-300 cursor-pointer text-gray-600">
            Sales
          </div>
        </CollapsibleContent>
      </Collapsible>

      <h4 className="text-sm mt-2 mb-2">PAGES</h4>
      <Collapsible
        open={isOpenPages}
        onOpenChange={setIsOpenPages}
        className="w-70 space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
        <GrGallery />
          <h4 className=" text-gray-600 mt-2 mb-2">Pages</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between space-x-4 px-4">
        <RiGalleryView2 />
          <h4 className="text-gray-600 mt-2 mb-2">Applications</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between space-x-4 px-4">
        <IoBagHandleSharp />
          <h4 className=" text-gray-600 mt-2 mb-2">Ecommerce</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between space-x-4 px-4">
        <CiMemoPad />
          <h4 className=" text-gray-600 mt-2 mb-2">Authentication</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  );
}

export default CollapsibleDemo1;
