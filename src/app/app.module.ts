import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { Location, DatePipe } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MstUserComponent } from './mst-user/mst-user.component';
import { routing } from './app.routing';

import { MstDepartmentService, MstUserService, MstUserRoleService} from './Service/index';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatOptionModule,
  MatSortModule, MatTableModule, MatIconModule, MatFormFieldModule, MatSelectModule
 } from '@angular/material';
import { MstUserUpdateComponent } from './mst-user-update/mst-user-update.component';
import { MstUserInsertComponent } from './mst-user-insert/mst-user-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    MstUserComponent,
    MstUserUpdateComponent,
    MstUserInsertComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    routing
  ],
  providers: [
    DatePipe,
    Location,
    MstDepartmentService,
    MstUserService,
    MstUserRoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
