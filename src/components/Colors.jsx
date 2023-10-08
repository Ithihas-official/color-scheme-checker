import React from "react";
import { HexColorPicker } from "react-colorful";
import "./../scss/colorPicker.scss";
const Colors = (props) => {
  const {
    backgroundColor1,
    backgroundColor2,
    accentColor1,
    accentColor2,
    textColor1,
    textColor2,
  } = props;
  return (
    <section className="w-[100%] grid grid-cols-2 sm:grid-cols-3 py-4 bg-white text-black text-sm md:text-xl font-light capitalize text-center">
      <div className="responsive p-8">
        <h3>background color 1</h3>
        <HexColorPicker onChange={(color) => backgroundColor1(color)} />
      </div>
      <div className="responsive p-8">
        <h3>accent color 1</h3>
        <HexColorPicker onChange={(color) => accentColor1(color)} />
      </div>
      <div className="responsive p-8">
        <h3>text color 1</h3>
        <HexColorPicker onChange={(color) => textColor1(color)} />
      </div>
      <div className="responsive p-8">
        <h3>background color 2</h3>
        <HexColorPicker onChange={(color) => backgroundColor2(color)} />
      </div>
      <div className="responsive p-8">
        <h3>accent color 2</h3>
        <HexColorPicker onChange={(color) => accentColor2(color)} />
      </div>
      <div className="responsive p-8">
        <h3>text color 2</h3>
        <HexColorPicker onChange={(color) => textColor2(color)} />
      </div>
    </section>
  );
};

export default Colors;
