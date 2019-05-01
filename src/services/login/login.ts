import { Injectable } from "@angular/core";
import { UsuarioDto } from "../../domain/UsuarioDto";
import { LoginProvider } from "../../providers/login/login";

@Injectable()
export class LoginService {

    constructor(public loginProvider: LoginProvider) {

    }

    public auth(email: string, senha: string): Promise<any> {
        return new Promise((success, error) => {

            if (!email) {
                error("Necessário informar o email");
                return;
            }

            if (!senha) {
                error("Necessário informar a senha");
                return;
            }

            this.loginProvider.Auth(email, senha).subscribe((response) => {

                if (response && response.Code == 0) {
                    let user = new UsuarioDto(response.Data["ID_USUARIO"],
                        response.Data["NM_PESSOA"],
                        response.Data["DS_EMAIL"],
                        response.Data["FL_ATIVO"])

                    success(user);
                } else {
                    error(response.Message);
                }

            }, (er) => {
                error(er);
            })
        })
    }

    public register(email: string, senha: string, confirmasenha: string, nome: string, termos:boolean): Promise<any> {
        return new Promise((success, error) => {

            if (!nome) {
                error("Necessário informar o nome");
                return;
            }

            if (!email) {
                error("Necessário informar o e-mail");
                return;
            }

            if (!senha) {
                error("Necessário informar a senha");
                return;
            }

            if (senha != confirmasenha) {
                error("As senhas não são iguais.");
                return;
            }

            if (!termos) {
                error("Precisa aceitar os termos do aplicativo.");
                return;
            }

            this.loginProvider.Register(email, senha, nome).subscribe((response) => {

                if (response && response.Code == 0) {
                    success(response);
                } else {
                    error(response);
                }

            }, (er) => {
                error(er);
            })

        })
    }

    public esquecisenha(email: string): Promise<any> {
        return new Promise((success, error) => {

            if (!email) {
                error("Necessário informar o email");
                return;
            }

            this.loginProvider.ForgetPassword(email).subscribe((response) => {

                if (response && response.Code == 0) {
                    success(response.Message);
                } else {
                    error(response.Message);
                }

            }, (er) => {
                error(er);
            })
        })
    }

}