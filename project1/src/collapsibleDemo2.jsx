import * as React from "react";
import { ChevronDown } from "lucide-react";
import { RiFilePaper2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { CgComponents } from "react-icons/cg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo2() {
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
        </Collapsible>
      <h4 className="text-sm mt-2 mb-2">DOCS</h4>
      <Collapsible
        open={isOpenPages}
        onOpenChange={setIsOpenPages}
        className="w-70 space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
        <RiFilePaper2Line />
          <h4 className=" text-gray-600 mt-2 mb-2">Basic</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between space-x-4 px-4">
        <CgComponents />
          <h4 className=" text-gray-600 mt-2 mb-2">Components</h4>
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

export default CollapsibleDemo2;
