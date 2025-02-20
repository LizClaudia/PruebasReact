import React from "react";
interface ButtonProps {
  onclick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonComponent({ onclick =()=>{}}: ButtonProps) {
  return (
    <button className="App-buttonAdd" onClick={(e) => onclick ? onclick(e) : undefined}>
      +
    </button>
  );
}
