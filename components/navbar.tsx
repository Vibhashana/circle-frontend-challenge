import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="py-4 shadow-lg">
      <div className="content-container">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/books">Books</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#">Contact Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
