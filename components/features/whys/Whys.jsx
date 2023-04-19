// LIBRARIES //
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

// ACTIONS //
import { addNewWhy, deleteWhy, updateTrigger, updateWhyThisCustomer, updateWhys } from '../whys/whySlice';

export default function Whys() {
    const dispatch = useDispatch();
    const trigger = useSelector((state) => state.whys.trigger);
    const whyThisCustomer = useSelector((state) => state.whys.whyThisCustomer);
    const whys = useSelector((state) => state.whys.whys);

    function checkEmptyWhy(why) {
        return why.text === "";
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col style={{ maxWidth: "300px" }}>What triggered the problem?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateTrigger(e.target.value))} value={trigger} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col style={{ maxWidth: "300px" }}>Why only this customer and why now?</Col>
                    <Col>
                        <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateWhyThisCustomer(e.target.value))} value={whyThisCustomer} />
                    </Col>
                </Row>
            </Card.Body>
            {
                whys.map((why, index) => {
                    return (
                        <Card.Body key={index}>
                            <Row>
                                <Col style={{ maxWidth: "300px" }}>Why this issue occured? ({index + 1})</Col>
                                <Col>
                                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateWhys({ value: e.target.value, index: index }))} value={why.text} />
                                </Col>
                            </Row>
                        </Card.Body>
                    )
                })
            }
            <Card.Body>
                <Button md="auto" variant="secondary" disabled={whys.find(checkEmptyWhy) !== undefined} onClick={() => dispatch(addNewWhy())}>Why?</Button>
            </Card.Body >
        </Card >
    )
}