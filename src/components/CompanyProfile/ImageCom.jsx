import Image from "next/image";
import React from "react";

export default function ImageCom({ cssStyle, src }) {
  return <img className={`${cssStyle}`} src={src} alt="hero" />;
}
