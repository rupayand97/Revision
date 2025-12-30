import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Preferences from "./components/Preferences";
import Review from "./components/Review";

const INITIAL_DATA = {
  name: "",
  email: "",
  username: "",
  password: "",
  theme: "",
  notifications: false
};

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const renderStep = () => {
    const commonProps = {
      data: formData,
      setData: setFormData,
      next,
      back
    };

    switch (step) {
      case 1:
        return <PersonalInfo {...commonProps} />;
      case 2:
        return <AccountDetails {...commonProps} />;
      case 3:
        return <Preferences {...commonProps} />;
      case 4:
        return <Review data={formData} back={back} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h2>Multi Step Form</h2>
      <ProgressBar step={step} />
      {renderStep()}
    </div>
  );
};

export default App;
