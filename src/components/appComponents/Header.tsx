"use client";
import { UserButton } from "@clerk/nextjs";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "@/providers/Mode/ThemeButton";
import { ShoppingBag, ScrollText as OrdersList } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";
import HeaderButton from "./HeaderComponents/HeaderButton";
import { Input } from "../ui/input";
import useSearchStore from "@/store/searchStore";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  const { search, updateSearch } = useSearchStore();
  const pathname = usePathname();

  const HeaderTabs = [
    {
      name: "Coffees",
      path: "/Coffees",
      icon: <CiCoffeeCup size={20} />,
    },
    {
      name: "Bag",
      path: "/Bag",
      icon: <ShoppingBag size={20} />,
    },
    {
      name: "Orders",
      path: "/Orders",
      icon: <OrdersList size={20} />,
    },
  ];

  return (
    <header className="w-screen shadow-md fixed overflow-hidden">
      <Menubar className="py-6 flex justify-between w-screen items-center">
        <MenubarMenu>
          <SidebarTrigger />
          <div className="flex justify-between gap-10 text-xs items-center sm:hidden md:flex">
            <ModeToggle />
            {HeaderTabs.map((tab) => (
              <HeaderButton tab={tab} key={tab.path} />
            ))}
            {pathname == "/Coffees" && (
              <div className="flex items-center gap-2">
                <Input
                  className=""
                  placeholder="Search Coffees..."
                  value={search}
                  onChange={(e) => updateSearch(e.target.value)}
                />
                <Search />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 font-semibold">
            {user?.username}
            <UserButton userProfileMode="modal" />
          </div>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Header;
