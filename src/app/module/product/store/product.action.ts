import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export const ProductActions = {
    LIST: 'LIST',    
    LIST_COMPLETED: 'LIST_COMPLETED',
}

export class ListAction implements Action {
    readonly type: string = ProductActions.LIST
}

export class ListCompletedAction implements Action {
    readonly type: string = ProductActions.LIST_COMPLETED
    constructor(public payload: Product[]) {}
}

export type ProductAction = ListAction | ListCompletedAction;