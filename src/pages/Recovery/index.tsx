import { FC, useState } from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { RecoveryContainer, RecoveryContent } from "./style";
import GetCodeForm from "../../components/RecoveryForm/GetCodeForm";
import ValidateCodeForm from "../../components/RecoveryForm/ValidateCodeForm";
import SetPasswordForm from "../../components/RecoveryForm/SetPasswordForm";

const Recovery: FC = () => {
  const [recoveryStep, setRecoveryStep] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <RecoveryContainer>
      <Navbar />
      <RecoveryContent>
        {(() => {
          switch (recoveryStep) {
            case 0:
            default: {
              return (
                <GetCodeForm
                  nextStep={() => setRecoveryStep(1)}
                  prevStep={() => void 0}
                  setEmail={setEmail}
                />
              );
            }

            case 1: {
              return (
                <ValidateCodeForm
                  nextStep={() => setRecoveryStep(2)}
                  prevStep={() => setRecoveryStep(0)}
                  email={email}
                />
              );
            }

            case 2: {
              return <SetPasswordForm />;
            }
          }
        })()}
      </RecoveryContent>
      <Footer />
    </RecoveryContainer>
  );
};

export default Recovery;
