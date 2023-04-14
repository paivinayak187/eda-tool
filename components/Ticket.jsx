import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Ticket() {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>OAM</InputGroup.Text>
            <Form.Control aria-label="Ticket number" />
            <Form.Control aria-label="Ticket title" />
        </InputGroup>
    )
}