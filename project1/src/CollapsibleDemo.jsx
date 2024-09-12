
import * as React from "react"
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-70 space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
      
        <h4 className="text-sm text-gray-600">
          USER
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-5 p-0 text-gray-600">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
      <div className="rounded-md  px-4 py-3 font-mono text-sm  hover:bg-gray-300 cursor-pointer text-gray-600">
       My Profile
      </div>
      
        <div className="rounded-md px-4 py-3 font-mono text-sm hover:bg-gray-300 cursor-pointer text-gray-600">
         Setting
        </div>
        <div className="rounded-md px-4 py-3 font-mono text-sm hover:bg-gray-300 cursor-pointer text-gray-600">
         Layout
        </div>
      </CollapsibleContent>
      
    </Collapsible>
  )
}
export default CollapsibleDemo;