const Card = (props) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 text-white  ${props.className} `}>
      {props.children}
    </div>
  );
};
export default Card;
