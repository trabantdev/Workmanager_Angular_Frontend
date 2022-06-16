import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'category/:id', component: EmployeeListComponent},
  {path: 'category', component: EmployeeListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: '**', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
