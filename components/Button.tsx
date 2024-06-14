"use client";
import { type FC } from "react";
import { toast } from "sonner";

const Button: FC = (): JSX.Element => (
  <button
    onClick={() => {
      toast.success("clicked");
    }}
  >
    Sign In
  </button>
);

export default Button;
