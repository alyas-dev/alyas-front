"use client";
import Step0 from "./components/step0";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import "../global.css";
import "./sign-up.css";
import { useSearchParams } from 'next/navigation';

export default function SignUp() {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || '0';

  const STEPS = {
    '0': Step0,
    '1': Step1,
    '2': Step2,
    '3': Step3,
  };

  const Step = STEPS[currentStep] || Step0;

  return (
    <>
      {currentStep == '0' && <Step0 />}
      {currentStep == '1' && <Step1 />}
      {currentStep == '2' && <Step2 />}
      {currentStep == '3' && <Step3 />}
    </>
  );
}
