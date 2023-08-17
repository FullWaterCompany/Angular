import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SupscriptionService } from 'src/app/Core/_Services/supscription.service';
import { RealStateService } from 'src/app/Core/_Services/RealState';
import { Subscription } from 'src/app/Core/_Models/Subscription';
import { RealState } from 'src/app/Core/_Models/RealState';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  displayedColumns: string[] = [
    'id',
    'subscriberCode',
    'realStateType',
    'unitNo',
    'isThereSanitation',
    'lastReading',
    'notes',
  ];
  dataSource: MatTableDataSource<Subscription>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public subscriptionService: SupscriptionService,
    public realService: RealStateService
  ) {}
  subscriptions: Subscription[] = [];
  realStates: RealState[] = [];
  ngOnInit() {
    this.realService.getAll().subscribe((data) => {
      this.realStates = data;
      console.log(this.realStates);

      this.subscriptionService.getAll().subscribe((data) => {
        this.subscriptions = data;
        console.log(this.subscriptions);
        this.dataSource = new MatTableDataSource(this.subscriptions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRealStateTypeName(realStateId: number): string {
    const realState = this.realStates.find((real) => real.id === realStateId);
    return realState ? realState.name : '';
  }
}
