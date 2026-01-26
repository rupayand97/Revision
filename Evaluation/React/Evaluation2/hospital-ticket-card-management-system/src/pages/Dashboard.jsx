import { useEffect, useState } from "react"
import { loadFormStorage, saveToStorage } from "../utils/localStorage";
import { localStorageKeys } from "../utils/storageKeys";

const Dashboard = () => {
    const [pendingPatients, setPendingPatients] = useState([]);
    const [treatedPatients, setTreatedPatients] = useState([]);
    const [notTreatedPatients, setNotTreatedPatients] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        setPendingPatients(
            loadFormStorage(localStorageKeys.PENDING, patientsData)
        );
        setTreatedPatients(
            loadFormStorage(localStorageKeys.TREATED,
            [])
        );
        setNotTreatedPatients(loadFormStorage(localStorageKeys.NOT_TREATED,[])
    );
    setCurrentIndex(
        loadFormStorage(localStorageKeys.CURRENT_PATIENT, 0)
    );
    }, []);

    useEffect(()=>{
        saveToStorage(localStorageKeys.PENDING, pendingPatients);
        saveToStorage(localStorageKeys.TREATED, treatedPatients);
        saveToStorage(localStorageKeys.NOT_TREATED, notTreatedPatients);
        saveToStorage(localStorageKeys.CURRENT_PATIENT, currentIndex);
    }, [pendingPatients, treatedPatients, notTreatedPatients, currentIndex]);


    const currentPatient = pendingPatients[currentIndex];

    const startConsultation = () => {
        setPendingPatients(prev =>
            prev.map((p, i) =>
            i==currentIndex ? {...p, status: "consulting"}: p
    )
        );
    };

    




}