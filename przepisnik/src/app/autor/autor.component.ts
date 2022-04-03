import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss'],
})
export class AutorComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      description: this.formBuild.control('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      imgUrl: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(150),
      ]
      )
    })
  }
}
