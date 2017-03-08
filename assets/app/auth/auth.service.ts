import { ErrorService } from './../errors/error.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

const localhost = 'http://localhost:3000/';
const heroku = 'https://meantalk-deployment.herokuapp.com/';

@Injectable()
export class AuthService {
constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('https://meantalk-deployment.herokuapp.com/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('https://meantalk-deployment.herokuapp.com/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}