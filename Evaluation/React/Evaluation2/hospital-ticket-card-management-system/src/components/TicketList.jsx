import TicketCard from "./TicketCard"

const TicketList = ({patients, activeIndex, setActiveIndex}) => {
    return (
        <div style={{width: "40%"}}>
            <h3>Patient Queue</h3>
            {patients.length == 0 && <p>No Panding Patients</p>}
            {patients.map((patient, index)=>(
                <TicketCard key={patient.id} patient={patient} isActive={index==activeIndex} onClick={setActiveIndex(index)}/>
            ))}
        </div>
    );
};
export default TicketList;