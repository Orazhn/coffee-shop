"use client";
import { UserButton } from "@clerk/nextjs";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "@/providers/Mode/ThemeButton";
import { ShoppingBag, ScrollText as OrdersList } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";
import HeaderButton from "./HeaderComponents/HeaderButton";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { updateSearch } from "@/state/search/searchSlice";
import { Search } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.search);
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
            <div className="flex items-center gap-2">
              <Input
                className=""
                placeholder="Search Coffees..."
                value={search}
                onChange={(e) => dispatch(updateSearch(e.target.value))}
              />
              <Search />
            </div>
          </div>
          <UserButton />
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Header;
