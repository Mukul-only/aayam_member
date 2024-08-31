import SVG from "../SVG/SVG";

const Button = (props) => {
  return (
    <button
      className={`${props?.className} flex items-center justify-center gap-2 px-2 py-1 duration-150 border-2 rounded-full md:px-3 md:py-1 bg-dark_bg border-dark_bg hover:border-primary `}
      onClick={props.onClick}
    >
      <SVG svg={props?.svg} />
      <p className="text-xs font-medium md:text-sm text-nowrap ">
        {props.text}
      </p>
    </button>
  );
};
export default Button;
