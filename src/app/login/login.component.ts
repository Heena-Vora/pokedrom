import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStoreService } from '../services/local-store.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private localStoreService: LocalStoreService,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  login() {
    if (this.form.valid) {
      this.loginUser(this.form.controls.username.value);
    }
  }
  loginUser(username) {
    const localStoreSubscription = this.localStoreService.localStore$.subscribe((store) => {
      let users = store.users;
      if (users.length > 0) {
        let registeredUser = users.filter((user) => user.username === username);
        if (registeredUser.length > 0) {
          this.userService.setLoggedInUser(registeredUser[0]);
          this.router.navigateByUrl('dashboard');
        } else {
        }
      }
    });
    this.subscriptions.push(localStoreSubscription);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((subscription)=> subscription.unsubscribe());
  }
}
