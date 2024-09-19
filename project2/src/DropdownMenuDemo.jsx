
import * as React from "react"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  export function DropdownMenuDemo() {

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
    <Button variant="outline" className="border-none">COMPONENTS</Button>
  </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Presentation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Admin</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>E-commrece</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Blog</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Authentication</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Misc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Error</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
export default DropdownMenuDemo;  