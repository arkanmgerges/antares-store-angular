import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as fromAuthAction from './store/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  today: number = Date.now();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  onLogin() {
    this.store.dispatch(new fromAuthAction.LoginAction());
  }
}
