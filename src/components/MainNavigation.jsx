import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainNavigation(){
    return(
        <>
            <Header/>
            <main className="p-2 px-3">
                <Outlet/>
            </main>
        </>
    )
}