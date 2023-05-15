// LIBRARIES //
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pdf } from '@react-pdf/renderer';

// INTERNAL COMPONENTS //
import StepWizard from '../progress/StepWizard';
import Ticket from '../features/tickets/Ticket';
import Whys from '../features/whys/Whys';
import TakeAways from '../features/take-aways/TakeAways';

// UTILS //
import { PDFDocument } from './pdfUtils';

// ACTIONS //
import { setEDADate } from "./genericSlice";

// STORE //
import store from "../../store/store";

// CSS //
import styles from "./EDAWizard.module.scss";

export default function EDAWizard() {
    const dispatch = useDispatch();
    const edaDate = useSelector((state) => new Date(state.generic.edaDate));
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

    const generateEDAReport = async () => {
        const state = store.getState();
        console.log("state = ", state);
        const pdfBlob = await pdf(<PDFDocument state={store.getState()} />).toBlob();
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'document.pdf';
        link.click();
    }

    return (
        <Container>
            <Row>
                <Col md="auto">Date</Col>
                <Col md="auto">
                    <ReactDatePicker selected={edaDate} onChange={(date) => dispatch(setEDADate(date))} />
                </Col>
                <Col md={{ offset: 7 }}>
                    <Button onClick={generateEDAReport}>Generate EDA report</Button>
                </Col>
            </Row>
            <Row className={styles.stepWizard}>
                <StepWizard steps={steps}
                    currentStep={currentStep}
                    onIncrementStep={() => setCurrentStep(currentStep + 1)}
                    onDecrementStep={() => setCurrentStep(currentStep - 1)} />
            </Row>
        </Container >
    )
}