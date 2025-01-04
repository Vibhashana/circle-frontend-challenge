import { BookCardRowSkeleton } from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="py-8">
      <section className="section">
        <div className="content-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Skeleton className="h-[600px] w-full rounded-xl" />
            </div>
            <div className="flex flex-col justify-center md:col-span-8">
              <Skeleton className="mb-4 h-9 w-1/2" />
              <Skeleton className="mb-8 h-4 w-1/4" />

              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-1/5" />
              </div>
              <div className="mb-8 flex items-center gap-2">
                <Skeleton className="size-4 rounded-full" />
                <Skeleton className="h-4 w-1/4" />
              </div>

              <Skeleton className="mb-4 h-10 w-28" />
              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
                <Skeleton className="h-11 w-1/5" />
                <Skeleton className="h-11 w-1/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookCardRowSkeleton />
    </div>
  );
};

export default Loading;
