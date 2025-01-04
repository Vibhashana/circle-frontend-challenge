import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  const menu = [
    { title: "Home", url: "/" },
    { title: "Books", url: "/books" },
    { title: "About", url: "#" },
    { title: "Contact Us", url: "#" },
  ];

  return (
    <header className="py-2 shadow-lg">
      <div className="content-container flex">
        <nav className="flex w-full items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="ml-auto hidden items-center gap-4 md:flex">
            {menu.map(({ title, url }, index) => (
              <Button key={index} variant="ghost" asChild>
                <Link
                  href={url}
                  className="text-neutral-500 dark:text-neutral-100"
                >
                  {title}
                </Link>
              </Button>
            ))}
          </div>

          <ThemeSwitcher />
        </nav>
        <MobileNav menu={menu} />
      </div>
    </header>
  );
};

export default Navbar;
