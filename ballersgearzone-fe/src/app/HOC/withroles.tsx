import { useRouter } from "next/navigation";

function hasRequiredPermissions(roles: number[]): boolean | string {
  const jwt = require("jsonwebtoken");
  const token = localStorage.getItem("accessToken");
console.log("token", token)
  if (token) {
    const respuesta = jwt.decode(token).rolID;

    if (respuesta) {
      const rol: number = respuesta;
      const resultadoRoles = roles.some((r) => r === rol);
      return resultadoRoles;
    }
  }
  return false;
}
export function withRoles(
    Component: any,
    requiredPermissions: number[],
    goBackRoute: string
  ) {
    return function withRolesWrapper(props: any) {
      const router = useRouter();
      const hasPermission = hasRequiredPermissions(requiredPermissions);
      if (hasPermission) {
        return <Component {...props} />;
      } else {
        router.push(goBackRoute);
        return null;
      }
    };
  }