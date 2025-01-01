import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { fetchBooks } from "@/lib/actions";
import { Books } from "@/types/book-types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  const books: Books = await fetchBooks();

  console.log(books);

  return (
    <section>
      <div className="content-container">
        <h1 className="text-2xl">Books</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {books.length === 0 && <p>No books found</p>}
          {books.length > 0 &&
            books.map(({ id, title, author, price, availableStock }) => (
              <Card key={id}>
                <CardHeader className="p-0">
                  <Image
                    src="https://placehold.co/400x600/png"
                    alt="Book name"
                    width={400}
                    height={600}
                    className="aspect-[1/1.5] rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg font-medium">{title}</p>
                  <p className="text-sm text-neutral-800 dark:text-neutral-400">
                    {author}
                  </p>
                  {availableStock <= 5 && (
                    <p className="text-sm text-red-700 dark:text-red-400">
                      Only {availableStock} left in stock!
                    </p>
                  )}
                  <p>
                    <span className="text-sm">$</span>{" "}
                    <span className="text-xl font-bold">{price}</span>
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/books/${id}`}>Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
