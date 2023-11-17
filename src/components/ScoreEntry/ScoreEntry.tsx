import { ScoreProp } from "redux/reducers/scoreSlice"
import "./ScoreEntry.sass"
import { ChangeEvent, useCallback } from "react"

export type ScoreEntryProps={
  entry:EntryProps,
  changeListener: any
}

export type EntryProps={
  key: ScoreProp,
  value: number
}

export default function ScoreEntry(props:ScoreEntryProps) {

  const onChangeValue=useCallback((evt: ChangeEvent<HTMLInputElement>)=>{
    const value=isNaN(parseInt(evt.target.value))?0:parseInt(evt.target.value);
    props.changeListener({key:props.entry.key,value:value} as EntryProps)
  },[props])

  const minusClick=useCallback(()=>{
    if(props.entry.value>0)
      props.changeListener({key:props.entry.key,value:props.entry.value-1} as EntryProps)
  },[props])

  const plusClick=useCallback(()=>{
    props.changeListener({key:props.entry.key,value:props.entry.value+1} as EntryProps)
  },[props])

  return (
    <div id="score-entry">
      <div className="label"> {props.entry.key} </div>
      <div className="value-container">
        <div className={"minus "+(props.entry.value<=0?"disabled":"")} onClick={minusClick}> - </div>
        <input min="0" value={props.entry.value} type="number" onChange={onChangeValue}/>
        <div className="plus" onClick={plusClick}> + </div>
      </div>
    </div>
  )
}