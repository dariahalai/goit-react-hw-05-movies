import Sidebar from "components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout =()=>{
return(
    <div>
        <Sidebar/>
        <Suspense fallback={null}>
        <Outlet/>
        </Suspense>
    </div>
)
}

export default Layout;