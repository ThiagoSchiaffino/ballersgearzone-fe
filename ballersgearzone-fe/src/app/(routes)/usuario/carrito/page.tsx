"use client"
import Carrito from "@/app/components/Carrito/page"
import { withRoles } from "@/app/HOC/withroles";

const Home = () => {
  return (<>

    <Carrito />
 
  </>
  )
}
export default withRoles(Home, [2], "/home");