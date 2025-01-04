import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-blue-50 pb-4 pt-10 dark:bg-neutral-900">
      <div className="content-container">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <hr className="my-4" />
      <div className="content-container">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/Vibhashana"
              target="_blank"
              className="text-blue-950 hover:underline dark:text-neutral-300"
            >
              Sahan Bandara
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
