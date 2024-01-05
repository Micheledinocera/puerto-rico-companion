import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Randomizer.sass"
import { COSTI, EDIFICI, EDIFICI_PRODUZIONE, PIANTAGIONI, RANKS, fromEdificioToEdificioProduzione } from "utils/Utils";
import { Edificio, EdificioProduzione, setEdifici } from "redux/reducers/edificiSlice";
import { Festival, setFestival } from "redux/reducers/festivalSlice";
import { setCode } from "redux/reducers/codeSlice";
import QRCode from "react-qr-code";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function Randomizer() {
  let localEdifici=useRef([] as Edificio[]);
  const [codeModal,setCodeModal]=useState<boolean>(false);
  const edifici = useAppSelector((state) => state.edifici)
  const festival = useAppSelector((state) => state.festival)
  const code = useAppSelector((state) => state.code)
  const { search } = useLocation();

  const dispatch = useAppDispatch()

  const useQuery=useMemo(() => new URLSearchParams(search), [search]);

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

  const createCode=useCallback(()=>{
    let localCode="";
    localEdifici.current.forEach(localEdificio => {
      localCode+=EDIFICI.findIndex(edificio=>edificio.title===localEdificio.title)
      localCode+="_"
    });
    localCode=localCode.substring(0,localCode.length-1)
    dispatch(setCode({value:localCode}));
  },[localEdifici,dispatch])

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
    dispatch(setEdifici({value:edificiToChose}));
    createCode();
  },[dispatch,createCode,localEdifici])

  const initializeRandom=useCallback(()=>{
    setupEdifici();
    setupFestival();
  },[setupEdifici,setupFestival])

  const codeUrl=useMemo(()=> window.location.origin+window.location.pathname+"#/?code="+code.value ,[code])

  useEffect(() => {
    if(useQuery.get("code")){
      dispatch(setCode({value:useQuery.get("code")??""}))
      localEdifici.current=(useQuery.get("code")??"").split("_").map(index=>EDIFICI[parseInt(index)])
      dispatch(setEdifici({value:localEdifici.current}));
      setupFestival();
    } else if(edifici.value.length===0){
      initializeRandom();
    }
  },[dispatch,code,localEdifici,useQuery,setupFestival,initializeRandom]);

  return (
    <div id="randomizer">
      {codeModal &&
        <div className="modal-overlay" onClick={()=>setCodeModal(false)}>
          <div className="modal" onClick={(evt)=>evt.stopPropagation()}>
            <div className="close" onClick={()=>setCodeModal(false)}> X </div>
            <div className="name"> <span>Click here</span> to copy url or show the qrcode </div>
            <div className="content"> <QRCode value={codeUrl} /> </div>
          </div>
        </div>
      }
      <div className="button-container">
        <button onClick={()=>initializeRandom()}> {"RANDOMIZZAMI"} </button>
        {code.value!=="" &&
          <div className="show-code" onClick={()=>setCodeModal(true)}>
            Share Code
          </div>
        }
      </div>
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