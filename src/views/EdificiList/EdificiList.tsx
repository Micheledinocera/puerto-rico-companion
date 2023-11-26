import { Edificio } from "redux/reducers/edificiSlice";
import "./EdificiList.sass"
import { EDIFICI, EDIFICI_NOBILI, RANKS } from "utils/Utils";
import { ChangeEvent, useMemo, useState } from "react";

export default function EdificiList() {
    const [selectedEdificio,selectEdificio] = useState<Edificio|null>(null)
    const [filterWord,setFilterWord] = useState<string>("")
    
    const onChangeValue=(evt:ChangeEvent<HTMLInputElement>)=>{
        setFilterWord(evt.target.value)
    }

    const filteredEdifici=useMemo(()=>{
        return [...EDIFICI,...EDIFICI_NOBILI].filter(edificio=>edificio.title.toLowerCase().includes(filterWord.toLowerCase()))
    },[filterWord])

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
            </div>
            <div className="list">
                {RANKS.map(rank=>
                    filteredEdifici.filter(edificio=>edificio.rank===rank).length>0 && <div className="rank-container" key={"rank_"+rank}>
                        <div className="label"> Rank {rank} </div>
                        <div className="edifici">
                            {filteredEdifici.filter(edificio=>edificio.rank===rank).map(edificio=>
                            <div className={"edificio "+edificio.espansione} key={"edificio_"+edificio.title} onClick={()=>selectEdificio(edificio)}> {edificio.title} - {edificio.costo} </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}