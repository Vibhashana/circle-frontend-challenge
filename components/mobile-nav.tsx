import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  //   SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "./logo";

interface MobileNavProps {
  menu: { title: string; url: string }[];
}

const MobileNav = ({ menu }: MobileNavProps) => {
  return (
    <>
      <Sheet>
        <SheetTitle>
          <span className="sr-only">Navigation menu panel</span>
        </SheetTitle>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-auto md:hidden">
            <Menu className="!size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex items-center justify-between">
            <Link href="/" prefetch={false}>
              <Logo />
            </Link>
            {/* <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close navigation menu"
              >
                <X className="!size-5 text-neutral-900" />
              </Button>
            </SheetClose> */}
          </div>
          {menu.length > 0 && (
            <div className="mt-8 grid gap-2">
              {menu.map(({ title, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  className="py-2 text-neutral-500 dark:text-neutral-100"
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
