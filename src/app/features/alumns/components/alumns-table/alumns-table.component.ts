import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlumnsTableDataSource } from './alumns-table-datasource';
import { Alumn } from '../../models/alumn.model';

@Component({
  selector: 'app-alumns-table',
  templateUrl: './alumns-table.component.html',
  styleUrls: ['./alumns-table.component.scss'],
})
export class AlumnsTableComponent implements OnChanges, AfterViewInit {
  public dataSource!: AlumnsTableDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Alumn>;
  @Input() public data: Alumn[] = [];
  @Output() public onEdit: EventEmitter<Alumn> = new EventEmitter<Alumn>();
  @Output() public onDelete: EventEmitter<number> = new EventEmitter<number>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'fullName',
    'email',
    'birthdate',
    'dni',
    'city',
    'actions',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new AlumnsTableDataSource(changes['data'].currentValue);
    if (this.table) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editElumn(alumn: Alumn): void {
    this.onEdit.emit(alumn);
  }

  deleteAlumn(alumnId: number): void {
    this.onDelete.emit(alumnId);
  }
}
