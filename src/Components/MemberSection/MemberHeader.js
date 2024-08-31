import members from "../../SVG/members";
import SVG from "../../SVG/SVG";
import Card from "../../UI/Card";

const MemberHeader = (props) => {
  return (
    <Card>
      <div className="flex items-center justify-center gap-2">
        <SVG svg={members} />
        <div>
          <h1 className="text-primary font-thin md:font-normal text-xs md:text-[0.9rem] tracking-[0.8rem]">
            MEMBERS
          </h1>
          <h1 className="text-xl font-bold tracking-wide text-white md:text-2xl">
            Meet Our Talents
          </h1>
        </div>
      </div>
    </Card>
  );
};
export default MemberHeader;
