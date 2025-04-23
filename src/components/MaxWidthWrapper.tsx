import cn from "@/app/utils/twcx";
import React, { FC, ReactNode } from "react";

const MaxWidthWrapper: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(`w-[95%] lg:w-[90%] 2xl:w-[80%] h-full mx-auto`, className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
