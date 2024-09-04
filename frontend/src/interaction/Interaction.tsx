import GameManagement from "./GameManagement";
import UserManagement from "./UserManagement";

export default function Interaction() {
  return (
    <div>
      <h1>Kreisel-Challenge</h1>
      <p>
        Schätze, wie viele Umdrehungen du mit unserem HSD-Kreisel schaffst! (min
        50, max 300) <br></br> Wie nahe kommst du deinem Ziel?
      </p>
      <UserManagement />
      <GameManagement />
    </div>
  );
}
