// LIBRARIES //
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// INTERNAL COMPONENTS //
import StepWizard from '../progress/StepWizard';
import Ticket from '../features/tickets/Ticket';
import Whys from '../features/whys/Whys';
import TakeAways from '../features/take-aways/TakeAways';

// ACTIONS //
import { setEDADate } from "./genericSlice";

// STORE //
import store from "../../store/store";

// CSS //
import styles from "./EDAWizard.module.scss";

// Create styles for PDF
const pdfStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        pageMode: 'fullScreen'
    },
    section: {
        margin: 10,
        padding: 100,
        flexGrow: 1
    }
});


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

    function generateEDAReport() {
        const state = store.getState();
        // Create Document Component
        const MyDocument = () => (
            <Document>
                <Page size="A4" style={pdfStyles.page}>
                    <View style={pdfStyles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={pdfStyles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        );

        const App = () => (
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
        );

        ReactDOM.render(<App />, document.getElementById('__next'));
    }

    return (
        <Container>
            <Row>
                <Col md="auto">Date</Col>
                <Col md="auto">
                    <ReactDatePicker selected={edaDate} onChange={(date) => dispatch(setEDADate(date))} />
                </Col>
                <Col md={{ offset: 7 }}>
                    <Button onClick={() => generateEDAReport()}>Generate EDA report</Button>
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