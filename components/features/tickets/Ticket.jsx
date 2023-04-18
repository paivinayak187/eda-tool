import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useDispatch, useSelector } from "react-redux";
import { updateTicketNumber, updateTicketTitle } from './ticketSlice';

export default function Ticket() {
    const dispatch = useDispatch();
    const ticketNumber = useSelector((state) => state.ticket.number);
    const ticketTitle = useSelector((state) => state.ticket.title);

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>OAM</InputGroup.Text>
            <Form.Control aria-label="Ticket number" onChange={(e) => dispatch(updateTicketNumber(e.target.value))} value={ticketNumber} />
            <Form.Control aria-label="Ticket title" onChange={(e) => dispatch(updateTicketTitle(e.target.value))} value={ticketTitle} />
        </InputGroup>
    )
}