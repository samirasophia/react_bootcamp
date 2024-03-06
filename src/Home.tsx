import {useNavigate} from "react-router-dom";
export default function home(){
const navigate = useNavigate()
    return(
        <div className={"header header-middle"}>
            <button className={"button"} onClick={() => navigate("/characters")}>Characters</button>
        </div>
    )
}