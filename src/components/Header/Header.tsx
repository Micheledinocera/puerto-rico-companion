import { useCallback } from "react";
import "./Header.sass"
import { useNavigate,useLocation } from "react-router-dom"

export default function Header() {
	const navigate = useNavigate()	
  const location  = useLocation();

  const selectedClass=useCallback((path:string)=>{
    if(location.pathname===path) return "selected"
  },[location])

  return (
    <div id="header">
      <div className={selectedClass("/")} onClick={()=>navigate("/")}> Randomizer </div>
      <div className={selectedClass("/edifici")} onClick={()=>navigate("/edifici")}> Edifici </div>
      <div className={selectedClass("/score")} onClick={()=>navigate("/score")}> Scorekeeper </div>
    </div>
  )
}