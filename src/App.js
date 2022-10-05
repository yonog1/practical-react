import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Person from "./Person";
import Feedback from "./Feedback";
import Score from "./Score";

function App() {
    const [sc, setScore] = useState(0);

    function statusCheck() {
        //checks if the button pressed
        //matches the persons' status from <Person> component
    }

    function updateScore() {
        //keeps track and updates the score based on user input (buttons)
        /*
        if (statusCheck()) {
            setScore(score++);
        }
        */
        setScore((prev) => prev + 1);
    }

    return (
        <div className="Main">
            <div className="Stats">
                <Score score={sc} className="Score"></Score>
                <Feedback className="Feedback"></Feedback>
            </div>

            <Person className="Person"></Person>

            <div className="Buttons">
                <Stack spacing={2} direction="row">
                    <Button onClick={statusCheck} variant="contained">
                        Dead
                    </Button>
                    <Button onClick={updateScore} variant="contained">
                        Ugly
                    </Button>
                </Stack>
            </div>
        </div>
    );
}

export default App;
