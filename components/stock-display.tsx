import clsx from "clsx";
import { LibraryBig } from "lucide-react";

const StockDisplay = ({
  availableStock,
  className,
}: {
  availableStock: number;
  className?: string;
}) => {
  if (availableStock === 0) {
    return (
      <p className="text-sm text-red-700 dark:text-red-400">Out of stock!</p>
    );
  }

  return (
    <>
      {availableStock > 0 && availableStock <= 5 ? (
        <p
          className={clsx("text-sm text-red-700 dark:text-red-400", className)}
        >
          {availableStock === 1
            ? "The last one"
            : `Only ${availableStock} left`}{" "}
          in stock!
        </p>
      ) : (
        <p
          className={clsx(
            "flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-400",
            className
          )}
        >
          <LibraryBig size={16} />
          {availableStock} in stock
        </p>
      )}
    </>
  );
};

export default StockDisplay;
