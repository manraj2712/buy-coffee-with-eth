import { useState } from "react";

const SelectCoffeeSize = ({onSizeChange} : {onSizeChange: (size:number)=>void}) => {
  const [selectedSize, setSelectedSize] = useState(1);
  return (
    <div
      style={{ borderWidth: "1px" }}
      className="flex gap-3 items-center justify-center mt-5 bg-orange-500 rounded-md border-orange-500 bg-opacity-10 p-4"
    >
      <img src="/coffee.png" className="h-12 w-10"></img>
      <p className="text-lg text-gray-400 font-semibold px-2">X</p>
      {availableSizes.map((size) => (
        <CoffeeSize
          key={size}
          size={size}
          isSelected={selectedSize === size}
          onClick={() => {
            setSelectedSize(size);
            onSizeChange(size);
          }}
        />
      ))}
    </div>
  );
};

export default SelectCoffeeSize;

const CoffeeSize = ({
  size,
  isSelected,
  onClick,
}: {
  size: number;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex justify-center items-center h-10 w-10 rounded-full cursor-pointer ${
        isSelected ? "bg-orange-500" : "bg-white"
      } border-orange-500"`}
      onClick={onClick}
    >
      <p
        className={`font-bold text-lg ${
          isSelected ? "text-white" : "text-orange-500"
        }`}
      >
        {size}
      </p>
    </div>
  );
};

const availableSizes = [1, 2, 3];
