import { Injectable } from '@angular/core';

export enum EndpointsEnum{
    login = "account",
    register = "account/register",
    ForgetPassword = "account/forgetpassword"
}

@Injectable()
export class ConfigurationService {

    constructor() {
    }

    public urlServer(): string {
        return "http://localhost:51661/api/";
    }

}
