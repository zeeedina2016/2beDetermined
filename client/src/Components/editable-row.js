import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Patient Id"
                name="patientid"
                value={editFormData.patientid}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Exam Id"
                name="examid"
                value={editFormData.examid}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Key findings Id"
                name="keyfindingsid"
                value={editFormData.keyfindingsid}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Brixia scores"
                name="brixiascores"
                value={editFormData.brixiascores}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Age"
                name="age"
                value={editFormData.age}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            <td>
            <input
                type="text"
                required="required"
                placeholder="Sex"
                name="sex"
                value={editFormData.sex}
                onChange={handleEditFormChange}   
                >           
                </input>
            </td>
           
            <td>
            <input
                type="text"
                required="required"
                placeholder="BMI"
                name="bmi"
                value={editFormData.bmi}
                onChange={handleEditFormChange}
                >
                </input>
            </td>
            
            <td>
            <input
                type="text"
                required="required"
                placeholder="Zipcode"
                name="zipcode"
                value={editFormData.zipcode}
                onChange={handleEditFormChange}
                >
                </input>
            </td>

            <td>
                <button type="submit">save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>

        </tr>
    );
};

export default EditableRow;