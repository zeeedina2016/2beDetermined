const MedRecordDetails = ({ MedRecord }) => {
  var image = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/"
  return (
    <div className="MedRecord-details">
      <table>
      
      <tr>
        <td>{MedRecord.Patient_ID}</td>
        <td>{MedRecord.Exam_id}</td>
        <td><img src={image+MedRecord.Png_Filename}alt="new"/></td>
        <td>{MedRecord.Age}</td>
        <td>{MedRecord.Sex}</td>
        <td>{MedRecord.Latest_BMI}</td>
        <td>{MedRecord.Zip}</td> 
      </tr>
      
    </table>
    </div>
  
  )
}

export default MedRecordDetails