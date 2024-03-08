import  { useState } from "react";
import { FaHeart } from "react-icons/fa";

const HeartToggle = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const iconColorClass = isRed ? "text-red-500" : "text-gray-500";

  return (
    <div className="flex justify-end">
      <FaHeart
        className={`w-6 h-6 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${iconColorClass}`}
        onClick={toggleColor}
      />
    </div>
  );
};

export default HeartToggle;