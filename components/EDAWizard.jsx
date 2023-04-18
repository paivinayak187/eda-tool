// LIBRARIES //
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';
import { useState } from 'react';

// INTERNAL COMPONENTS //
import StepWizard from '../components/progress/StepWizard';
import Ticket from './features/tickets/Ticket';
import Whys from './features/whys/Whys';
import TakeAways from './features/take-aways/TakeAways';

// CSS //
import styles from "./EDAWizard.module.scss"

export default function EDAWizard() {
    const [startDate, setStartDate] = useState(new Date());
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [{
        title: "What was this issue about?",
        component: <Ticket />
    }, {
        title: "What was the root cause?",
        component: <Whys />
    }, {
        title: "What are the main take aways?",
        component: <TakeAways />
    }];

    return (
        <div>
            <div className={styles.container}>
                <div>Date</div>
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <Button>Generate EDA report</Button>
            </div>
            <StepWizard steps={steps}
                currentStep={currentStep}
                onIncrementStep={() => setCurrentStep(currentStep + 1)}
                onDecrementStep={() => setCurrentStep(currentStep - 1)} />
        </div>
    )
}