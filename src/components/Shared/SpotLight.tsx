// "use client";
// import { FC } from "react";

// interface SpotLightProps {
//   position: {
//     top?: string; // Optional top position
//     left?: string; // Optional left position
//     right?: string; // Optional right position
//     bottom?: string; // Optional bottom position
//   };
// }

// const SpotLight: FC<SpotLightProps> = ({ position }) => {
//   return (
//     <div
//       className="fixed w-screen h-screen overflow-hidden"
//       style={{
//         top: position.top,
//         left: position.left,
//         right: position.right,
//         bottom: position.bottom,
//       }}
//     >
//       <div
//         className="w-80 h-80 bg-white/35 opacity-20 rounded-full blur-3xl pointer-events-none"
//         style={{
//           position: "absolute",
//           top: "50%", // Center the spotlight
//           left: "50%", // Center the spotlight
//           transform: "translate(-50%, -50%)", // Center the spotlight
//         }}
//       ></div>
//     </div>
//   );
// };

// export default SpotLight;
