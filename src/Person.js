import "./App.css";
import data from "./data.json";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Person() {
  var index = data.length - 1;
  console.log(`number of people in json data file: ${index + 1}`);
  return (
    <>
      <div>
        <img alt="person" src={data[index].img}></img>
      </div>
      <div className="Person-name">
        {capitalizeFirstLetter(data[index].name)}
      </div>
    </>
  );
}

export default Person;
