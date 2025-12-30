const AccountDetails = ({ data, setData, next, back }) => {
  return (
    <>
      <input
        placeholder="Username"
        value={data.username}
        onChange={(e) =>
          setData({ ...data, username: e.target.value })
        }
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />
      <br />

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default AccountDetails;
