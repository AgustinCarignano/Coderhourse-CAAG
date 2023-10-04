import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

interface IUserPeronalForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  birthDate: FormControl<Date | null>;
  dni: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  country: FormControl<string | null>;
  province: FormControl<string | null>;
  city: FormControl<string | null>;
}

interface ICourseForm {
  course: FormControl<string | null>;
  comission: FormControl<string | null>;
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
  scholarship: FormControl<boolean | null>;
}

export interface IForm {
  personalUserForm: FormGroup<IUserPeronalForm>;
  courseForm: FormGroup<ICourseForm>;
}

export class UserForm {
  private personalUserForm: FormGroup<IUserPeronalForm>;
  private courseForm: FormGroup<ICourseForm>;
  public userForm: FormGroup<IForm>;

  constructor() {
    this.personalUserForm = this.createPersonalForm();
    this.courseForm = this.createCourseForm();
    this.userForm = new FormGroup<IForm>({
      personalUserForm: this.personalUserForm,
      courseForm: this.courseForm,
    });
  }

  private createPersonalForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl<Date | null>(null, [Validators.required]),
      dni: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(9),
        Validators.maxLength(15),
      ]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  private createCourseForm(): FormGroup {
    return new FormGroup({
      course: new FormControl('', [Validators.required]),
      comission: new FormControl('', [Validators.required]),
      startDate: new FormControl<Date | null>(null, [Validators.required]),
      endDate: new FormControl<Date | null>(null),
      scholarship: new FormControl(false),
    });
  }
}
