export default function GameManagement() {
  const API_URL = "app"; // This translates to http://domain/app

  function submit(e: any) {
    const addGameQuery = {
      nickname: e.get("nickname"),
      guess_score: e.get("guessedValue"),
      actual_score: e.get("actualValue"),
    };

    fetch(API_URL + "/game?" + new URLSearchParams(addGameQuery).toString(), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((j) => {
        if (j.success) {
          console.log("Game has been added");
        } else {
          alert("Error while adding game");
        }
      });
  }

  return (
    <div className="w-10/12">
      <form action={submit} className="w-full">
        <div className="grid grid-cols-3 w-full gap-2">
          <label>Nickname:</label>
          <input className="col-span-2 border border-gray-500" name="nickname" />
          <label>Schätzung:</label>
          <input className="col-span-2 border border-gray-500" name="guessedValue" />
          <label>Erzielte Umdrehungen:</label>
          <input className="col-span-2 border border-gray-500" name="actualValue" />
        </div>

        <button className="py-2 px-5 my-2 bg-hgbgreen-100 text-white" type="submit">Add Game</button>
      </form>
    </div>
  );
}
