import { Enum_Rol, Enum_EstadoUsuario } from "../enum/enum";


export interface usuario {
    id: number | null;
    correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  // rol: Enum_Rol;
  // estado: Enum_EstadoUsuario;
}
export const usuarios: usuario[] = [
  {
    id:1,
    nombre: "Cristian",
    correo: "asdff@dsfsdf.es",
    identificacion: "123456",
    apellido: "Garcia",
  },
  {
    id:2,
    nombre: "Chalo",
    correo: "sdadas@asdf.co",
    identificacion: "2131245",
    apellido: "Rodriguez",
  },
  {
    id:3,  
    nombre: "Samuel",
    correo: "sads@gag.as",
    identificacion: "123456",
    apellido: "Salgado",
  },
];
