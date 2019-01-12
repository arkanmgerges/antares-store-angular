import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProductActions, ListCompletedAction } from './product.action';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductEffect {
    @Effect()
    listAction$: Observable<Action> = this.listAction$
        .pipe(
            ofType(ProductActions.LIST),
            map(action => {
                console.log('hahahah');
                return new ListCompletedAction([]);
            })
        );

    constructor(private actions$: Actions) { }
}