const PersonalInfo = ({ data, setData, next }) => {
  return (
    <>
      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <br />

      <button onClick={next}>Next</button>
    </>
  );
};

export default PersonalInfo;
