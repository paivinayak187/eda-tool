import { Card, Form } from "react-bootstrap";

import { useDispatch, useSelector } from 'react-redux';
import { updateFix, updatePhase, updateFutureBugs, updateAllBugsAddressed } from '../take-aways/takeAwaySlice';

export default function TakeAways() {
    const dispatch = useDispatch();
    const fix = useSelector((state) => state.takeAways.fix);
    const phase = useSelector((state) => state.takeAways.phase);
    const futureBugs = useSelector((state) => state.takeAways.futureBugs);
    const allBugsAddressed = useSelector((state) => state.takeAways.allBugsAddressed);

    return (
        <Card>
            <Card.Body>
                <Card.Text>What was the fix?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateFix(e.target.value))} value={fix} />
                </Form.Group>
            </Card.Body>
            <Card.Body>
                <Card.Text>In what phase we should have caught it?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updatePhase(e.target.value))} value={phase} />
                </Form.Group>
            </Card.Body>
            <Card.Body>
                <Card.Text>How do we ensure that such bugs don't happen in future?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateFutureBugs(e.target.value))} value={futureBugs} />
                </Form.Group>
            </Card.Body>
            <Card.Body>
                <Card.Text>How do we ensure that all such bugs are addressed?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateAllBugsAddressed(e.target.value))} value={allBugsAddressed} />
                </Form.Group>
            </Card.Body>
        </Card>
    )
}