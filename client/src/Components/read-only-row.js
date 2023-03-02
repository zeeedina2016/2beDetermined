import React from "react";

const ReadOnlyRow = ({patient, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{patient.patientid}.</td>
            <td>{patient.examid}</td>
            <td>{patient.keyfindingsid}</td>
            <td>{patient.brixiascores}</td>
            <td>{patient.age}</td>
            <td>{patient.sex}</td>
            <td>{patient.bmi}</td>
            <td>{patient.zipcode}</td>
            <td>
                <button type="button" 
                onClick={(event)=> handleEditClick(event, patient)}
                > 
                Edit  
                </button>

                <button type="button" onClick={()=> handleDeleteClick(patient.id)}>Delete</button>

            </td>
        </tr>
    );
};

export default ReadOnlyRow