import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function Github() {
  const { userid } = useParams({});
  const [data, setData] = React.useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${userid}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      });
  }, [userid]);
//   if (!data) {
//     return <h1>Loading...</h1>;
//   }

  return (
    <div>
      <div>Username:{data.login}</div>
      <div>Public repos:{data.public_repos}</div>
      <div>id:{data.id}</div>
      <div>
        <img src={data.avatar_url} alt="" />
      </div>
    </div>
  );
}

export default Github;
