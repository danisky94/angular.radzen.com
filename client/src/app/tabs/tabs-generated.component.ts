/*
  This file is automatically generated. Any changes will be overwritten.
  Modify tabs.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { LinkComponent } from '@radzen/angular/dist/link';
import { CardComponent } from '@radzen/angular/dist/card';
import { TabsComponent } from '@radzen/angular/dist/tabs';
import { DataListComponent } from '@radzen/angular/dist/datalist';
import { ImageComponent } from '@radzen/angular/dist/image';
import { GridComponent } from '@radzen/angular/dist/grid';

import { ConfigService } from '../config.service';

import { NorthwindService } from '../northwind.service';

export class TabsGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('link0') link0: LinkComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('card0') card0: CardComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('datalist0') datalist0: DataListComponent;
  @ViewChild('grid0') grid0: GridComponent;
  @ViewChild('grid1') grid1: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  northwind: NorthwindService;
  events: any;
  parameters: any;
  getNorthwindOrdersResult: any;
  getNorthwindOrdersCount: any;
  getEmployeesResult: any;
  getEmployeesCount: any;
  getCustomersResult: any;
  getCustomersCount: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.northwind = this.injector.get(NorthwindService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.events = [];

    this.datalist0.load();
  }

  tabs0Change(event: any) {
    if (event.index == 1 && !this.getEmployeesCount) {
      this.grid0.load();
    }

    if (event.index == 2 && !this.getCustomersCount) {
      this.grid1.load();
    }
  }

  datalist0LoadData(event: any) {
    this.northwind.getNorthwindOrders(null, event.top, event.skip, null, `Customer,Employee`, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getNorthwindOrdersResult = result.value;

      this.getNorthwindOrdersCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.northwind.getEmployees(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getEmployeesResult = result.value;

      this.getEmployeesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid1LoadData(event: any) {
    this.northwind.getCustomers(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getCustomersResult = result.value;

      this.getCustomersCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }
}
