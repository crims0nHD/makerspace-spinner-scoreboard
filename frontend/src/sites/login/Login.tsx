import kreisellogo from "../../assets/kreisel_logo.jpg";

import FhHeader from "../../components/FhHeader";

import { CookiesProvider, useCookies } from 'react-cookie'

export default function Login() {
    const [cookies, setCookie] = useCookies(['apikey'])

    function submit(e: any) {
        setCookie('apikey', e.get("apikey"), { path: '/', sameSite: "none", secure: true })
    }

    return (
        <div className="h-screen w-screen">
      <FhHeader />
      <div className="w-full flex flex-row justify-center">
        <div className="w-11/12 flex flex-row justify-center">
          <div className="w-1/2">
            <h1 className="text-3xl text-hgbgreen-100 my-4">Kreisel-Challenge Login</h1>
            <form action={submit} className="w-full">
                <label>API-Key:</label>
                <input className="col-span-2 border border-gray-500" name="apikey" />
                <button className="py-2 px-5 my-2 bg-hgbgreen-100 text-white" type="submit">Login</button>
            </form>
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