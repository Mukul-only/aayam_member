import Card from "../UI/Card";
import aayam from "../SVG/aayam";
import SVG from "../SVG/SVG";
import filter from "../SVG/filter";
import { useState } from "react";
const Header = (props) => {
  const [filterFlag, setFilterFlag] = useState(0);
  // console.log(filterFlag);
  const filterHandler = () => {
    setFilterFlag((prevState) => {
      if (prevState) {
        props.onFilter(0);
        return 0;
      } else {
        props.onFilter(1);
        return 1;
      }
    });
  };
  if (filterFlag !== props.filterFlag) setFilterFlag(props.filterFlag);

  return (
    <div className="border-b-2 border-[#2C2C2C] mb-4">
      <Card className="flex items-center justify-between py-2">
        <SVG svg={aayam} />
        <button
          className={`${
            filterFlag ? "border-primary" : "border-dark_bg"
          } flex gap-1 items-center  text-[#E4DEE6]  bg-dark_bg px-4 py-1  rounded-lg border-[2px] border-dark_bg hover:border-primary duration-200`}
          onClick={filterHandler}
        >
          <SVG svg={filter} />
          <div className="text-xs font-medium md:text-sm ">Filter</div>
        </button>
        <div />
      </Card>
    </div>
  );
};
export default Header;
