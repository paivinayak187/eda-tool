// LIBRARIES //
import ProgressSteps from 'react-progress-steps';
import { Button, Card } from 'react-bootstrap';

// CSS //
import styles from './StepWizard.module.scss';

export default function StepWizard({ steps, currentStep, onIncrementStep, onDecrementStep }) {
    return (
        <Card>
            <Card.Header>
                <ProgressSteps steps={steps.length} current={currentStep} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{steps[currentStep - 1].title}</Card.Title>
                <div>
                    {steps[currentStep - 1].component}
                </div>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>
                <Button variant="secondary" disabled={currentStep === 1} onClick={onDecrementStep}>Previous</Button>
                <Button className={styles.button2} variant="secondary" disabled={currentStep === steps.length} onClick={onIncrementStep}>Next</Button>
            </Card.Footer>
        </Card>
    )
}