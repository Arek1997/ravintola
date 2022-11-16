import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { modifyDish } from "../../../actions/adminActions";

import DescriptionDish from "./DescriptionDish";
import EditDescriptionDish from "./EditDescriptionDish";

import { BiExit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsCheckSquareFill } from "react-icons/bs";

const ProductMore = ({ dish, goToBack }) => {
  const { description } = dish;
  const [action, setAction] = useState(false);
  const [descp, setDescp] = useState(description);
  const btnRef = useRef();

  const dispatch = useDispatch();

  const handleClick = () => {
    btnRef.current.classList.add("clicked");
    goToBack();
  };

  const handleEditDescription = (dishModified) => {
    if (description === dishModified.description) return;
    setDescp(dishModified.description);
    dispatch(modifyDish(dishModified));
  };

  const descriptionDish = description ? (
    action ? (
      <EditDescriptionDish
        dish={dish}
        icon={<BsCheckSquareFill />}
        description={descp}
        setAction={setAction}
        editDescription={handleEditDescription}
      />
    ) : (
      <DescriptionDish
        icon={<AiTwotoneEdit />}
        description={descp}
        setAction={setAction}
      />
    )
  ) : action ? (
    <EditDescriptionDish
      dish={dish}
      icon={<BsCheckSquareFill />}
      description="dodaj opis"
      setAction={setAction}
      editDescription={handleEditDescription}
    />
  ) : (
    <DescriptionDish
      icon={<IoIosAddCircle />}
      description="dodaj opis"
      setAction={setAction}
    />
  );

  return (
    <div className="dish-more-info">
      <div className="header">Opis</div>
      <div className="description">{descriptionDish}</div>
      <div className="button" ref={btnRef}>
        <span onClick={handleClick}>
          <BiExit />
          Cofnij
        </span>
      </div>
    </div>
  );
};

export default ProductMore;
