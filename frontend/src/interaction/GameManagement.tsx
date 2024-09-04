export default function GameManagement() {
  const API_URL = "http://localhost:8001";

  function submit(e) {
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
    <div>
      <form action={submit}>
        <label>Nickname:</label>
        <input name="nickname" />
        <br></br>
        <label>Schätzung:</label>
        <input name="guessedValue" />
        <br></br>
        <label>Erzielte Umdrehungen:</label>
        <input name="actualValue" />
        <br></br>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}
