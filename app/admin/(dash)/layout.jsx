'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Calendar, Star, Settings, BookOpen } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
    const pathname = usePathname()
console.log(pathname)
    return (
        <main className=" h-screen w-screen flex">
            <aside className=" left-0 top-0 z-40 h-screen w-64 border-r bg-primary text-primary-foreground">
                <div className="flex h-16 items-center px-6 font-bold">DASHBOARD</div>
                <nav className="space-y-1 px-3 py-4">
                {[
                    { icon: Home, label: "Home", path: '/admin/dashboard' },
                    { icon: Calendar, label: "Book appointment", path: '/admin/appointment' },
                    { icon: Star, label: "Testimonials", path: '/admin/testimonials' },
                    { icon: BookOpen, label: "Blogs", path: '/admin/blogs' },
                    { icon: Settings, label: "Settings", path: '/admin/settings' },
                ].map(({ icon: Icon, label, path }) => (
                    <Button
                    href={path}
                    key={label}
                    variant="ghost"
                    className={cn("w-full justify-start gap-3 text-primary-foreground/80 hover:text-primary", pathname===path && "text-primary bg-primary-foreground/70" )}
                    >
                    <Icon className="h-4 w-4" />
                        <Link href={path}>
                    {label}
                        </Link>
                    </Button>
                ))}
                </nav>
            </aside>
            <div className=" h-screen p-4 flex-1">
                {children}
            </div>
        </main>
    );
  }
