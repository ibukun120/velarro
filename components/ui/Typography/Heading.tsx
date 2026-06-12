interface headingInterface {
    text : string;
}

export default function Heading({text}:headingInterface) {



//     Font
// Gotham

// Weight
// 700

// Style
// Bold
    return (<div className="text-bold w-[700]"

    >
        {
            text
        }
        </div>)
}