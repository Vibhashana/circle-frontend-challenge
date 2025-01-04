import clsx from "clsx";
import { BookText, BookX, LibraryBig } from "lucide-react";

const StockDisplay = ({
  availableStock,
  className,
}: {
  availableStock: number;
  className?: string;
}) => {
  if (availableStock === 0) {
    return (
      <p
        className={clsx(
          "flex items-center gap-1 text-sm text-red-700 dark:text-red-400",
          className
        )}
      >
        <BookX size={16} />
        <span>Out of stock!</span>
      </p>
    );
  }

  return (
    <>
      {availableStock > 0 && availableStock <= 5 ? (
        <p
          className={clsx(
            "flex items-center gap-1 text-sm text-red-700 dark:text-red-400",
            className
          )}
        >
          <BookText size={16} />
          {availableStock === 1
            ? "The last one"
            : `Only ${availableStock} left`}{" "}
          in stock!
        </p>
      ) : (
        <p
          className={clsx(
            "flex items-center gap-1 text-sm text-neutral-800 dark:text-neutral-400",
            className
          )}
        >
          <LibraryBig size={16} />
          <span>{availableStock} in stock</span>
        </p>
      )}
    </>
  );
};

export default StockDisplay;
