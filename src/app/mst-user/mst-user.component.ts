import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MstUserService, MstUserRoleService } from '../Service/index';
import { MstUser, MstUserRole } from '../Model/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mst-user',
  templateUrl: './mst-user.component.html',
  styleUrls: ['./mst-user.component.css']
})
export class MstUserComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['userId', 'name', 'birthDate', 'email',
  'nik', 'type', 'posisi_skrg', 'posisi_dulu', 'embeddDTO.createdDate', 'embeddDTO.lastUpdated',
  'update', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource<MstUser>();
  mstUserRoles: MstUserRole[] = [];

  constructor(
    private mstUserService: MstUserService,
    private mstUserRoleService: MstUserRoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMstUserAll();
    this.getAllMstUserRole();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllMstUserRole = () => {
    this.mstUserRoleService.getAll().subscribe(
      mstUserRoles => { this.mstUserRoles = mstUserRoles;
    });
  }

  public getMstUserAll = () => {
    this.mstUserService.getAll().subscribe(
      res => {
        // for (let a = 0; a < res.length; a++) {
        //   const uPosisiSkrg = this.mstUserRoles.find(x => x.roleCode === res[a].posisi_skrg);
        //   const uPosisiDulu = this.mstUserRoles.find(x => x.roleCode === res[a].posisi_dulu);

        //   res[a].posisi_dulu = uPosisiDulu.roleName;
        //   res[a].posisi_skrg = uPosisiSkrg.roleName;
        // }
        // const persons =  res.filter(x => x.posisi_skrg === 'ROLE_SUPERVISOR')[0];
        // console.log('mstu: '+persons.posisi_skrg+' and '+persons.userId);
        this.dataSource.data = res as MstUser[];
      }
    );
  }

  public redirectToInsert() {
    this.router.navigate(['/insertMstUser']);
  }

  public redirectToUpdate = (userId: any) => {
    this.router.navigate(['/updateMstUser', {userId}]);
  }

  public redirectToDelete = (userId: string) => {
    console.log('delete user: ' + userId);
    this.mstUserService.delete(userId).subscribe(() => { this.getMstUserAll(); });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
