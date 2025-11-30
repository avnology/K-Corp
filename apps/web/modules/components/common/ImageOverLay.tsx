import * as React from "react";
import ImageOverlayTest from "@/public/img1.jpg";

const ImageOverlay: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <div className="w-full max-w-[1171px] mx-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="auto"
      fill="none"
      viewBox="0 0 1171 480"
      preserveAspectRatio="xMidYMid meet"
      className="max-h-[480px]"
      {...props}
    >
      <path
        fill="url(#a)"
        d="M0 0c188.135 16.466 407.454 25.912 641.627 25.912 188.864 0 368.063-6.145 529.033-17.16V477.28c-171.114-11.919-364.993-18.643-570.406-18.643-217.45 0-421.974 7.536-600.254 20.794z"
      ></path>
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#b"
            transform="matrix(.0012 0 0 .00348 -.222 -.528)"
          ></use>
        </pattern>
        <image
          xlinkHref={ImageOverlayTest.src}
          id="b"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  </div>
);

export default React.memo(ImageOverlay);
