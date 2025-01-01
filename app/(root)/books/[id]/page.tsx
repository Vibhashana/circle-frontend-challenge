import { Button } from "@/components/ui/button";
import { fetchBook } from "@/lib/actions";
import { Book } from "@/types/book-types";
import { Barcode, UserPen } from "lucide-react";
import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const book: Book = await fetchBook(id);

  return (
    <section>
      <div className="content-container">
        <h1 className="text-2xl">Books</h1>
        {book && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <Image
                  src="https://placehold.co/400x600/png"
                  alt="Book cover"
                  width={400}
                  height={600}
                />
              </div>
              <div className="md:col-span-8">
                <h2 className="text-2xl">{book.title}</h2>
                <div className="flex items-center gap-2 text-lg">
                  <UserPen />
                  {book.author}
                </div>
                <div className="text-xl font-bold">{book.price}</div>
                <div className="flex items-center gap-2 text-lg">
                  {book.availableStock}
                </div>
                <div className="flex items-center gap-2">
                  <Barcode />
                  {book.isbn}
                </div>
                <Button>Purchase</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Page;
