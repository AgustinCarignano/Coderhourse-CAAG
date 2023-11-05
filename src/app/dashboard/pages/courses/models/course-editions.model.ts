import { IAPICourseEdition } from './course-api-edition.model';

export interface ICourseEdition {
  id: number;
  courseId: number;
  profesorId: number;
  startDate: Date;
  endDate: Date;
}

export class CourseEdition implements ICourseEdition {
  id: number;
  courseId: number;
  profesorId: number;
  startDate: Date;
  endDate: Date;

  constructor(data: IAPICourseEdition) {
    this.id = data.id;
    this.courseId = data.courseId;
    this.profesorId = data.profesorId;
    this.startDate = new Date(data.startDate);
    this.endDate = new Date(data.endDate);
  }
}
