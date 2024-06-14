"use client";
import { type FC } from "react";
import { toast } from "sonner";

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }: ButtonProps): JSX.Element => (
  <button
    onClick={() => {
      toast.success("clicked");
    }}
  >
    {text}
  </button>
);

export default Button;
