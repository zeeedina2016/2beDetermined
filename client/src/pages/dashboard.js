import { useEffect, useState } from "react"

// components
import MedRecordDetails from "../Components/MedRecordDetails"
import Search from "../Components/search"

const Exams = () => {
  const [MedRecords, setMedRecords] = useState(null)

  useEffect(() => {
    const fetchMedRecords = async () => {
      const response = await fetch('https://atmedrecordsbackend.onrender.com/medrecords')
      const json = await response.json()

      if (response.ok) {
        setMedRecords(json)
      }
    }

    fetchMedRecords()
  }, [])

  return (
    <div className="exams">
            <div>
            <Search placeholder="Search here..."/>
            </div>
      <div className="MedRecords">
      <tr>
        <th>Patient ID</th>
        <th>Exam ID</th>
        <th>Image</th>
        <th>Key Findings</th>
        <th>Age</th>
        <th>Sex</th>
        <th>bmi</th>
        <th>Zip Code</th>
      </tr>
        {MedRecords && MedRecords.map(MedRecord => (
          <MedRecordDetails MedRecord={MedRecord} key={MedRecord._id} />
        ))}
      </div>
    </div>
  )
}

export default Exams