import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { IForm, UserForm } from '../model/userForm.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public form: FormGroup<IForm>;
  public error: any;
  constructor() {
    this.form = new UserForm().userForm;
  }

  public onSubmit(): void {
    console.log(this.form.value, this.form.invalid);
  }

  public getControl(
    formGroup: keyof IForm,
    controlName: string
  ): AbstractControl {
    const form: FormGroup = this.form.controls[formGroup];
    const control = form.controls[controlName];
    return control;
  }

  public getControlHasError(
    formGroup: keyof IForm,
    controlName: string
  ): boolean {
    const control = this.getControl(formGroup, controlName);
    return control?.touched && control?.invalid;
  }
}
