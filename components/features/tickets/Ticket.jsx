// LIBRARIES //
import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

// ACTIONS //
import { updateTicketNumber, updateTicketTitle, updateTicketDescription } from './ticketSlice';

// CSS //
import styles from './Ticket.module.scss';

export default function Ticket() {
    const dispatch = useDispatch();
    const ticketNumber = useSelector((state) => state.ticket.number);
    const ticketTitle = useSelector((state) => state.ticket.title);
    const ticketDescription = useSelector((state) => state.ticket.description);

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control className={styles.ticketNumber} placeholder="Ticket number" onChange={(e) => dispatch(updateTicketNumber(e.target.value))} value={ticketNumber} />
                <Form.Control placeholder="Ticket title" onChange={(e) => dispatch(updateTicketTitle(e.target.value))} value={ticketTitle} />
            </InputGroup>
            <Form.Control placeholder="Ticket description" as="textarea" rows={3} onChange={(e) => dispatch(updateTicketDescription(e.target.value))} value={ticketDescription} />
        </>
    )
}