import {
  ClerkProvider,
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/appComponents/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/appComponents/AppSidebar";
import Image from "next/image";
import { dark } from "@clerk/themes";
import { StoreProvider } from "@/state/StoreProvider";
import Chat from "@/components/aiComponents/Chat";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/Mode/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClerkProvider
          appearance={{
            baseTheme: [dark],
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <div
                className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/images/authBg.png')] 
                    bg-cover bg-center bg-no-repeat"
              >
                <div className="flex flex-col items-center bg-stone-900 p-4 rounded-xl">
                  <Image
                    src="/images/logo.png"
                    alt="Background Image"
                    width={100}
                    height={100}
                  />
                  {children}
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <ClerkLoading>
                <div className="flex flex-col justify-center items-center w-screen h-screen gap-2">
                  <h1 className="text-xl">Loading...</h1>
                </div>
              </ClerkLoading>
              <ClerkLoaded>
                <SidebarProvider defaultOpen={false}>
                  <StoreProvider>
                    <div className="flex h-screen overflow-x-hidden">
                      <AppSidebar />
                      <div className="flex flex-col w-screen">
                        <Header />
                        <main className="flex-1 bg-gray-100 dark:bg-black mt-12">
                          {children}
                          <Toaster />
                        </main>
                        <div className="fixed bottom-0 right-0 shadow-2xl">
                          <Chat />
                        </div>
                      </div>
                    </div>
                  </StoreProvider>
                </SidebarProvider>
              </ClerkLoaded>
            </SignedIn>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
