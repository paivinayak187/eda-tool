import ProgressSteps from 'react-progress-steps';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './StepWizard.module.scss';

export default function StepWizard({ steps, currentStep, onIncrementStep, onDecrementStep }) {
    return (
        <Card className={styles.container}>
            <Card.Header>
                <ProgressSteps steps={steps.length} current={currentStep} />
            </Card.Header>
            <br />
            <Card.Body>
                <Card.Title>{steps[currentStep - 1].title}</Card.Title>
                <Card.Text>
                    {steps[currentStep - 1].component}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="secondary" disabled={currentStep === 1} onClick={onDecrementStep}>Previous</Button>
                <Button variant="primary" disabled={currentStep === steps.length} onClick={onIncrementStep}>Next</Button>
            </Card.Footer>
        </Card>
    )
}