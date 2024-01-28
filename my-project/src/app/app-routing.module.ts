import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { EmployeelistComponent } from './dashboard/employeelist/employeelist.component';
import { ForgetpasswordComponent } from './dashboard/forgetpassword/forgetpassword.component';
import { NoLoginGuard } from './guard/no-login/no-login.guard';
import { AdminGuard } from './guard/admin/admin.guard';
import { LoginGuard } from './guard/login/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './dashboard//profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { BookListComponent } from './dashboard/book-and-review/book-list/book-list.component';
import { CreateBookComponent } from './dashboard/book-and-review/create-book/create-book.component';
import { UpdateBookComponent } from './dashboard/book-and-review/update-book/update-book.component';
import { BookDetailsComponent } from './dashboard/book-and-review/book-details/book-details.component';
import { AddReviewComponent } from './dashboard/book-and-review/add-review/add-review.component';
import { UpdateReviewComponent } from './dashboard/book-and-review/update-review/update-review.component';
import { Task1Component } from './exampletemplate/task1/task1.component';
import { Task2Component } from './exampletemplate/task2/task2.component';
import { Task3Component } from './exampletemplate/task3/task3.component';
import { Task4Component } from './exampletemplate/task4/task4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoLoginGuard] },
  { path: 'demo', component: DemoComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'test', component: TestComponent },
  { path: 'booklist',component:BookListComponent},
  { path: 'addbook', component: CreateBookComponent},
  { path: 'updatebook', component:UpdateBookComponent},
  { path: 'bookdetails', component:BookDetailsComponent},
  { path: 'addreview', component:AddReviewComponent},
  { path: 'updatereview', component:UpdateReviewComponent},
  { path: 'task1', component:Task1Component},
  { path: 'task2', component:Task2Component},
  { path: 'task3', component:Task3Component},
  { path: 'task4', component:Task4Component},


  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent, canActivate: [LoginGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
      { path: 'forget', component: ForgetpasswordComponent, canActivate: [LoginGuard] },
      { path: 'employee-list', component: EmployeelistComponent, canActivate: [LoginGuard, AdminGuard] },
    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
