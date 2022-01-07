import react from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  console.log(props.style);
  return (
    <div className="UserOutputCss">
      <p style={{ color: props.style }}>Hi I am {props.username}</p>
      <p>I am here to test the component</p>
    </div>
  );
};

export default UserOutput;
