import useOnlineStatus from "../hooks/useOnlineStatus";

function OfflineBanner() {
  const isOnline = useOnlineStatus();

  return (
    <div
      style={{
        position: "fixed",
        top: isOnline ? "-60px" : "0",
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#ff4d4f",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        transition: "top 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      No Internet Connection
    </div>
  );
}

export default OfflineBanner;