
import Layout from "../components/layouts/Layout"
import LogIn from "./Login"
import Carousel from "./Carousel"

export default function Home(){
   var isLogin = localStorage.getItem("isLogin")
   
   if (isLogin){
      var comp = <Layout><Carousel/></Layout>

   }else{
      comp = <LogIn/>
   }

   return(
      <>
      {comp}
      </>
   )
}

