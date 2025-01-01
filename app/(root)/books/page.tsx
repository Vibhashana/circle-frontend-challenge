import { fetchBooks } from "@/lib/actions";
import { Books as BooksType } from "@/types/book-types";

import { BookCardSkeleton } from "@/components/skeletons";
import Books from "@/components/books";
import { Suspense } from "react";

const Page = async () => {
  const books: BooksType = await fetchBooks();

  return (
    <section>
      <div className="content-container">
        <h1 className="text-2xl">Books</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<BookCardSkeleton />}>
            <Books books={books} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Page;
