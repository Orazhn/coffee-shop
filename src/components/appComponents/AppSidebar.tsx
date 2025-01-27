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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Coffee, ScrollText, ShoppingBag } from "lucide-react";
import FavItemsSidebar from "./SidebarComponents/BagSidebar";
import Link from "next/link";
import CoffeeFilter from "./SidebarComponents/coffee-filter";
import { MapPinHouse } from "lucide-react";

export default function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Coffees",
      url: "/Coffees",
      icon: Coffee,
    },
    {
      title: "Bag",
      url: "/Bag",
      icon: ShoppingBag,
    },
    {
      title: "Orders",
      url: "/Orders",
      icon: ScrollText,
    },
    {
      title: "Address",
      url: "/Address",
      icon: MapPinHouse,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <div className="flex w-full justify-between md:hidden">
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarTrigger />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <FavItemsSidebar />
              <CoffeeFilter />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
