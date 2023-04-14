import StepWizard from '../components/progress/StepWizard';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import Ticket from '../components/Ticket';

import styles from "./EDAWizard.module.scss"

export default function EDAWizard() {
    const [startDate, setStartDate] = useState(new Date());
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [{
        title: "What was this issue about?",
        component: <Ticket />,
    }, {
        title: "What was the root cause?",
        component: () => {
            return (
                <div>Step 2</div>
            )
        },
    }, {
        title: "What are the main take aways?",
        component: () => {
            return (
                <div>Step 3</div>)
        },
    }];

    return (
        <div>
            <div className={styles.container}>
                <div>Date</div>
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <StepWizard steps={steps}
                currentStep={currentStep}
                onIncrementStep={() => setCurrentStep(currentStep + 1)}
                onDecrementStep={() => setCurrentStep(currentStep - 1)} />
        </div>
    )
}