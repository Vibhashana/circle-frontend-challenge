import { Books as BooksType } from "@/types/book-types";
import Book from "./book";
import { BookDashed } from "lucide-react";

const Books = ({ books }: { books: BooksType }) => {
  if (!books || books.length === 0)
    return (
      <div className="col-span-4 mx-auto flex items-center justify-center gap-4">
        <BookDashed className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
        <p>Sorry, no books found</p>
      </div>
    );

  return (
    <>
      {books.length > 0 &&
        books.map(({ id, title, author, price, availableStock }) => (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            price={price}
            availableStock={availableStock}
          />
        ))}
    </>
  );
};

export default Books;
