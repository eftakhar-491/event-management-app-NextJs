import React from "react";

export default function Container({ cssStyle, children }) {
  return <div className={`${cssStyle}`}>{children}</div>;
}
