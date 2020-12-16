import React from "react";
import iconsSprite from "url:../../assets/icons/sprite.svg";

const Icon = ({ type, ...rest }) => {
  return (
    <svg {...rest}>
      <use href={`${iconsSprite}#${type}`} />
    </svg>
  );
};

export default Icon;
