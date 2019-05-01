import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService, EndpointsEnum } from '../../services/configuration/configuration';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class LoginProvider {

  constructor(private http: HttpClient,
    private configurationService: ConfigurationService) { }

  public Auth(email: string, senha: string): Observable<any> {
    var data = {
      Email: email,
      Senha: senha
    };
    return this.http.post(this.configurationService.urlServer() + EndpointsEnum.login, data);
  }

  public Register(email: string, senha: string, nome: string): Observable<any> {
    var data = {
      Email: email,
      Senha: senha,
      Nome: nome
    };
    return this.http.post(this.configurationService.urlServer() + EndpointsEnum.register, data);
  }

  public ForgetPassword(email: string): Observable<any> {
    return this.http.get(this.configurationService.urlServer() + EndpointsEnum.ForgetPassword + "?Email=" + email);
  }

}
