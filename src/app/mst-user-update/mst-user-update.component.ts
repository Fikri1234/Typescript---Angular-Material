import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MstUserService, MstUserRoleService } from '../Service/index';
import { MstUserRole } from '../Model';

@Component({
  selector: 'app-mst-user-update',
  templateUrl: './mst-user-update.component.html',
  styleUrls: ['./mst-user-update.component.css']
})
export class MstUserUpdateComponent implements OnInit {

  model: any = {};
  userId: String = '';
  mstUserRoles: MstUserRole[] = [];
  loading = false;

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
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private mstUserService: MstUserService,
    private mstUserRoleService: MstUserRoleService
  ) {
    this.mstUserRoleService.getAll().subscribe(
      mstUserRoles => { this.mstUserRoles = mstUserRoles;
    });
  }

  update() {
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
    // const tes = this.datePipe.transform(this.model.dateBirth, 'dd-MM-yyyy');
  //   const newDate = new Date(Date.parse(this.model.birthDate)).toLocaleDateString();
  //   const date = new Date();
  //  console.log(this.datePipe.transform(newDate,'dd-MM-yyyy'));
    // console.log('tgl2: '+tes);
    this.mstUserService.update(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          // this.alertService.success('Registration successful', true);
          console.log('successfully updated');
          this.router.navigate(['/']);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
          console.log('error update: ' + error);
        });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.mstUserService.getById(this.userId).subscribe(
        Response => {
            this.model = Response;
        });
    });
  }

  back(): void {
    this.location.back();
  }

}
