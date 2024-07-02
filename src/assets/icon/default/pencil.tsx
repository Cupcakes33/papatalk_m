import React from "react";

import { iconColor } from "@/assets/config/iconColor";

interface Props {
  color?: keyof typeof iconColor;
  size?: { width: number; height: number };
}

const PencilIcon: React.FC<Props> = ({ color = "primary", size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size?.width || 20}
      height={size?.height || 20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.586 3.58598C13.7705 3.39496 13.9912 3.24259 14.2352 3.13778C14.4792 3.03296 14.7416 2.97779 15.0072 2.97548C15.2728 2.97317 15.5361 3.02377 15.7819 3.12434C16.0277 3.2249 16.251 3.3734 16.4388 3.56119C16.6266 3.74897 16.7751 3.97228 16.8756 4.21807C16.9762 4.46386 17.0268 4.72722 17.0245 4.99278C17.0222 5.25834 16.967 5.52078 16.8622 5.76479C16.7574 6.0088 16.605 6.22949 16.414 6.41398L15.621 7.20698L12.793 4.37898L13.586 3.58598ZM11.379 5.79298L3 14.172V17H5.828L14.208 8.62098L11.378 5.79298H11.379Z"
        fill={iconColor[color]}
      />
    </svg>
  );
};

export default PencilIcon;
