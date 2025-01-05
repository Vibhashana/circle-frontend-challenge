import { Button } from "@/components/ui/button";
import { MoveLeft, TriangleAlert } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="section my-auto flex items-center justify-center">
      <div className="content-container flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
        <TriangleAlert className="size-[50px] text-neutral-400 dark:text-neutral-500 sm:size-[150px]" />
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-3xl font-semibold">404 Not Found!</h2>
          <p className="mb-4 text-neutral-500">
            Could not find the page you&apos;re looking for
          </p>
          <Button asChild size="lg" className="gap-4">
            <Link href="/">
              <MoveLeft />
              <span>Go back to home page</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
