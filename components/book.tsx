import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Book as BookType } from "@/types/book-types";
import StockDisplay from "./stock-display";
import PurchaseBook from "./purchase-book";

const Book = ({
  id,
  title,
  author,
  availableStock,
  price,
}: BookType & { key?: string | number }) => {
  return (
    <Card className="flex flex-col rounded-2xl">
      <CardHeader className="">
        <Image
          src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Book name"
          width={300}
          height={450}
          className="aspect-[1/1.5] w-full rounded-xl object-cover"
          priority
        />
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-lg font-medium">{title}</p>
        <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-400">
          {author}
        </p>
        <StockDisplay availableStock={availableStock || 0} className="mb-4" />
        <p>
          <span className="text-sm">$</span>
          <span className="text-2xl font-bold">{price}</span>
        </p>
      </CardContent>
      <CardFooter className="flex flex-col flex-wrap gap-4 sm:flex-row">
        <Button
          variant="secondary"
          className="h-11 w-full flex-grow sm:w-auto md:h-10"
          asChild
        >
          <Link href={`/books/${id}`}>Details</Link>
        </Button>
        <PurchaseBook
          id={id}
          className="h-11 w-full px-4 sm:w-auto sm:flex-grow-[2] md:h-10"
          disabled={availableStock === 0}
        />
      </CardFooter>
    </Card>
  );
};

export default Book;
