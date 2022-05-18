import type IRepositorio from "./IRepositorios";

export default interface IUsuario {
  login: string;
  avatar_url: string;
  perfil_url: string;
  nome:string;
  repostiroios_publicos: number;
  seguidores: number;
  repositorios_recentes: IRepositorio[];
}