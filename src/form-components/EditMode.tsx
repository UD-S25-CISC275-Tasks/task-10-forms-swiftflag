import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false); // Controls edit mode (switch)
    const [name, setName] = useState<string>("Your Name"); // Stores user’s name
    const [isStudent, setIsStudent] = useState<boolean>(true); // Stores student status
    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateisStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
            />
            {editMode ?
                <>
                    <Form.Control
                        value={name}
                        onChange={updateStudentName}
                    ></Form.Control>

                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        aria-label="Student"
                        onChange={updateisStudent}
                        checked={isStudent}
                    ></Form.Check>
                </>
            :   ""}
            <p>
                {name} {isStudent ? "is a student" : "is not a student"}
            </p>
        </div>
    );
}
