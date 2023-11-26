import { Edificio } from "redux/reducers/edificiSlice";
import "./EdificiList.sass"
import { EDIFICI, EDIFICI_NOBILI, RANKS } from "utils/Utils";
import { ChangeEvent, useMemo, useState } from "react";
import { useAppSelector } from "redux/hooks";

export default function EdificiList() {
    const edifici = useAppSelector((state) => state.edifici)
    const [selectedEdificio,selectEdificio] = useState<Edificio|null>(null)
    const [filterWord,setFilterWord] = useState<string>("")
    const [edificiAttivi,setEdificiAttivi] = useState<boolean>(false)
    
    const onChangeValue=(evt:ChangeEvent<HTMLInputElement>)=>{
        setFilterWord(evt.target.value)
    }

    const onChangeCheckbox=(evt:ChangeEvent<HTMLInputElement>)=>{
        setEdificiAttivi(evt.target.checked)
    }

    const filteredEdifici=useMemo(()=>{
        var arrayToReturn=[...EDIFICI,...EDIFICI_NOBILI].filter(edificio=>edificio.title.toLowerCase().includes(filterWord.toLowerCase()))
        return edificiAttivi?arrayToReturn.filter(edificio=>edificio.espansione==="nobili" || edifici.value.find(edificioToCheck=>edificioToCheck.title===edificio.title)):arrayToReturn
    },[filterWord,edifici,edificiAttivi])

    return (
        <div id="edifici-list">
            {selectedEdificio && 
                <div className="modal-overlay" onClick={()=>selectEdificio(null)}>
                    <div className="modal" onClick={(evt)=>evt.stopPropagation()}>
                        <div className="close" onClick={()=>selectEdificio(null)}> X </div>
                        <div className="name"> {selectedEdificio.title} </div>
                        <div className="content"> {selectedEdificio.desc} </div>
                    </div>
                </div>
            }
            <div className="filters">
                <input type="text" onChange={onChangeValue} value={filterWord}/>
                {edifici.value.length>0 && 
                    <label htmlFor="checkbox"> 
                        <input type="checkbox" id="checkbox" value={edificiAttivi.toString()} onChange={onChangeCheckbox}/>
                        Edifici Attivi 
                    </label>
                }
            </div>
            <div className="list">
                {RANKS.map(rank=>
                    filteredEdifici.filter(edificio=>edificio.rank===rank).length>0 && <div className="rank-container" key={"rank_"+rank}>
                        <div className="label"> Rank {rank} </div>
                        <div className="edifici-container">
                            {filteredEdifici.filter(edificio=>edificio.rank===rank).map(edificio=>
                            <div className={"edificio "+edificio.espansione} key={"edificio_"+edificio.title} onClick={()=>selectEdificio(edificio)}> 
                                <div className="title"> {edificio.title} - {edificio.costo} </div> 
                                <div className="desc"> {edificio.shortDesc} </div>
                            </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}