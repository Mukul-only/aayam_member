import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import MemberHeader from "./Components/MemberSection/MemberHeader";
import MemberBody from "./Components/MemberSection/MemberBody";
import Filter from "./Components/Filter";
import { useState } from "react";
function App() {
  const data = [
    {
      id: "d1",
      path: require("./assets/profile_2.png"),
      name: "TempName1",
      roll: "205124076",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d2",
      path: require("./assets/profile_2.png"),
      name: "name",
      roll: "205124071",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d3",
      path: require("./assets/profile_2.png"),
      name: "name",
      roll: "205124078",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d4",
      path: require("./assets/profile_3.png"),
      name: "a",
      roll: "205124080",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
  ];

  const [filter, setFilter] = useState(0);
  const [type, setType] = useState("CORE TEAM");
  const [sortBy, setSortBy] = useState("");
  const filterHandler = (filter) => {
    setFilter(filter);
  };
  const typeHandler = (type) => {
    setType(type);
  };

  const sortHandler = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <>
      <Header onFilter={filterHandler} />
      <Filter filter={filter} onType={typeHandler} onSort={sortHandler} />
      <MemberHeader />
      <MemberBody type={type} items={data} sortBy={sortBy} />
    </>
  );
}

export default App;
