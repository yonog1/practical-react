import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useState } from "react";

import "./App.css";
import Person from "./Person";
import Score from "./Score";

import data from "./data.json";

function App() {
  const [score, setScore] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("none");
  const [checked, setChecked] = useState(false);

  const [index, setIndex] = useState(0);

  function statusCheck(personStatus) {
    //checks if the button pressed
    //matches the persons' status from <Person> component

    console.log(`person ${personStatus} | button ${buttonStatus}`);

    console.log("start of condition");
    console.log(
      "pesron status: ",
      personStatus,
      " | ",
      "checked: ",
      checked === false
    );

    if (checked === false && personStatus === buttonStatus) {
      //incrementing score incorrectly, opposing status' are compared
      console.log(
        "checked condition",
        personStatus === buttonStatus,
        checked === false
      );
      updateScore();

      console.log("updateScore called form statusCheck");
      setChecked(true);
    }
    console.log("end of condition");
  }

  function updateScore() {
    //keeps track and updates the score based on user input (buttons)
    console.log("score updated");
    setScore((prev) => prev + 0.5); //**BUG** supposed to increase by 1, but the fucntion gets called twice, CBA
  }

  return (
    <div className="Main">
      <div className="Stats">
        <Score score={score} className="Score"></Score>
      </div>

      <Person
        className="Person"
        personStatus={statusCheck}
        index={index}
        setIndex={setIndex}
      ></Person>

      <div className="Buttons">
        <Stack spacing={2} direction="row">
          <Button
            onClick={(buttonStatus) => {
              setChecked(false);
              console.log(index);
              if (index < data.length - 1) {
                console.log(index);
                setIndex((prev) => prev + 1);
                console.log(index);
              }
              setButtonStatus("dead");
              statusCheck(buttonStatus);
            }}
            variant="contained"
          >
            Dead
          </Button>
          <Button
            onClick={(buttonStatus) => {
              setChecked(false);
              console.log(index);
              if (index < data.length - 1) {
                console.log(index);
                setIndex((prev) => prev + 1);
                console.log(index);
              }
              setButtonStatus("ugly");
              statusCheck(buttonStatus);
            }}
            variant="contained"
          >
            Ugly
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
