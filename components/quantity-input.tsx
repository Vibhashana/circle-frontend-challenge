import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "./ui/input";

const QuantityInput = ({
  max,
  disabled,
}: {
  max: number;
  disabled?: boolean;
}) => {
  return (
    <div className="flex w-full sm:w-auto">
      <Button
        variant="outline"
        className="w-6 rounded-br-none rounded-tr-none border-r-0"
        disabled={disabled}
        size="lg"
      >
        <Minus />
      </Button>
      <Input
        type="number"
        className="h-[44] min-w-[30] flex-1 rounded-none text-center"
        min={1}
        defaultValue={1}
        max={max}
        disabled={disabled}
      />
      <Button
        variant="outline"
        className="w-6 rounded-bl-none rounded-tl-none border-l-0"
        disabled={disabled}
        size="lg"
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityInput;
