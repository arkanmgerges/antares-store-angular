import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../auth/store/auth.state';
import * as fromAuthAction from '../auth/store/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth$: Observable<AuthState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new fromAuthAction.LogoutAction())
  }

}
