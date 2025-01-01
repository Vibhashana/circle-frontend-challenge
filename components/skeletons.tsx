import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const BookCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="h-[200] p-0">
        <Skeleton className="h-full w-full rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 mt-6 h-6 w-1/2" />
        <Skeleton className="mb-2 h-4 w-1/4" />
        <Skeleton className="mb-2 h-4 w-1/3" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-1/2" />
      </CardFooter>
    </Card>
  );
};

export const BookCardRowSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
    </div>
  );
};
