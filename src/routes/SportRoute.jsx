import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar"
import { Content } from "../views/content";
import { CreateApp } from "../views/Create";


const draweWidth = 240;

export const SportRoute = () => {
    return (
        <>
            <NavBar drawerWidth={draweWidth} />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="content" element={<Content />} />
                <Route path="create" element={<CreateApp />} />
            </Routes>
        </>
    )
}

