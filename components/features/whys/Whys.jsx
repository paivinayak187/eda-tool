import { Card, Form, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { addNewWhy, updateTrigger, updateWhyThisCustomer, updateWhys } from '../whys/whySlice';

export default function Whys() {
    const dispatch = useDispatch();
    const trigger = useSelector((state) => state.whys.trigger);
    const whyThisCustomer = useSelector((state) => state.whys.whyThisCustomer);
    const whys = useSelector((state) => state.whys.whys);

    return (
        <Card>
            <Card.Body>
                <Card.Text>What triggered the problem?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateTrigger(e.target.value))} value={trigger} />
                </Form.Group>
            </Card.Body>
            <Card.Body>
                <Card.Text>Why only this customer and why now?</Card.Text>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateWhyThisCustomer(e.target.value))} value={whyThisCustomer} />
                </Form.Group>
            </Card.Body>
            {whys.map((why, index) => {
                return (
                    <Card.Body key={index}>
                        <Card.Text>Why this issue occured? {index + 1}</Card.Text>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" onChange={(e) => dispatch(updateWhys({ value: e.target.value, index: index }))} value={why.text} />
                        </Form.Group>
                    </Card.Body>
                )
            })}
            <Button onClick={() => dispatch(addNewWhy())}>Why?</Button>
        </Card>
    )
}