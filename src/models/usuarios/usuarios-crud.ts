import * as UsuariosService from './usuario-crud.service';
import { usuario } from './usuarios';

export const getusuarioList = async (req:any, res:any) => {
    const usuarioList: usuario[] = await UsuariosService.getAllusuarios();
    console.log(`in get ${JSON.stringify(usuarioList)}`)
    try {
        res.status(200).send(
            usuarioList);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const createusuario = async (req:any, res:any) => {
    const usuario: usuario = req.body;
    await UsuariosService.createusuarios(usuario);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

export const updateroduct = async (req:any, res:any) => {
    const usuario: usuario = req.body;
    await UsuariosService.updateusuarios(usuario);
    try {
        res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

  export const deleteusuario = async (req:any, res:any) => {
    const usuarioID: number = req.body['id'];
    await UsuariosService.deleteusuarios(usuarioID);
    try {
        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
             result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };