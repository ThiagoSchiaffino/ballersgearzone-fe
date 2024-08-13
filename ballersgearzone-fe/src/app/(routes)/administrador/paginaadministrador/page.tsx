"use client"
import PaginaAdmin from "@/app/components/paginaadmin/page"
import { withRoles } from "@/app/HOC/withroles"


const Home = () => {
  return (<>

    <PaginaAdmin />
 
  </>
  )
}
export default withRoles(Home, [1], "/home");