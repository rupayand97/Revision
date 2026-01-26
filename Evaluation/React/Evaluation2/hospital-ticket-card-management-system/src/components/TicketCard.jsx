const TicketCard = ({patient, isActive, onClick}) => {
    return (
        <div onClick={onClick} style={{padding: "10px", marginBottom:"8px", cursor: "pointer", border: isActive ? "2px solid #1976d2" : "1px solid #ccc", backgroundColor: isActive ? "#e3f2fd" : "#fff"}}>
            <div><b>{patient.name}</b></div>
            <div>Age: {patient.age}</div>
            <small>Status: {patient.status}</small>
        </div>
    );
};
export default TicketCard;