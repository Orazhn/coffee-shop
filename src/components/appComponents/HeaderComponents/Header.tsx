import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import { SidebarTrigger } from "../../ui/sidebar"
import { Button } from "../../ui/button"
import CoffeesTab from "./CoffeesTab"
import BagTab from "./BagTab"
import OrdersTab from "./OrdersTab"
import { ModeToggle } from '@/components/Mode/ThemeButton'

const Header = () => {
  return (
    <header className="w-screen shadow-md fixed">
        <Menubar className="py-6 flex justify-between w-screen overflow-y-auto items-center ">
              <MenubarMenu>
                  <SidebarTrigger /> 
                  <div className="flex justify-between gap-10 text-xs items-center sm:hidden md:flex">   
                    <ModeToggle/>
                    <CoffeesTab/>
                    <BagTab/>
                    <OrdersTab/>
                  </div>
                  <SignedOut>
                        <SignInButton mode="modal">
                          <Button>Sign in</Button>
                        </SignInButton>
                  </SignedOut>
                  <SignedIn >
                      <UserButton showName />
                  </SignedIn>
              </MenubarMenu>
          </Menubar>
    </header>
  )
}

export default Header