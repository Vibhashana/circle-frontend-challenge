"use client";

import React from "react";
import { Button } from "./ui/button";
import { BookCheck, BookX, LoaderCircle, ShoppingBasket } from "lucide-react";
import { useTransition } from "react";
import { purchaseBook } from "@/lib/actions";
import { clsx } from "clsx";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const PurchaseBook = ({
  id,
  className,
  disabled,
}: {
  id: number | string;
  className?: string;
  disabled?: boolean;
}) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handlePurchase = async () => {
    startTransition(async () => {
      try {
        await purchaseBook(id);

        // Show success toast
        toast({
          description: (
            <div className="flex items-center gap-2">
              <BookCheck /> <span>Book purchased successfully!</span>
            </div>
          ),
          variant: "default",
        });

        router.refresh();
      } catch (error) {
        // Show error toast with the error message
        toast({
          description: (
            <div className="flex items-center gap-2">
              <BookX />
              <span>
                {error instanceof Error
                  ? error.message
                  : "Failed to purchase book"}
              </span>
            </div>
          ),
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Button
      className={clsx(
        "relative overflow-hidden bg-blue-600 px-8 hover:bg-blue-800 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:hover:bg-blue-600 dark:text-primary",
        className
      )}
      size="lg"
      onClick={handlePurchase}
      disabled={disabled || isPending}
    >
      <span
        className={clsx(
          !isPending && "-translate-y-8",
          "w-100 absolute text-center transition-transform"
        )}
      >
        <LoaderCircle className="animate-spin" />
      </span>

      <span
        className={clsx(
          isPending && "translate-y-8",
          "flex items-center gap-2 transition-transform"
        )}
      >
        <ShoppingBasket />
        <span>Buy now</span>
      </span>
    </Button>
  );
};

export default PurchaseBook;
