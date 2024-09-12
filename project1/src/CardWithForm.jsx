import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[300px] bg-white mt-10 rounded-[10px] p-6">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <img src="src/assets/bar.png" alt="bar chart" ></img>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-start">
        <h3 className="font-bold">Website</h3>
        <p>Last Campaign Performance</p>
      </CardFooter>
    </Card>
  )
}
export default CardWithForm;