import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface myDataValues {
  name: string;
  password: string;
}

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss'],
})


export class LogincomponentComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      passoword: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }
  sendData(){

  }
}
