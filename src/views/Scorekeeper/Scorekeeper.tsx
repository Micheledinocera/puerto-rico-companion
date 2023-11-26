import { useAppDispatch, useAppSelector } from "redux/hooks"
import "./Scorekeeper.sass"
import { ScoreProp, setScore } from "redux/reducers/scoreSlice"
import ScoreEntry, { EntryProps } from "components/ScoreEntry/ScoreEntry"
import { useCallback, useMemo } from "react"

export default function Scorekeeper() {
  const score = useAppSelector((state) => state.score)
  const dispatch = useAppDispatch()

  const changeListener=useCallback((data: EntryProps)=>{
    dispatch(setScore({
        key: data.key,
        value: 0
    }))
    setTimeout(()=>{
      dispatch(setScore(data))
    },10)
  },[dispatch])

  const total=useMemo(()=>{
    return Object.values(score).reduce((curr, next) => curr + next);
  },[score])

  return (
    <div id="scorekeeper">
      <div className="score-entries-container">
        {(Object.keys(score) as ScoreProp[]).map((scoreKey)=>
          <ScoreEntry key={scoreKey} entry={{key:scoreKey,value:score[scoreKey]}} changeListener={changeListener} />
        )}
      </div>
      <div className="total">
        <div className="value-container">
          <div className="label"> TOTALE </div>
          <div className="value"> {total} </div>
        </div>
      </div>
    </div>
  )
}