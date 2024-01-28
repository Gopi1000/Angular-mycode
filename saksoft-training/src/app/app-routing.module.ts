import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AdminGuard } from './guard/admin/admin.guard';
import { LoginGuardGuard } from './guard/login/login-guard.guard';
import { NoLoginGuardGuard } from './guard/no-login/no-login-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './mydashboard/changepassword/changepassword.component';
import { DashboardComponent } from './mydashboard/dashboard/dashboard.component';
import { EditProfileComponent } from './mydashboard/edit-profile/edit-profile.component';
import { EmployeelistComponent } from './mydashboard/employeelist/employeelist.component';
import { ProfileComponent } from './mydashboard/profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent, canActivate:[NoLoginGuardGuard]},
  { path: 'register', component:RegisterComponent,canActivate:[NoLoginGuardGuard]},
  { path: 'demo', component:DemoComponent},
  { path: 'test', component:TestComponent},
  
  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent, canActivate: [LoginGuardGuard] },
      { path: 'dashboard', component:DashboardComponent, canActivate: [LoginGuardGuard]},
      { path: 'profile', component:ProfileComponent,  canActivate: [LoginGuardGuard]},
      { path: 'profile/:id', component:ProfileComponent,  canActivate: [LoginGuardGuard]},
      { path: 'employee-list', component: EmployeelistComponent, canActivate: [LoginGuardGuard, AdminGuard] },
      { path: 'edit', component: EditProfileComponent, canActivate: [LoginGuardGuard, AdminGuard]},
      { path: 'change', component: ChangepasswordComponent, canActivate: [LoginGuardGuard]},
      
    ]
  },
  { path: 'unauthorized', component:UnauthorizedComponent},
  { path: '**', component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
