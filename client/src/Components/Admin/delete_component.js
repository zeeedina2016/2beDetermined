import React, {useEffect, useState} from 'react';
import '../../css/admin.css';
import '../search.css';
import { Button } from 'react';

import MedRecordDetails from "../MedRecordDetails.js"

const Home = () => {
  const [medrecords, setMedRecords] = useState(null)


useEffect(() => {
    const fetchMedRecords = async () => {
        const response = await fetch('/medrecords/')
        const json = await response.json()
 
        if (response.ok) {
            setMedRecords(json)
        } 
    }

fetchMedRecords()
}, [])
