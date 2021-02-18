import classNames from "classnames";

function Branch({branch, className}) {
    return(
        <div className={
            classNames(
                className
            )
        }>
            {branch}
        </div>
    )
}

export default Branch 