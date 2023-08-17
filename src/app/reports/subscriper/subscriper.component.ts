import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SupscriperService } from 'src/app/Core/_Services/supscriper.service';
import { Supscriper } from 'src/app/Core/_Models/supscriper';

@Component({
  selector: 'app-subscriper',
  templateUrl: './subscriper.component.html',
  styleUrls: ['./subscriper.component.css'],
})
export class SubscriperComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'city',
    'area',
    'mobile',
    'notes',
  ];
  dataSource: MatTableDataSource<Supscriper>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public subscriperService: SupscriperService) {}
  subscripers: Supscriper[] = [];
  ngOnInit() {
    this.subscriperService.getAll().subscribe((data) => {
      this.subscripers = data;
      console.log(this.subscripers);
      this.dataSource = new MatTableDataSource(this.subscripers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
