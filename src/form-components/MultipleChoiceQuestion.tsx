import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setselectedAnswer] = useState<string>();
    return (
        <Form>
            <Form.Label>Pick an option</Form.Label>
            <Form.Select
                onChange={(e) => {
                    setselectedAnswer(e.target.value);
                }}
            >
                {options.map((Option) => (
                    <option key={Option} value={Option}>
                        {Option}
                    </option>
                ))}
            </Form.Select>
            <p>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </Form>
    );
}
