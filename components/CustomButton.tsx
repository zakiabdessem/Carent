"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CustomButtonProps } from "../types/index";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
  href,
}: CustomButtonProps) => {
  const router = useRouter();

  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={
        href
          ? (e) => {
              /* Go to specific page */
              e.preventDefault();
              router.push(`/${href}`);
            }
          : handleClick
      }>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;