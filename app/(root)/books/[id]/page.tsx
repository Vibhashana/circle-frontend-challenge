import { Book } from "@/types/book-types";
import PurchaseBook from "@/components/purchase-book";
import QuantityInput from "@/components/quantity-input";
import StockDisplay from "@/components/stock-display";
import { fetchBook } from "@/lib/actions";
import { Barcode, UserPen } from "lucide-react";
import Image from "next/image";
import RelatedBooks from "@/components/related-books";
import { Suspense } from "react";
import { BookCardRowSkeleton } from "@/components/skeletons";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const book: Book = await fetchBook(id);

  return (
    <>
      <section className="section">
        <div className="content-container">
          <h1 className="section-title">Books</h1>
          {book && (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <Image
                    src="https://picsum.photos/400/600"
                    alt="Book cover"
                    width={400}
                    height={600}
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-8">
                  <h2 className="mb-4 text-3xl font-medium">{book.title}</h2>
                  <div className="space-y-2">
                    <div className="mb-8 flex items-center gap-2 text-lg">
                      <UserPen />
                      {book.author}
                    </div>
                    <div>
                      <StockDisplay availableStock={book.availableStock || 0} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Barcode /> ISBN: {book.isbn}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span>$</span>
                    <span className="text-xl font-bold">{book.price}</span>
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                    <QuantityInput
                      max={book.availableStock || 1}
                      disabled={book.availableStock === 0}
                    />
                    <PurchaseBook
                      id={id}
                      className="w-full sm:w-auto"
                      disabled={book.availableStock === 0}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Suspense fallback={<BookCardRowSkeleton />}>
        <RelatedBooks author={book.author} currentBookId={book.id} />
      </Suspense>
    </>
  );
};

export default Page;
