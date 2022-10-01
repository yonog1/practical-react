import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import "./App.css";
import Person from "./Person";
import Feedback from "./Feedback";
import Score from "./Score";

function App() {
    return (
        <div className="Main">
            <div className="Score">
                <Score></Score>
            </div>
            <div className="Feedback">
                <Feedback></Feedback>
            </div>
            <div className="Person">
                <Person></Person>
            </div>
            <div className="Buttons">
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Dead</Button>
                    <Button variant="contained">Ugly</Button>
                </Stack>
            </div>
        </div>
    );
}

export default App;
