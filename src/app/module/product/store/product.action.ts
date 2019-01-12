import { Action } from '@ngrx/store';

export const ProductActions = {
    LIST: 'LIST',    
}

export class ListAction implements Action {
    readonly type: string = ProductActions.LIST
}

export type ProductAction = ListAction;