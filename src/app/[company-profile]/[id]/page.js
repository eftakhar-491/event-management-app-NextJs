import React from "react";

export default async function page(context) {
  console.log(await context.params);
  return <div className="mt-16"> id</div>;
}
