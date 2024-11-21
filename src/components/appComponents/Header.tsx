'use client'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import { SidebarTrigger } from "../ui/sidebar"
import { Button } from "../ui/button"
import { Search, BookHeart, ScrollText} from "lucide-react"
import { CiCoffeeCup } from "react-icons/ci"
import { useRouter } from "next/navigation"

const Header = () => {
  const route = useRouter()

  return (
    <header className="w-screen shadow-md">
        <Menubar className="py-6 flex justify-between w-screen overflow-y-hidden overflow-x-auto">
              <MenubarMenu>
                  <SidebarTrigger/>
                  <div className="flex justify-between gap-10">   
                      <Button><Search/> Search</Button>
                      <Button onClick={() => route.push('/Coffees')}><CiCoffeeCup/> Coffees</Button>
                      <Button  onClick={() => route.push('/Bag')}><BookHeart/> Bag</Button>
                      <Button  onClick={() => route.push('/Orders')}><ScrollText/> Orders</Button>
                  </div>
                  <SignedOut>
                        <SignInButton mode="modal">
                          <Button>Sign in</Button>
                        </SignInButton>
                  </SignedOut>
                  <SignedIn >
                      <UserButton showName/>
                  </SignedIn>
              </MenubarMenu>
          </Menubar>
    </header>
  )
}

export default Header