import PurchaseBook from "@/components/purchase-book";
import QuantityInput from "@/components/quantity-input";
import StockDisplay from "@/components/stock-display";
import { fetchBookById } from "@/lib/actions";
import { Barcode, BookDashed, UserPen } from "lucide-react";
import Image from "next/image";
import RelatedBooks from "@/components/related-books";
import { Suspense } from "react";
import { BookCardRowSkeleton } from "@/components/skeletons";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const book = await fetchBookById(id);

  return (
    <>
      <section className="section">
        <div className="content-container">
          {book ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <Image
                    src="https://picsum.photos/395/592"
                    alt="Book cover"
                    width={395}
                    height={592}
                    className="w-full rounded-xl"
                    sizes="(min-width: 1360px) 395px, (min-width: 780px) 29.82vw, calc(100vw - 32px)"
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-8">
                  <h2 className="mb-2 text-3xl font-medium">{book.title}</h2>
                  <div className="mb-8 flex items-center gap-2">
                    <UserPen size={16} />
                    {book.author}
                  </div>

                  <div className="space-y-4">
                    <StockDisplay availableStock={book.availableStock || 0} />
                    <div className="flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-400">
                      <Barcode size={16} /> ISBN: {book.isbn}
                    </div>
                  </div>
                  <div className="mt-10">
                    <span>$</span>
                    <span className="text-3xl font-bold">{book.price}</span>
                  </div>
                  <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
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
          ) : (
            <div className="col-span-4 mx-auto flex items-center justify-center gap-4">
              <BookDashed className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
              <p>Sorry, this book cannot be found.</p>
            </div>
          )}
        </div>
      </section>

      <Suspense key={book?.id} fallback={<BookCardRowSkeleton />}>
        <RelatedBooks author={book?.author} currentBookId={book?.id} />
      </Suspense>
    </>
  );
};

export default Page;
