import "./App.css";
import data from "./data.json";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Person(props) {
    props.personStatus(data[props.index].status);

    return (
        <>
            <div>
                <img
                    id="Photo"
                    src={data[props.index].img}
                    alt="preson's' face"
                ></img>
            </div>
            <div className="Person-name">
                {capitalizeFirstLetter(data[props.index].name)}
            </div>
        </>
    );
}

export default Person;
