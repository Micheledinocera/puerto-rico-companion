import { useCallback, useRef } from "react";
import "./Randomizer.sass"
import { COSTI, EDIFICI, EDIFICI_PRODUZIONE, PIANTAGIONI, RANKS, fromEdificioToEdificioProduzione } from "utils/Utils";
import { Edificio, EdificioProduzione, setEdifici } from "redux/reducers/edificiSlice";
import { Festival, setFestival } from "redux/reducers/festivalSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function Randomizer() {
  let localEdifici=useRef([] as Edificio[]);
  const edifici = useAppSelector((state) => state.edifici)
  const festival = useAppSelector((state) => state.festival)
  const dispatch = useAppDispatch()
  
  const setupFestival=useCallback(()=>{
    let localFestival={} as Festival
    localFestival.piantagione= PIANTAGIONI[Math.floor(Math.random()*PIANTAGIONI.length)];
    const shuffledPiantagioni=PIANTAGIONI.sort(() => Math.random() - 0.5);
    localFestival.merci=shuffledPiantagioni.slice(0,3);
    let edificiFiltered=[] as EdificioProduzione[]
    edificiFiltered=edificiFiltered.concat(localEdifici.current.filter(edificio=>edificio.rank===3).map(edificio=>fromEdificioToEdificioProduzione(edificio)));
    edificiFiltered=edificiFiltered.concat(EDIFICI_PRODUZIONE.filter(edificio=>edificio.rank===3 && edificio.piantagione!==localFestival.piantagione));
    localFestival.edificio=edificiFiltered[Math.floor(Math.random()*edificiFiltered.length)];
    dispatch(setFestival({value:localFestival}))
  },[dispatch,localEdifici])

  const setupEdifici=useCallback(()=>{
    let edificiToChose:Edificio[] = [];
    let shuffledFilteredEdifici:Edificio[] = [];
    RANKS.forEach((rank)=>{
      let filteredEdifici:Edificio[] = [];
      if(rank<4)
        COSTI.forEach((costo)=>{
          filteredEdifici = EDIFICI.filter(item=>item.costo===(costo+3*(rank-1)) && item.rank===rank);
          shuffledFilteredEdifici = filteredEdifici.sort(() => Math.random() - 0.5);
          edificiToChose=edificiToChose.concat(shuffledFilteredEdifici.slice(0, filteredEdifici.length/2));
        })
      else{
        filteredEdifici = EDIFICI.filter(item=>item.rank===rank);
        shuffledFilteredEdifici = filteredEdifici.sort(() => Math.random() - 0.5);
        edificiToChose=edificiToChose.concat(shuffledFilteredEdifici.slice(0, 5));
      }
    })
    edificiToChose=edificiToChose.sort((a,b)=>{
      const indexA=EDIFICI.findIndex(edificio=>edificio.title===a.title)
      const indexB=EDIFICI.findIndex(edificio=>edificio.title===b.title)
      return indexA-indexB
    })
    localEdifici.current=edificiToChose;
    dispatch(setEdifici({value:edificiToChose}))
  },[dispatch,localEdifici])

  const initializeRandom=useCallback(()=>{
    setupEdifici();
    setupFestival();
  },[setupEdifici,setupFestival])
  
  return (
    <div id="randomizer">
      <button onClick={()=>initializeRandom()}> RANDOMIZZAMI </button>
      <div className="setup">
        {RANKS.map(rank=>
          <div className="rank-container" key={"rank_"+rank}>
            <div className="label"> Rank {rank} </div>
              <div className="edifici">
                {edifici.value.filter(edificio=>edificio.rank===rank).map(edificio=>
                  <div className={"edificio "+edificio.espansione} key={"edificio_"+edificio.title}> {edificio.title} - {edificio.costo} </div>
                )}
              </div>
          </div>
        )}
      </div>
      <div className="festival">
        <div className="label"> Festival </div>
        <div className="info-container">
          <div className="info">
            <div className="label"> Piantagione: </div>
            <div className={"value "+ festival.value.piantagione}> {festival.value.piantagione} </div>
          </div>
          <div className="info">
            <div className="label"> Merci: </div>
            <div className="value"> 
              {festival.value.merci.map(merce=><span className={merce} key={"merce_"+merce}> {merce} </span>)}
            </div>
          </div>
          <div className="info">
            <div className="label"> Edificio: </div>
            <div className={"value "+ festival.value.edificio.piantagione + " " + festival.value.edificio.espansione}> {festival.value.edificio.title} </div>
          </div>
        </div>
      </div>
    </div>
  )
}