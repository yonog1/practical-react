import "./App.css";
import data from "./data.json";

const length = data.length - 1;
var index = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Person({ personStatus, checked }) {
  personStatus(data[index].status);
  //console.log(`number of people in json data file: ${length + 1}`);
  return (
    <>
      <div>
        <img id="Photo" src={data[index].img}></img>
      </div>
      <div className="Person-name">
        {capitalizeFirstLetter(data[index].name)}
      </div>
    </>
  );
}

export default Person;
