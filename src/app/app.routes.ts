import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./balance-sheet/feature-list/feature-list.component').then((m) => m.FeatureListComponent)
    }
];
