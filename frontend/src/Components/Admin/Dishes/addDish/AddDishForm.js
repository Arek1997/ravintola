import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDish } from "../../../../actions/adminActions";

import AddDishMessage from "./AddDishMessage";
import DetailsForm from "./DetailsForm";

import { categoryOrder } from "../../../Main/pages/Menu/Data";
import { currencies } from "../../data/currenciesData";
import OtherSettingsForm from "./OtherSettingsForm";

const AddDishForm = () => {
  const [details, setDetails] = useState({
    name: "",
    category: categoryOrder[0].categoryName,
    currency: currencies[0].nameCurrency,
    gramature: "",
    price: "",
    description: "",
    img: "",
    recommended: false,
  });
  const [submited, setSubmited] = useState(false);
  const { dishes } = useSelector((state) => state.admin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    handleAddDish();
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  const changeDetail = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleAddDish = () => {
    let boolRecommended = details.recommended === "true" ? true : false;

    let newDish = {
      name: details.name,
      description: details.description,
      mealCategory: details.category,
      weight: details.weight,
      price: details.price,
      imageSrc: details.img,
      isRecommended: boolRecommended,
    };
    dispatch(addDish(dishes, newDish));
  };

  const handleFiles = (e) => {
    let fileImage = e.target.files[0];
    let urlImage = URL.createObjectURL(fileImage);
    setDetails({ ...details, [e.target.name]: urlImage });
  };

  const MessageSuccess = !submited ? <Outlet /> : <AddDishMessage />;

  return (
    <div className="box-form-add-dish">
      {MessageSuccess}
      <div className="form-add-dish">
        <form onSubmit={handleSubmit} autocomplete="off">
          <DetailsForm
            changeDetail={changeDetail}
            handleFiles={handleFiles}
            currency={details.currency}
          />
          <OtherSettingsForm
            changeDetail={changeDetail}
            uploadedImg={details.img}
          />
        </form>
      </div>
    </div>
  );
};

export default AddDishForm;
