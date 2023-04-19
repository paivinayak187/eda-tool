// LIBRARIES //
import { Card, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS //
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
                <Row>
                    <Col style={{ maxWidth: "300px" }}>What was the fix?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateFix(e.target.value))} value={fix} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col style={{ maxWidth: "300px" }}>In what phase we should have caught it?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updatePhase(e.target.value))} value={phase} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col style={{ maxWidth: "300px" }}>How do we ensure that such bugs don't happen in future?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateFutureBugs(e.target.value))} value={futureBugs} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col style={{ maxWidth: "300px" }}>How do we ensure that all such bugs are addressed?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateAllBugsAddressed(e.target.value))} value={allBugsAddressed} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}