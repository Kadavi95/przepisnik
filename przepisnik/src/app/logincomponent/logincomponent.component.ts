import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

interface myDataValues {
  name: string;
  password: string;
}
type singleUser = {
  id: number;
  nickname: string;
  password: string;
  class: string;
};

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss'],
})
export class LogincomponentComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private apiService: ApiserviceService,
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
      // this.apiService.getUser(this.form.value.name, this.form.value.password);
      // this.apiService
      //   .getHeroes(this.form.value.name, this.form.value.password)

      //   .subscribe((res) => console.log(res));

        this.apiService.getUsers().subscribe((response) => {
            response.find((item: singleUser) => {
              const primaryCondition = item.nickname.toUpperCase() === this.form.value.name.toUpperCase();
              const secondaryCondition =  item.password.toUpperCase() === this.form.value.password.toUpperCase()
              if(primaryCondition && secondaryCondition){
                this.router.navigate(['./home'])

              } else {
                console.log("error");
              }
            })
        })
    }
  }
}
