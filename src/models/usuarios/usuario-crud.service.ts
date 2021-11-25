import { usuario, usuarios } from "./usuarios";

export const getAllusuarios = async (): Promise<usuario[]> => {
    return usuarios;
  };

export const createusuarios = async (usuario:usuario): Promise<void> => { 
    usuarios.push(usuario);  
}

export const updateusuarios = async (usuario:usuario): Promise<void> => { 
    let index = usuarios.findIndex(d => d.id === usuario['id']);
    if(index >0 || index==0)
   {
    usuarios[index]['nombre'] = usuario['nombre'];
    usuarios[index]['correo'] = usuario['correo'];
    usuarios[index]['identificacion'] = usuario['identificacion'];

   }
}


export const deleteusuarios = async (id:number): Promise<void> => { 
    console.log(`in delete usuario index is ${JSON.stringify(id)}`)
    let index = usuarios.findIndex(d => d.id === id);
    console.log(`in delete usuario index is ${index}`)
    if(index >0 || index==0)
    usuarios.splice(index, 1);
    
}

