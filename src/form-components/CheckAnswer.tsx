import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [rightwrong, setRightWrong] = useState<string>("❌");

    function textchangefunc(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value == expectedAnswer) {
            setRightWrong("✔️");
        } else {
            setRightWrong("❌");
        }
    }

    return (
        <div>
            <Form.Group>
                <Form.Control
                    type="text"
                    onChange={textchangefunc}
                ></Form.Control>
            </Form.Group>
            <p>{rightwrong}</p>
        </div>
    );
}
