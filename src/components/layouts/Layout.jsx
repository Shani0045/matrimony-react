
import Footer from "./Footer"
import Navbar from "./Navbar"
import LogIn from "../../pages/Login"

export default function Layout({children, isLogin}){

    return(
       <>
        <Navbar/>
            <div className="main-content">{children}</div>
        <Footer/>
       </>
    )
}
