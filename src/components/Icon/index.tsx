import React from "react";
import iconsSprite from "url:../../assets/icons/sprite.svg";

const Icon = ({ id, ...rest }) => {
  return (
    <svg {...rest}>
      <use href={`${iconsSprite}#${id}`} />
    </svg>
  );
};

export default Icon;
