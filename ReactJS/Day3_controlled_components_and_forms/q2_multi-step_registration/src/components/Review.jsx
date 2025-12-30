const Review = ({ data, back }) => {
  const handleSubmit = () => {
    console.log("Final Data:", data);
    alert("Form Submitted!");
  };

  return (
    <>
      <h3>Review</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={back}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Review;
