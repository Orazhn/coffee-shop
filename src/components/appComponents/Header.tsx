import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { ModeToggle } from "@/components/Mode/ThemeButton";
import { ShoppingBag, ScrollText as OrdersList } from "lucide-react";
import { CiCoffeeCup } from "react-icons/ci";
import HeaderButton from "./HeaderComponents/HeaderButton";

const Header = () => {
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
      <Menubar className="py-6 flex justify-between w-screen  items-center ">
        <MenubarMenu>
          <SidebarTrigger />
          <div className="flex justify-between gap-10 text-xs items-center sm:hidden md:flex">
            <ModeToggle />
            {HeaderTabs.map((tab) => (
              <HeaderButton tab={tab} key={tab.path} />
            ))}
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Header;
