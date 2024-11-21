import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import { Home, Coffee, ScrollText, BookHeart } from "lucide-react"
import FavItemsSidebar from "../ui/BagSidebar";
  
  export default function AppSidebar() {
   
    const items =  [
      {
          title: "Home",
          url: "/",
          icon: Home,
      },
      {
          title: "Coffee",
          url: "/Coffees",
          icon: Coffee,
      },
      {
          title: "Bag",
          url: "/Bag",
          icon: BookHeart,
      },
      {
        title: "Orders",
        url: "/Orders",
        icon: ScrollText,
      }
    ]
    return (
      <Sidebar>
        <SidebarHeader/>
        <SidebarContent>
          <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                <FavItemsSidebar/>
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  