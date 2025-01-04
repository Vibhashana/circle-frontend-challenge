import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-blue-50 pb-4 pt-10">
      <div className="content-container">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <hr className="my-4" />
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} BookNest. All rights reserved.{" "}
          <span className="mx-2 text-neutral-400">&middot;</span>
          Made with ❤️ by{" "}
          <Link
            href="https://https://github.com/Vibhashana"
            target="_blank"
            className="text-blue-950 hover:underline"
          >
            Sahan Bandara
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
