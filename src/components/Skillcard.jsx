import React from "react";

const Skillcard = (props) => {
  const { title, icon, text, accentColor2 } = props;
  return (
    <article>
      <span style={{ color: `${accentColor2}` }}>{icon}</span>
      <h1 className="mt-6 font-bold text-xl">{title}</h1>
      <p className="mt-4 font-light text-lg tracking-wide">{text}</p>
    </article>
  );
};

export default Skillcard;
