const TicketDetails = ({patient, onStart, onComplete, onSkip, onNext, onPrev}) => {
    if(!patient) {
        return (
            <div style={{width: "60%"}}>
                <h3>No Patient Selected</h3>
            </div>
        );
    };

    return (
        <div style={{width: "60%"}}>
            <h3>Patient Details</h3>
            <p><b>Name:</b>{patient.name}</p>
            <p><b>Age:</b>{patient.age}</p>
            <p><b>Problem:</b>{patient.problem}</p>
            <p><b>Doctor:</b>{patient.doctor}</p>
            <p><b>Status:</b>{patient.status}</p>
            <div style={{marginBottom: "10px"}}>
                <button onClick={onStart}>Start Consultation</button>
                <button onClick={onComplete}>Complete</button>
                <button onClick={onSkip}>Not Treated</button>
            </div>
            <div>
                <button onClick={onPrev}>Previous</button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    );
};
export default TicketDetails;