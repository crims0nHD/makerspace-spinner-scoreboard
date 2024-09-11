import FhHeader from "../shared/FhHeader";
import GameManagement from "./GameManagement";
import UserManagement from "./UserManagement";

export default function Interaction() {
  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <div className="m-5">
          <FhHeader />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <div className="w-11/12 flex flex-row justify-center">
          <div className="w-1/2">
            <h1 className="text-3xl text-green-700 my-4">Kreisel-Challenge</h1>
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
              src="https://www.dualstudieren.at/dual-studieren_wordpress/wp-content/uploads/2020/04/FHOOE-hagenberg_panorama_Quelle-Volker-Christian.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
