import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import React from "react";

import { socials } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-blue-50/80 pb-4 pt-10 dark:bg-neutral-900/80">
      <div className="content-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
              BookNest is your go-to destination for discovering books that
              inspire, entertain, and transport you to new worlds. Find your
              next great read today.
            </p>
          </div>

          <div className="flex justify-end gap-1">
            {socials?.map(({ name, icon, link }, key) => (
              <Button
                size="icon"
                variant="ghost"
                asChild
                key={name + key}
                aria-label={`Visit our ${name} page`}
                title={`Visit our ${name} page`}
              >
                <Link href={link}>
                  {React.cloneElement(React.createElement(icon), {
                    className: "!size-[18px]",
                  })}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="content-container">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://sahanbandara.com"
              target="_blank"
              className="text-blue-950 underline decoration-dashed underline-offset-2 hover:decoration-solid dark:text-neutral-300"
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
