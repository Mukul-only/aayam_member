import alumni from "../SVG/alumni";
import stack from "../SVG/stack";
import student from "../SVG/student";
import Button from "../UI/Button";
import Card from "../UI/Card";
import idCard from "../SVG/idCard";
import { useState } from "react";
import newjoinee from "../SVG/nowjoinee";
const Filter = (props) => {
  const [type, setType] = useState("CORE TEAM");
  const [byName, setByName] = useState(0);
  const [byRoll, setByRoll] = useState(0);
  const coreTeamClickHandler = () => {
    props.onType("CORE TEAM");
    setType("CORE TEAM");
    props.onFilter(0);
  };
  const alumniClickHandler = () => {
    props.onType("ALUMNI");
    setType("ALUMNI");
    props.onFilter(0);
  };
  const newClickHandler = () => {
    props.onType("NEW JOINEE");
    setType("NEW JOINEE");
    props.onFilter(0);
  };
  const nameClickHandler = () => {
    if (byName !== 1) {
      props.onSort("byName");
      setByName(1);
      setByRoll(0);
      props.onFilter(0);
    }
  };
  const rollClickHandler = () => {
    if (byRoll !== 1) {
      props.onSort("byRoll");
      setByRoll(1);
      setByName(0);
      props.onFilter(0);
    }
  };

  return (
    <Card
      className={`${
        props.filter ? "block" : "hidden"
      } flex justify-center mb-12`}
    >
      <div
        className={` bg-preety_dark  p-4 rounded-xl border-2 border-[#444444]`}
      >
        <h1 className="my-2 text-lg font-bold tracking-tighter md:text-xl">
          Type
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            text="Core Team"
            svg={student}
            onClick={coreTeamClickHandler}
            className={`${
              type === "CORE TEAM" ? "border-primary" : "border-dark_bg"
            }`}
          />
          <Button
            text="Alumni"
            svg={alumni}
            onClick={alumniClickHandler}
            className={`${
              type === "ALUMNI" ? "border-primary" : "border-dark_bg"
            }`}
          />
          <Button
            text="New joinee"
            svg={newjoinee}
            onClick={newClickHandler}
            className={`${
              type === "NEW JOINEE" ? "border-primary" : "border-dark_bg"
            }`}
          />
        </div>

        <h1 className="my-2 mt-8 text-lg font-bold tracking-tighter md:text-xl">
          Sort
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            text="By Name"
            svg={stack}
            onClick={nameClickHandler}
            className={`${byName ? "border-primary" : "border-dark_bg"}`}
          />
          <Button
            text="By Roll"
            svg={idCard}
            onClick={rollClickHandler}
            className={`${byRoll ? "border-primary" : "border-dark_bg"}`}
          />
        </div>
      </div>
    </Card>
  );
};
export default Filter;
