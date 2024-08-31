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
      path: require("./assets/profile_3.png"),
      name: "Aarav",
      roll: "205124076",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet sectetur adipiscing elit",
    },
    {
      id: "d2",
      path: require("./assets/profile_12.png"),
      name: "Ananya",
      roll: "205124071",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet ",
    },
    {
      id: "d3",
      path: require("./assets/profile_6.png"),
      name: "Vedant",
      roll: "205124078",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet velit esse cillum dolore eu fugiat nulla",
    },
    {
      id: "d4",
      path: require("./assets/profile_4.jpg"),
      name: "Arjun",
      roll: "205123080",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d5",
      path: require("./assets/profile_7.png"),
      name: "Vihaan",
      roll: "205124101",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d6",
      path: require("./assets/profile_9.png"),
      name: "Devansh",
      roll: "205124001",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d7",
      path: require("./assets/profile_11.png"),
      name: "Saanvi",
      roll: "205124101",
      type: "CORE TEAM",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d8",
      path: require("./assets/profile_13.png"),
      name: "Mira",
      roll: "205121089",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d9",
      path: require("./assets/profile_2.png"),
      name: "Kavya",
      roll: "205121091",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
    {
      id: "d10",
      path: require("./assets/profile_5.jpg"),
      name: "Jiya",
      roll: "205121043",
      type: "ALUMNI",
      des: "Lorem ipsum dolor sit amet, consectet",
    },
  ];

  const [filter, setFilter] = useState(0);
  const [type, setType] = useState("CORE TEAM");
  const [sortBy, setSortBy] = useState("");
  const filterHandler = (filter) => {
    setFilter(filter);

    console.log(filter);
  };
  const typeHandler = (type) => {
    setType(type);
  };

  const sortHandler = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <>
      <Header onFilter={filterHandler} filterFlag={filter} />
      <Filter
        filter={filter}
        onType={typeHandler}
        onSort={sortHandler}
        onFilter={filterHandler}
      />
      <MemberHeader />
      <MemberBody type={type} items={data} sortBy={sortBy} />
    </>
  );
}

export default App;
