import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginFormControls {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export class LoginForm {
  private email = new FormControl('', [Validators.required, Validators.email]);
  private password = new FormControl('', [Validators.required]);
  public form: FormGroup<LoginFormControls>;

  constructor() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
}
