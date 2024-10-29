import kreisellogo from "../../assets/kreisel_logo.jpg";

import FhHeader from "../../components/FhHeader";
import GameManagement from "./GameManagement";
import UserManagement from "./UserManagement";

export default function Interaction() {
  return (
    <div className="h-screen w-screen">
      <FhHeader />
      <div className="w-full flex flex-row justify-center">
        <div className="w-11/12 flex flex-row justify-center">
          <div className="w-1/2">
            <h1 className="text-3xl text-hgbgreen-100 my-4">Kreisel-Challenge</h1>
            <p className="py-2">
              Schätze, wie viele Umdrehungen du mit unserem HSD-Kreisel
              schaffst! (min 50, max 300) <br></br> Wie nahe kommst du deinem
              Ziel?
            </p>
            <div className="py-2 flex flex-row justify-center">
              <UserManagement />
            </div>
            <div className="py-2 flex flex-row justify-center">
              <GameManagement />
            </div>
          </div>
          <div className="w-1/2">
            <img
              className=""
              src={kreisellogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
