import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function setrequestfunc(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(parseInt(event.target.value));
    }
    function addAttempts() {
        setAttempts(attempts + request);
    }
    function useAttempts() {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    onChange={setrequestfunc}
                ></Form.Control>
            </Form.Group>
            <Button onClick={addAttempts}>gain</Button>
            <p>{attempts}</p>
            <Button disabled={attempts <= 0} onClick={useAttempts}>
                Use attempt
            </Button>
        </div>
    );
}
