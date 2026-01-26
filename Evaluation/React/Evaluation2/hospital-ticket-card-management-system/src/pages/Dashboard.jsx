import { useEffect, useState } from "react";
import patientsData from "../data/patients"
import { loadFormStorage, saveToStorage } from "../utils/localStorage";
import { localStorageKeys } from "../utils/storageKeys";
import TicketList from "../components/TicketList";
import TicketDetails from "../components/TicketDetails";

const Dashboard = () => {
  const [pendingPatients, setPendingPatients] = useState([]);
  const [treatedPatients, setTreatedPatients] = useState([]);
  const [notTreatedPatients, setNotTreatedPatients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setPendingPatients(loadFormStorage(localStorageKeys.PENDING, patientsData));
    setTreatedPatients(loadFormStorage(localStorageKeys.TREATED, []));
    setNotTreatedPatients(loadFormStorage(localStorageKeys.NOT_TREATED, []));
    setCurrentIndex(loadFormStorage(localStorageKeys.CURRENT_PATIENT, 0));
  }, []);

  useEffect(() => {
    saveToStorage(localStorageKeys.PENDING, pendingPatients);
    saveToStorage(localStorageKeys.TREATED, treatedPatients);
    saveToStorage(localStorageKeys.NOT_TREATED, notTreatedPatients);
    saveToStorage(localStorageKeys.CURRENT_PATIENT, currentIndex);
  }, [pendingPatients, treatedPatients, notTreatedPatients, currentIndex]);

  const currentPatient = pendingPatients[currentIndex];

  const startConsultation = () => {
    setPendingPatients((prev) =>
      prev.map((p, i) =>
        i == currentIndex ? { ...p, status: "consulting" } : p,
      ),
    );
  };

const completeConsultation = ()=> {
    if(!currentPatient) return;

    setTreatedPatients(prev => [
        ...prev, 
        { ...currentPatient, status: "completed"}
    ]);
    setPendingPatients(prev=>
        prev.filter((_, i)=> i !== currentIndex)
    );
    setCurrentIndex(0);
};

const skipPatient = () => {
    if(!currentPatient) return;
    setNotTreatedPatients(prev => [
        ...prev, {...currentPatient, status: "not-treated"}
    ]);

    setPendingPatients(prev => 
        prev.filter((_, i)=> i!==currentIndex)
    );
    setCurrentIndex(0)
};

return(
    <div style={{display: "flex", gap:"20px"}}>
        <TicketList patients={pendingPatients} activeIndex={currentIndex} setActiveIndex={setCurrentIndex}/>
        <TicketDetails patient={currentPatient} onStart={startConsultation} onComplete={completeConsultation} onSkip={skipPatient} onPrev={()=>
            setCurrentIndex(i => Math.max(i-1, 0))
        }
        onNext={()=> setCurrentIndex(i => Math.min(i+1, pendingPatients.length-1))}
        />
    </div>
);



};
export default Dashboard;
