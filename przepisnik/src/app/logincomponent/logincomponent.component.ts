import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss'],
})

export class LogincomponentComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuild: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      password: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }
  sendData() {
    if (this.form.invalid) {
      alert('blad w formularzu czekaj');
      return;
    } else {
      this.authService.login(this.form.value.name, this.form.value.password).subscribe(() => {this.router.navigate(['autor'])});

    }
  }
}


