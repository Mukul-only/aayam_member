import id from "../../SVG/id";
import name from "../../SVG/name";
import core from "../../SVG/core";
import SVG from "../../SVG/SVG";
import about from "../../SVG/about";

const MemberDetails = (props) => {
  return (
    <div className="w-[13rem] group hover:bg-preety_dark rounded-xl p-2 cursor-pointer border border-body_bg hover:border-primary duration-200">
      <div className="overflow-hidden rounded-xl">
        <img
          src={props.path}
          className="w-48 h-48 duration-300 object-fit bg-dark_bg rounded-xl group-hover:scale-110 "
          alt="profile_pic"
        />
      </div>
      <div className="px-2 my-2">
        <div className="space-y-[-0.1rem]">
          <div className="flex gap-2">
            <SVG svg={name} className="flex items-center justify-center w-6 " />
            <h1 className="font-bold tracking-tight text-md md:text-lg">
              {props.name}
            </h1>
          </div>
          <div className="flex gap-2">
            <SVG svg={id} className="flex items-center justify-center w-6" />
            <p className="font-thin tracking-wider text-md md:text-lg text-text_gray">
              {props.roll}
            </p>
          </div>
        </div>
        <div className="my-1">
          <div className="flex gap-2">
            <SVG svg={core} className="flex items-center justify-center w-6" />
            <p className="text-sm md:text-md text-primary">{props.type}</p>
          </div>
          <div className="flex gap-2">
            <SVG svg={about} className="flex items-center justify-center w-6" />
            <p className="text-xs text-gray-400">{props.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberDetails;
