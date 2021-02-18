import classNames from "classnames";

function CenterText({text, subtext, className}) {
    return(
        <div className={
            classNames(
                className
            )
        }>
            <div className="text-4xl text-center">{text}</div>
            <div className="text-lg text-center">{subtext}</div>            
        </div>
    )
}

export default CenterText;