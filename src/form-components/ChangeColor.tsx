import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [selected, setSelected] = useState<string>("red");
    function colorSelect(event: React.ChangeEvent<HTMLInputElement>) {
        setSelected(event.target.value);
    }
    return (
        <div>
            <Form>
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "red" }}
                    label="Red"
                    value="red"
                    name="colors"
                    checked={selected === "red"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "blue" }}
                    label="Blue"
                    value="blue"
                    name="colors"
                    checked={selected === "blue"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "green" }}
                    label="Green"
                    value="Green"
                    name="colors"
                    checked={selected === "Green"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "yellow" }}
                    label="Yellow"
                    value="yellow"
                    name="colors"
                    checked={selected === "yellow"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "orange" }}
                    label="Orange"
                    value="orange"
                    name="colors"
                    checked={selected === "orange"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "indigo" }}
                    label="Indigo"
                    value="indigo"
                    name="colors"
                    checked={selected === "indigo"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "violet" }}
                    label="Violet"
                    value="violet"
                    name="colors"
                    checked={selected === "violet"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
                <Form.Check
                    type="radio"
                    style={{ backgroundColor: "black" }}
                    label="Black"
                    value="black"
                    name="colors"
                    checked={selected === "black"}
                    onChange={(e) => {
                        colorSelect(e);
                    }}
                />
            </Form>
            <p data-testid="colored-box" style={{ backgroundColor: selected }}>
                you have chosen
                {selected}
            </p>
        </div>
    );
}
