import Books from "@/components/books";
import { Books as BooksType } from "@/types/book-types";
import Search from "@/components/search";
import { BookCardSkeleton } from "@/components/skeletons";
import Image from "next/image";
import { Suspense } from "react";
import { fetchBooks } from "@/lib/actions";

type HomeProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  const books: BooksType = await fetchBooks(query);
  return (
    <>
      <section className="relative grid h-auto place-items-center overflow-hidden pb-12 pt-8 before:absolute before:inset-0 before:z-10 before:bg-blue-900/80 sm:h-[400]">
        <Image
          src="https://images.unsplash.com/photo-1520545255830-2511979f3636?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1920}
          height={600}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-blue-900/80"></div> */}
        <div className="content-container relative z-20 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
            Welcome to BookNest
          </h1>
          <p className="mx-auto max-w-[60ch] text-sm leading-relaxed">
            We believe in the power of books to inspire and transform. Whether
            you&apos;re after a new release, a classic, or something fresh,
            you&apos;ll find your perfect read here.
          </p>
        </div>
      </section>
      <Search className="sticky top-4 z-30 -mt-[30] border-2 border-neutral-400" />
      <section className="section sticky top-0">
        <div className="content-container">
          <h1 className="section-title">
            {query ? `Search result for '${query}'` : `Browse all books`}
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<BookCardSkeleton />}>
              <Books books={books} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
