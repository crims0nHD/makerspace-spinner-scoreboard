import fhlogo from "../assets/fhlogo.jpg";

export default function FhHeader() {
    const innerSquareClassName = "";

    const innerSquareClassNameWhite = innerSquareClassName + "bg-white";
    const innerSquareClassNameGreen = innerSquareClassName + "bg-hgbgreen-100";
    
    return (
        <div className="h-24 w-full flex flex-row justify-between">
            <div className="aspect-square h-full grid grid-cols-2">
                <div key={1} className={innerSquareClassNameGreen}></div>
                <div key={2} className={innerSquareClassNameWhite}></div>
                <div key={3} className={innerSquareClassNameWhite}></div>
                <div key={4} className={innerSquareClassNameGreen}></div>
            </div>
            <div className="w-72 shrink py-2 px-5">
                <img src={fhlogo} className="object-contain h-full"></img>
            </div>
        </div>
    );
}