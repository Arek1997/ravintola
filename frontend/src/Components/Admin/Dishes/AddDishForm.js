import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDish } from "../../../actions/adminActions";

import AddDishMessage from "./AddDishMessage";

import { categoryOrder } from "../../Main/pages/Menu/Data";
import { currencies } from "../data/currenciesData";

import testSRC from "../../../img/king_prawns_640x966.jpg";

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
    handleAddDish();
  };

  const handleClick = () => {
    setSubmited(true);

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  const changeDetail = (name, e) => {
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSwitchRecommended = () => {
    setDetails({ ...details, recommended: !details.recommended });
  };

  const handleAddDish = () => {
    let newDish = {
      name: details.name,
      description: details.description,
      mealCategory: details.category,
      weight: details.weight,
      price: details.price,
      imageSrc: details.img,
      recommended: details.recommended,
    };
    dispatch(addDish(dishes, newDish));
  };

  const getSignCurrency = () => {
    let currency = currencies.find(
      (crr) => crr.nameCurrency === details.currency
    );
    return currency.signCurrency;
  };

  const handleInputPrice = (e) => {
    let signPrice = getSignCurrency();
    setDetails({
      ...details,
      price: details.price + e.target.value,
    });
    e.target.value = "";
  };

  let message =
    "Well done! You successfully read this important alert message.";

  return (
    <div className="box-form-add-dish">
      {!submited ? <Outlet /> : <AddDishMessage message={message} />}
      <div className="form-add-dish">
        <form onSubmit={handleSubmit}>
          <div className="main-form section-form">
            <div className="header">Formularz dodawania produktu</div>
            <div className="content-form">
              <label>
                Nazwa Produktu
                <input type="text" onInput={(e) => changeDetail("name", e)} />
              </label>
              <label>
                Wybierz Kategorie
                <select onChange={(e) => changeDetail("category", e)}>
                  {categoryOrder.map((ctg) => (
                    <option value={ctg.categoryName}>{ctg.polishTitle}</option>
                  ))}
                </select>
              </label>
              <label>
                Waluta
                <select onChange={(e) => changeDetail("currency", e)}>
                  {currencies.map((crr) => (
                    <option value={crr.nameCurrency}>{crr.nameCurrency}</option>
                  ))}
                </select>
              </label>
              <label>
                Gramatura
                <input
                  type="text"
                  onInput={(e) => changeDetail("gramature", e)}
                />
              </label>
              <label>
                Cena
                <input type="text" onInput={handleInputPrice} />
              </label>
              <label>
                Opis
                <textarea
                  placeholder="Wiadomość"
                  onInput={(e) => changeDetail("description", e)}
                ></textarea>
              </label>
              <label>
                Zdjęcie produktu
                <input
                  type="file"
                  placeholder="Dodaj zdjęcie..."
                  className="uploaded-image"
                  onChange={(e) => changeDetail("img", e)}
                />
              </label>
            </div>
          </div>
          <div className="second-form section-form">
            <div className="header">Produkt</div>
            <div className="image">
              <img src={process.env.NODE_ENV + testSRC} alt="added img" />
            </div>
            <div className="other-settings">
              <span>Rekomendacja</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={details.recommended}
                  onChange={handleSwitchRecommended}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="buttons">
              <button onClick={handleClick}>Dodaj produkt</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDishForm;
