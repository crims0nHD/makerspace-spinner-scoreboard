import { Link } from "react-router-dom";
import FhSite from "../../components/FhSite";

export default function Root() {

    return(
        <FhSite>
            <div className="flex flex-row justify-center">
                <div className="text-4xl flex flex-col">
                    <Link to={"interaction"}>Interaction</Link>
                    <Link to={"scoreboard"}>Scoreboard</Link>
                    <Link to={"admin"}>Admin</Link>
                    <Link to={"login"}>Login</Link>
                    <Link to={"tutorial"}>Tutorial</Link>
                </div>
            </div>
        </FhSite>
    );
}