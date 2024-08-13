"use client"
import RegistroDeVentas from "@/app/components/RegistroVentas/page"
import { withRoles } from "@/app/HOC/withroles";

const Home = () => {
  return (<>

    <RegistroDeVentas />
 
  </>
  )
}
export default withRoles(Home, [1], "/home");