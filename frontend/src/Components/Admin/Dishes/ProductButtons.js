import PopupDelete from "./PopupDelete";

import { useState } from "react";

const ProductButtons = ({ dish }) => {
  const [activePopup, setActivePopup] = useState(false);

  const handleClick = (valueState) => {
    setActivePopup(valueState);
  };

  const componentPopupDelete = activePopup ? (
    <PopupDelete
      id={dish.id}
      info="Usunięcie tego produktu spowoduje nieodwracalne zmiany."
      className="product "
      click={handleClick}
    />
  ) : null;

  return (
    <div className="buttons">
      <button className="edit button">Edycja</button>
      <button className="delete button" onClick={handleClick}>
        Usuń
      </button>
      {componentPopupDelete}
    </div>
  );
};

export default ProductButtons;
