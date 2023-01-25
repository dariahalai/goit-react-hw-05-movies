import Navigation from "components/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./Layout.styled";

const Layout =()=>{
return(
    <Container>
        <Navigation/>
        <Suspense fallback={null}>
        <Outlet/>
        </Suspense>
    </Container>
)
}

export default Layout;