import React from "react";

//const [score, setScore] = useState(0);

export default function Score({ score }) {
    score++;
    return <div id="Score-text">Score: {score}</div>;
}
