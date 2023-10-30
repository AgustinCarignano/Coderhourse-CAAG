import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from './course.model';

export interface CourseFormControls {
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  nextStartDate: FormControl<Date | null>;
  imgUrl: FormControl<string | null>;
  available: FormControl<boolean | null>;
}

export class CourseForm {
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  nextStartDate = new FormControl<Date | null>(null);
  imgUrl = new FormControl('', [Validators.required]);
  available = new FormControl(true);
  public form: FormGroup<CourseFormControls>;

  constructor(data?: Course) {
    this.form = new FormGroup({
      title: this.title,
      description: this.description,
      nextStartDate: this.nextStartDate,
      imgUrl: this.imgUrl,
      available: this.available,
    });
    if (data) this.form.patchValue(data);
  }
}
