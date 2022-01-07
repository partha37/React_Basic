import react from "react";

const UserInput = (props) => {
  return (
    <div>
      <input onChange={props.change} type="text" value={props.fname}></input>
    </div>
  );
};

export default UserInput;
