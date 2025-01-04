import Books from "@/components/books";
import { Books as BooksType } from "@/types/book-types";
import Search from "@/components/search";
import { BookCardSkeleton } from "@/components/skeletons";
import { Suspense } from "react";
import { fetchBooks } from "@/lib/actions";
import Hero from "@/components/hero";

type HomeProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  const books: BooksType = await fetchBooks(query);
  return (
    <>
      <Hero />
      <Search className="sticky top-4 z-30 -mt-[30px] border-2 border-neutral-400" />
      <section className="section">
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
