import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableActionColumn } from './TableActionColumn';
import { TableColumn } from './TableColumn';

@Component({
  selector: 'DynamicTable',

  templateUrl: './table.component.html',

  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isPageableServerSide = false;
  @Input() paginationType = 'client';
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableActionColumns: TableActionColumn[] = [];
  @Input() rowActionIcon: string;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];


  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
    console.log("tablecolumns", { ...this.tableColumns }, "length :", this.total)
    const columnNames = this.tableColumns.map(tableColumn => tableColumn.name);
    this.displayedColumns = columnNames;
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    console.log("type++++++++++++++;",this.paginationType);
    
    if (this.paginationType==='client')
      this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.sort = this.matSort;
    if (this.paginationType==='client')
      this.tableDataSource.paginator = this.matPaginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.tableDataSource.filter = filterValue.trim().toLowerCase();
    this.filter.emit(filterValue);
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableColumns.find(
      (column) => column.name === sortParameters.active
    ).dataKey;
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.action.emit(row);
  }

  emitAction(row: any, action: any) {
    row = { ...row, action }
    this.action.emit(row);
  }

  emitPagination(event) {
    this.action.emit({ ...event, action: 'paginate' })

  }
}
