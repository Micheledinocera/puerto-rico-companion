import Header from "components/Header/Header";
import { HashRouter } from "react-router-dom";
import "./Layout.sass"

interface Props { children: JSX.Element | JSX.Element[] }

export default function Layout({ children }: Props){
    return (
        <div className="layout">
            <HashRouter>
                <Header />
                <div className="page">
                    {children}
                </div>
            </HashRouter>
        </div>
    )
}