import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Location, DatePipe } from '@angular/common';
import { MstUserService, MstUserRoleService } from '../Service/index';
import { MstUserRole } from '../Model/index';

@Component({
  selector: 'app-mst-user-insert',
  templateUrl: './mst-user-insert.component.html',
  styleUrls: ['./mst-user-insert.component.css']
})
export class MstUserInsertComponent implements OnInit {

  model: any = {};
  loading = false;
  mstUserRoles: MstUserRole[] = [];

  listOptions = [
    { id: 'promosi', name: 'Promosi' },
    { id: 'demosi', name: 'Demosi' }
  ];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  selectChange( $event) {
    this.model.myListOptions = this.listOptions[$event];
  }

  constructor(
    private location: Location,
    private router: Router,
    private datePipe: DatePipe,
    private mstUserService: MstUserService,
    private mstUserRoleService: MstUserRoleService
  ) {
    this.mstUserRoleService.getAll().subscribe(
      mstUserRoles => { this.mstUserRoles = mstUserRoles;
    });
   }

  ngOnInit() {
  }

  insert() {
    this.loading = true;
    if (this.model.birthDate === null || this.model.birthDate === '') {
      console.log('tdk tgl: ' + this.model.birthDate);
    } else {
      console.log('old: ' + this.model.birthDate);
      const date_regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      if (!(date_regex.test(this.model.birthDate))) {
        console.log('Invalidated format date');

        const newDate = new Date(Date.parse(this.model.birthDate)).toLocaleDateString();
        console.log('new: ' + newDate);
        if (newDate != null || newDate !== '') {
          this.model.birthDate = this.datePipe.transform(newDate, 'dd-MM-yyyy' );
        }
      } else {
        console.log('masuk');
      }
    }

    this.mstUserService.create(this.model).subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        console.log('Successfully inserted');
        this.router.navigate(['/']);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
        console.log('error create: ' + error);
      });
  }

  back(): void {
    this.location.back();
  }

}
