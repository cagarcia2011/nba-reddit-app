import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function MainLayout() {

    return (
        <div className="w-full">
            <Navbar />
            <div className="relative top-[4rem] w-full min-h-[calc(100vh-4rem)] bg-light dark:bg-dark">
                <Outlet />
            </div>
        </div>
    )
}