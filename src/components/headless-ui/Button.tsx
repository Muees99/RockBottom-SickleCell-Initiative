import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import cn from "@/app/utils/twcx";
const buttonVariants = cva(
  "relative px-4 py-3 flex items-center justify-center gap-5 w-fit h-[48px] rounded-[16px] font-manropeB text-white-100",
  {
    variants: {
      intent: {
        primary:
          "bg-primary hover:bg-primary-light hover  text-white active:bg-primary disabled:bg-disabled disabled:cursor-not-allowed ",
        secondary:
          "bg-primary-light text-white hover:bg-white  active:bg-priamry-light disabled:bg-disabled border-solid border-[2px] border-primary-light hover:text-primary-light ",
        success:
          "bg-success hover:bg-success-hover text-white focus:bg-success  disabled:bg-disabled disabled:cursor-not-allowed ",
        error:
          "bg-error text-white-100 hover:bg-error active:bg-error disabled:bg-disabled disabled:cursor-not-allowed",
      },
      size: {
        sm: "text-sm py-2",
        md: "text-base py-3",
        lg: "text-lg py-4",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);
export interface ButtonVariants
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}
export interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: string | number;
  variant?: "primary" | "outline";
}
const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  className,
  href,
  spinnerColor,
  spinnerSize,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = "primary",
  ...props
}) => {
  const classNames = twMerge(buttonVariants(props), className);
  if (href) {
    return (
      // @ts-expect-error ....
      <Link href={href} className={classNames} {...props}>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </Link>
    );
  }
  return (
    <button
      disabled={(isLoading ?? disabled) || disabled}
      className={cn(`disabled:opacity-50`, classNames)}
      {...props}
    >
      <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center">
        <svg
          width={spinnerSize ?? "20"}
          height={spinnerSize ?? "20"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            " animate-spin transition delay-[0.2s] ",
            isLoading ? "opacity-1 visible" : "opacity-0 hidden"
          )}
        >
          <path
            fill={spinnerColor ?? "#fff"}
            d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
          />
        </svg>
      </div>
      <div
        className={twMerge(
          "flex items-center justify-center gap-2",
          isLoading ? "opacity-0" : "opacity-1"
        )}
      >
        {leftIcon}
        {children}
        {rightIcon && (
          <span
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </button>
  );
};
export default Button;
