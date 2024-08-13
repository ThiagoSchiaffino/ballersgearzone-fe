"use client"
import PaginaUsuario from "@/app/components/paginausu/page"
import { withRoles } from "@/app/HOC/withroles";

const HomeUser = () => {
  return (<>

    <PaginaUsuario />
 
  </>
  )
}
export default withRoles(HomeUser, [2], "/home");