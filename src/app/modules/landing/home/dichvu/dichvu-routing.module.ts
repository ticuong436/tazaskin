import { RouterModule, Routes } from '@angular/router';
import { DichvuListComponent } from './dichvu-list/dichvu-list.component';
import { DichvuComponent } from './dichvu.component';
import { DichvuDetailComponent } from './dichvu-detail/dichvu-detail.component';
import { DichvuDetailResolver, DichvuResolver } from './dichvu.resolve';

export const dichvuRoutes: Routes = [
    {
        path: '',
        component: DichvuComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DichvuListComponent,
                resolve: {
                    dichvu: DichvuResolver,
                },
            },
            {
                path: ':id',
                component: DichvuDetailComponent,
                resolve: {
                    detail: DichvuDetailResolver,
                },
            },
        ],
    },
];


