import { APICourse } from './course-api.model';

export interface ICourse {
  id: number;
  title: string;
  description: string;
  nextStartDate: Date;
  imgUrl: string;
  available: boolean;
}

export class Course implements ICourse {
  id: number;
  title: string;
  description: string;
  nextStartDate: Date;
  imgUrl: string;
  available: boolean;

  constructor(course: APICourse) {
    this.id = course.id;
    this.title = course.title;
    this.description = course.description;
    this.nextStartDate = new Date(course.nextStartDate);
    this.imgUrl = course.imgUrl;
    this.available = course.available;
  }
}
