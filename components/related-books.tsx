import { fetchBooksByAuthor } from "@/lib/actions";
import Books from "./books";
import { Books as BooksType } from "@/types/book-types";

const relatedBooks = async ({
  author,
  currentBookId,
}: {
  author: string;
  currentBookId: number;
}) => {
  const relatedBooks: BooksType = await fetchBooksByAuthor(
    author,
    currentBookId
  );

  return (
    relatedBooks.length > 0 && (
      <section className="py-12">
        <div className="content-container">
          <h2 className="section-title">{`${author}'s other books`}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {relatedBooks.map((book, key) => (
              <Books books={relatedBooks} key={`${book.id}-${key}`} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default relatedBooks;
