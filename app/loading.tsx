import { BookCardRowSkeleton } from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="h-[400px] w-full" />
      <section className="section">
        <BookCardRowSkeleton />
      </section>
    </>
  );
}
