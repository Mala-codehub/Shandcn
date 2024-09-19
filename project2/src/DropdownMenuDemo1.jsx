import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

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

export function DropdownMenuDemo1() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-none">EXAMPLE PAGES</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>PAGES</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Chat</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Checkout</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>E-commerce</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Invoice</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Pricing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Product</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropdownMenuDemo1;  