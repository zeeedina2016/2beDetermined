import { useEffect, useState } from "react"

// components
import MedRecordDetails from "../components/MedRecordDetails"

const Home = () => {
  const [MedRecords, setMedRecords] = useState(null)

  useEffect(() => {
    const fetchMedRecords = async () => {
      const response = await fetch('/medrecords')
      const json = await response.json()

      if (response.ok) {
        setMedRecords(json)
      }
    }

    fetchMedRecords()
  }, [])

  return (
    <div className="home">
      <div className="MedRecords">
        {MedRecords && MedRecords.map(MedRecord => (
          <MedRecordDetails MedRecord={MedRecord} key={MedRecord._id} />
        ))}
      </div>
    </div>
  )
}

export default Home