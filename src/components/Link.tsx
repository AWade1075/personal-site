import React from "react";

type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  children: React.ReactNode;
};

export const Link = ({ className = "", ...props }: LinkProps) => {
  return (
    <a
      className={`hover:text-col-primary underline font-bold ${className}`}
      {...props}
    >
      {props.children}
    </a>
  );
};
