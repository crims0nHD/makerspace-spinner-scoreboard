import { Link } from "react-router-dom";

export default function Root() {

    return(
        <div>
            <Link to={"interaction"}>Interaction</Link>
            <br></br>
            <Link to={"scoreboard"}>Scoreboard</Link>
        </div>
    );
}