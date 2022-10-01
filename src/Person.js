import "./App.css";
import data from "./data.json";

//var num = data.length();

function Person() {
    var length = data.length - 1;
    console.log(`number of people in json data file: ${length + 1}`);
    return (
        <>
            <div className="Person-name">{data[length].name}</div>
            <div>
                <img src={data[length].img}></img>
            </div>
        </>
    );
}

export default Person;
