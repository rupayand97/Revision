import { useEffect, useState } from "react";

const AutoSave = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Saved");

  useEffect(() => {
    if (text === "") return;

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Saved:", text);
      setStatus("Saved");
    }, 2000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter your text"
      />
      <div>{status}</div>
    </>
  );
};

export default AutoSave;