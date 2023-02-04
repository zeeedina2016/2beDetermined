import { useEffect,useState } from "react";

const Home = () => {
    cosnt [med-records,setMedRecords] = useState(null)
    useEffect(() =>{
        const fetchMedRecords = async() =>{
            const response = await fetch('http://localhost:4000/api/med-records')
            const json = await response.json()

            if (response.ok){
                setMedRecords(json)
            }
        }
        fetchMedRecords()
    }, [])
}

return(
    <div className="med-records">
        {med_records && med-records.map(()=>(
            <p key ={patient_id}>{mortality}</p>
        ))}
    </div>
)