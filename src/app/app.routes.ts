import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from './components/view/view.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';

export const ROUTES: Routes = [
    { path: 'home', component: ViewComponent },
    { path: 'view', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent},    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash:true});



