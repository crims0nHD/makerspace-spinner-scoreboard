export default function UserManagement() {
    const API_URL = "http://localhost:8001";

    function submit(e) {
        const addUserQuery = {
            nickname: e.get("nickname"),
            first_name: e.get("firstName"),
            last_name: e.get("lastName"),
            mail: e.get("email"),
        };

        fetch(API_URL
            + "/user?"
            + new URLSearchParams(addUserQuery).toString(),
            {
                method: "POST",
            }
        )
        .then(res => res.json())
        .then(j => {
            if (j.success){
                console.log("User has been created successfully");
            }
            else {
                alert("User already exists");
            }
        });
    }

    return (
        <div>
            <form action={submit}>
            <label>Nickname:</label>
                <input name="nickname" />
                <br></br>
                <label>Vorname:</label>
                <input name="firstName" />
                <br></br>
                <label>Nachname:</label>
                <input name="lastName" />
                <br></br>
                <label>E-Mail:</label>
                <input name="email" />
                <br></br>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
}