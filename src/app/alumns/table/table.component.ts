import { Component, Input } from '@angular/core';
import { IAlumn } from '../models/alumn.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: IAlumn[] = [];
  displayedColumns: (keyof IAlumn)[] = ['id', 'lastName', 'firstName', 'email'];
}
