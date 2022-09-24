import LocalizationMap from "../LocalizationMap";
import Input from "./Input";

import ReservationDataValidator from "../ReservationDataValidator";

import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";

function PersonalData({
  name,
  surname,
  email,
  phone,
  setFormState,
  focusIconStyle,
  blurIconStyle,
}) {
  const validator = new ReservationDataValidator(".form-reservation > form");

  return (
    <div>
      <div className="left">
        <h2>Dane osobowe</h2>{" "}
        <Input
          title="Imię"
          name="name"
          type="text"
          value={name}
          icon={<BsFillPersonFill />}
          setState={setFormState}
          focusIconStyle={focusIconStyle}
          blurIconStyle={blurIconStyle}
        />
        <Input
          title="Nazwisko"
          name="surname"
          type="text"
          value={surname}
          icon={<BsFillPersonFill />}
          setState={setFormState}
          focusIconStyle={focusIconStyle}
          blurIconStyle={blurIconStyle}
        />
        <Input
          title="Email"
          name="email"
          type="email"
          value={email}
          icon={<AiOutlineMail />}
          setState={setFormState}
          focusIconStyle={focusIconStyle}
          blurIconStyle={blurIconStyle}
        />
        <Input
          title="Numer telefonu"
          name="phone"
          type="tel"
          value={phone}
          icon={<GiSmartphone />}
          setState={setFormState}
          focusIconStyle={focusIconStyle}
          blurIconStyle={blurIconStyle}
          input={validator.typingNumberPhone}
        />
      </div>
      <LocalizationMap />
    </div>
  );
}

export default PersonalData;
