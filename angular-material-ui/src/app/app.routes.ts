import { Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ResponsiveBrakpointsComponent } from './components/responsive-brakpoints/responsive-brakpoints.component';

export const routes: Routes = [
    { path: 'input', component: InputComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'table', component: TableComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'responsive', component: ResponsiveBrakpointsComponent },
    { path: '', redirectTo: '/input', pathMatch: 'full' },
    { path: '**', redirectTo: '/input' }
  ];