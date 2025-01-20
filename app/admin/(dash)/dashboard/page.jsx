import { Phone, FileText, Users, BookOpen, Home, Calendar, Star, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      

      {/* Main Content */}

        <div className="container py-6">
          <h1 className="mb-8 text-3xl font-bold tracking-tight">Admin Dashboard</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Book Appointments Card */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Book your appointments</CardTitle>
                <Phone className="ml-auto h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We aim to simplify your experience, making appointments quicker and more efficient than ever.
                </p>
                <Button className="mt-4" variant="secondary">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* View Appointments Card */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">View appointments</CardTitle>
                <FileText className="ml-auto h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Easily view and manage your scheduled appointments at any time.
                </p>
                <Button className="mt-4" variant="secondary">
                  View All
                </Button>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Contact us</CardTitle>
                <Users className="ml-auto h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Have questions? Reach out to us for assistance and support.
                </p>
                <Button className="mt-4" variant="secondary">
                  Get in Touch
                </Button>
              </CardContent>
            </Card>

            {/* Blog Card */}
            <Card className="col-span-full">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">Read Blogs</CardTitle>
                <BookOpen className="ml-auto h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover insights and tips to enhance your business journey with our latest articles.
                </p>
                <Button className="mt-4" variant="secondary">
                  Browse Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

    </div>
  )
}

