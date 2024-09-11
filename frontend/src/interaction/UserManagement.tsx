export default function UserManagement() {
  const API_URL = "app";

  function submit(e) {
    const addUserQuery = {
      nickname: e.get("nickname"),
      first_name: e.get("firstName"),
      last_name: e.get("lastName"),
      mail: e.get("email"),
    };

    fetch(API_URL + "/user?" + new URLSearchParams(addUserQuery).toString(), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((j) => {
        if (j.success) {
          console.log("User has been created successfully");
        } else {
          alert("User already exists");
        }
      });
  }

  return (
    <div className="w-10/12">
      <form action={submit} className="w-full">
        <div className="grid grid-cols-3 w-full gap-2">
          <label>Nickname:</label>
          <input className="col-span-2 border border-gray-500" name="nickname" />
          <label>Vorname:</label>
          <input className="col-span-2 border border-gray-500" name="firstName" />
          <label>Nachname:</label>
          <input className="col-span-2 border border-gray-500" name="lastName" />
          <label>E-Mail:</label>
          <input className="col-span-2 border border-gray-500" name="email" />
        </div>

        <button className="py-2 px-5 my-2 bg-green-900 text-white" type="submit">Create User</button>
      </form>
    </div>
  );
}
