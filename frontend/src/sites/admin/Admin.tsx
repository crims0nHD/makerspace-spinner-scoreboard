import FhSite from "../../components/FhSite"

export default function Admin () {

    return (
        <FhSite>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col text-4xl">
                    <a href="/app/download">Download Excel file</a>
                    <a href="/adminer">Admin console</a>
                </div>
            </div>
        </FhSite>);
}