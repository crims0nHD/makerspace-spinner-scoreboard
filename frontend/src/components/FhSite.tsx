import FhHeader from "./FhHeader";

export default function FhSite({children}) {
    return (
        <div>
            <FhHeader />
            <div>
                {children}
            </div>
        </div>
    )
}