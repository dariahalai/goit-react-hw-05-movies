import Sidebar from "components/Sidebar";


const Layout =({children})=>{
return(
    <div>
        <Sidebar/>
        <div>{children}</div>
    </div>
)
}

export default Layout;