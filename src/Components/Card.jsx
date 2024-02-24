import But from "./Button.jsx"
import img from "../Assets/Image_1.png"
import "./Card.css"

function Card({codeError}){
    return (
        <div className="card">
            <div className="card-contenu">
                <p className="error">{codeError} pages </p>
                <h2   className="title">Page Not Found</h2>
                <p className="description"> Sorry the page you are looking for does not exist. Here are some helpful links  </p>
                <div className="buttons">
                <But btnContenu={"Go back"} />
                <But  btnContenu={"Take me home"} bgColor= "aqua" color="white" />
                </div>

            </div>
            <div className="card-image">
                <img src={img} alt=" card" />
            </div>
           






        </div>
    );

}
export default Card