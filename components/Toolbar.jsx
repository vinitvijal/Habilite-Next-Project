import { Button } from "@/components/ui/button"
import { Bold, Italic, Link, Image, Code, Heading } from "lucide-react"



export function Toolbar({ onAction }) {
  return (
    <div className="bg-gray-100 p-2 flex space-x-2 rounded-md">
      <Button variant="outline" size="icon" onClick={() => onAction("bold")}>
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => onAction("italic")}>
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => onAction("link")}>
        <Link className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => onAction("image")}>
        <Image className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => onAction("code")}>
        <Code className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => onAction("heading")}>
        <Heading className="h-4 w-4" />
      </Button>
    </div>
  )
}

