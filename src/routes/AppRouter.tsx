import Randomizer from "views/Randomizer/Randomizer"
import Scorekeeper from "views/Scorekeeper/Scorekeeper"
import EdificiList from "views/EdificiList/EdificiList"
import { Routes, Route, Navigate } from "react-router-dom"

export default function AppRouter(){
    return (
        <Routes>
            <Route path='/' element={<Randomizer />} />
            <Route path='score' element={<Scorekeeper />} />
            <Route path='edifici' element={<EdificiList />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    )
}