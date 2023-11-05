import { ICourseEdition } from './course-editions.model';

export interface IAPICourseEdition {
  id: number;
  courseId: number;
  profesorId: number;
  startDate: string;
  endDate: string;
}

export class APICourseEdition implements IAPICourseEdition {
  id: number;
  courseId: number;
  profesorId: number;
  startDate: string;
  endDate: string;

  constructor(data: ICourseEdition) {
    this.id = data.id;
    this.courseId = data.courseId;
    this.profesorId = data.profesorId;
    this.startDate = data.startDate.toISOString();
    this.endDate = data.endDate.toISOString();
  }
}
