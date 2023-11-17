import Header from "components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "./Layout.sass"

interface Props { children: JSX.Element | JSX.Element[] }

export default function Layout({ children }: Props){
    return (
        <div className="layout">
            <BrowserRouter>
                <Header />
                <div className="page">
                    {children}
                </div>
            </BrowserRouter>
        </div>
    )
}