import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthActions, LoginCompletedAction } from './auth.action';

@Injectable()
export class AuthEffect {
    @Effect()
    authLoginAction$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    map(action => {
        return new LoginCompletedAction(true);
    }));


    constructor(private actions$: Actions) {}
}