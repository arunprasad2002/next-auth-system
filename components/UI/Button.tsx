import React from "react";
import Link from "next/link";

interface AuthButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, link, onClick }: AuthButtonProps) => {
  return (
    <Link
      href={link!}
      className="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default Button;
