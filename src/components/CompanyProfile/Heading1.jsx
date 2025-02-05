import React from "react";

export default function Heading1({ cssStyle, children }) {
  return <h1 className={`${cssStyle}`}>{children}</h1>;
}
