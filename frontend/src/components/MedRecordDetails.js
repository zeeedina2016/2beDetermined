const MedRecordDetails = ({ MedRecord }) => {
  var image = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/"
  return (
    <div className="MedRecord-details">
      <h4>{MedRecord.title}</h4>
      <p><strong>Patient ID </strong>{MedRecord.Patient_ID}</p>
      <p><strong>Age </strong>{MedRecord.Age}</p>
      <p><strong>Sex </strong>{MedRecord.Sex}</p>
      <p><strong>Zip </strong>{MedRecord.Zip}</p>
      <p><strong>BMI </strong>{MedRecord.Latest_BMI}</p>
      <p><strong>Weight </strong>{MedRecord.Latest_Weight}</p>
      <p><strong>Zip </strong>{MedRecord.Zip}</p>
      <img src={image+MedRecord.Png_Filename}alt="new"/>
      <p>{MedRecord.createdAt}</p>
    </div>
  )
}

export default MedRecordDetails