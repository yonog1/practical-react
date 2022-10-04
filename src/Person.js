import "./App.css";
import data from "./data.json";

//var num = data.length();

function Person() {
    var length = 3; //data.length - 1;
    console.log(`number of people in json data file: ${length + 1}`);
    return (
        <>
            <div>
                <img id="Photo" src={data[length].img}></img>
            </div>
            <div className="Person-name">{data[length].name}</div>
        </>
    );
}

export default Person;
