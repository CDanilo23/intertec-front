import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntertecComponent } from './intertec/IntertecComponent';

export const router: Routes = [
    {
        path: 'component',
        component: IntertecComponent
    },
    {
        path: '', redirectTo: 'about', pathMatch: 'full'
    }
];