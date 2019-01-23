import { Routes, RouterModule } from '@angular/router';

import { MstUserComponent } from '../app/mst-user/mst-user.component';
import { MstUserUpdateComponent } from './mst-user-update/mst-user-update.component';
import { MstUserInsertComponent } from './mst-user-insert/mst-user-insert.component';

const appRoutes: Routes = [
    { path: '', component: MstUserComponent },
    { path: 'updateMstUser', component: MstUserUpdateComponent },
    { path: 'insertMstUser', component: MstUserInsertComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
