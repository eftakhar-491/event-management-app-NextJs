import React from "react";

export default function Button({ cssStyle, children }) {
  return <button className={`${cssStyle}`}>{children}</button>;
}
