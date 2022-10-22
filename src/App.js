import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Person from "./Person";
import Feedback from "./Feedback";
import Score from "./Score";

function App() {
  const [score, setScore] = useState(0);
  const [buttonStatus, setButtonStatus] = useState("none");
  const [checked, setChecked] = useState(false);

  function statusCheck(personStatus) {
    //checks if the button pressed
    //matches the persons' status from <Person> component

    console.log(`person ${personStatus} | button ${buttonStatus}`);

    if (personStatus === buttonStatus && checked === false) {
      updateScore();
      // (&& checked === false) causes the update score  not to be called, WIP
      console.log("updateScore called form statusCheck");
      setChecked(true);
      //checked = true;
    }
    console.log("out of condition");
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
        <Feedback className="Feedback"></Feedback>
      </div>

      <Person className="Person" personStatus={statusCheck}></Person>

      <div className="Buttons">
        <Stack spacing={2} direction="row">
          <Button
            onClick={(buttonStatus) => {
              setButtonStatus("dead");
              statusCheck(buttonStatus);
            }}
            variant="contained"
          >
            Dead
          </Button>
          <Button
            onClick={(buttonStatus) => {
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
