import { useHistory, useLocation } from "react-router-dom";

const TeacherPage = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 10;

  const handleNext = () => {
    query.set("skip", skip + limit);
    //como string --- history.push("/demo");
    //como Object --- history.push({ pathname: "/contact", search: "?id=1&type=Test" });
    history.push({ search: query.toString() });
  };
  return (
    <div>
      <h1>TeacherPage</h1>
      <h3>Skip: {skip}</h3>
      <h3>Limit: {limit}</h3>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default TeacherPage;
