import { useEffect, useState } from "react";

const WindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDeviceType = () => {
    if (size.width <= 768) return "Mobile";
    if (size.width <= 1024) return "Tablet";
    return "Desktop";
  };

  return (
    <div>
      <h2>{size.width} x {size.height}</h2>
      <h3>{getDeviceType()}</h3>
    </div>
  );
};

export default WindowSize;