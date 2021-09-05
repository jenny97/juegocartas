import { useParams } from "react-router-dom";

const StudenPage = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>Student : {username}</h1>
    </div>
  );
};

export default StudenPage;
