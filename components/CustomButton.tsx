'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title,containerStyle,handleClick,btnType='button'}:CustomButtonProps) => {
  return (
      <button
          disabled={false}
          type={btnType}
          className={`custom-btn ${containerStyle}`}
          onClick={handleClick}
      >
          {/* <Image/> */}
          <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton