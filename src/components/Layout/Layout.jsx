import Sidebar from "components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./Layout.styled";

const Layout =()=>{
return(
    <Container>
        <Sidebar/>
        <Suspense fallback={null}>
        <Outlet/>
        </Suspense>
    </Container>
)
}

export default Layout;