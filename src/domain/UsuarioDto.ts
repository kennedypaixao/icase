export class UsuarioDto {
    ID_USUARIO: number;
    NM_PESSOA: string;
    DS_EMAIL: string;
    FL_ATIVO: boolean;

    constructor(idUsuario: number,
        Nome: string,
        Email: string,
        Ativo: boolean
    ) {
        this.ID_USUARIO = idUsuario;
        this.NM_PESSOA = Nome;
        this.DS_EMAIL = Email;
        this.FL_ATIVO = Ativo;
    }
}