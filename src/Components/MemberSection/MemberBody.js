import SVG from "../../SVG/SVG";
import Card from "../../UI/Card";
import MemberDetails from "./MemberDetails";
import empty from "../../SVG/empty";
const MemberBody = (props) => {
  const filterMembers = props.items.filter((member) => {
    return member.type === props.type;
  });
  if (props.sortBy === "byName") {
    filterMembers.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (props.sortBy === "byRoll") {
    filterMembers.sort((a, b) => a.roll.localeCompare(b.roll));
  }

  return (
    <Card className="my-12 ">
      <div className="mx-auto w-fit text-primary font-bold text-xs md:text-md tracking-[0.2rem] md:tracking-[0.4rem] bg-dark_bg md:px-4 md:py-2  px-3 py-1 rounded-full border-[1.5px] border-light_gray">
        {props.type}
      </div>
      <div className="flex flex-wrap justify-center gap-1 p-2 mt-16 border border-dark_bg rounded-2xl md:justify-start ">
        {filterMembers.length === 0 ? (
          <div className="flex flex-col items-center justify-center mx-auto font-bold md:text-xl text-light_gray">
            <SVG svg={empty} />
            The List is empty
          </div>
        ) : (
          filterMembers.map((member) => (
            <MemberDetails
              key={member.id}
              name={member.name}
              roll={member.roll}
              type={member.type}
              des={member.des}
              path={member.path}
            />
          ))
        )}
      </div>
    </Card>
  );
};
export default MemberBody;
