
import "./Button.css"

function But({btnContenu,bgColor,color}){
    return(
        <button style={{backgroundColor:bgColor,color:color} }className="Btn"> {btnContenu}</button>
    )
}

export default But