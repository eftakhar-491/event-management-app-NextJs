import React from "react";

export default function Paragraph({ cssStyle, children }) {
  return <p className={`${cssStyle}`}>{children}</p>;
}
