import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function RootLayout({ children }) {
    return (
    <SidebarProvider>
        <AppSidebar />
            <main
            ><div className="sidebar-trigger">
                <SidebarTrigger />
            </div>
            {children}
            </main>
    </SidebarProvider>
    );
  }
