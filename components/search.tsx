"use client";

import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div
      className={clsx(
        "mx-4 flex h-[60px] items-center rounded-lg bg-white px-5 py-2 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 sm:mx-auto sm:w-[500px]",
        className
      )}
    >
      <SearchIcon className="mr-2 text-neutral-400" />
      <input
        type="search"
        className="size-full border-0 bg-transparent text-neutral-900 outline-none dark:text-neutral-100"
        placeholder="Search books by title, author or ISBN"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
};

export default Search;
