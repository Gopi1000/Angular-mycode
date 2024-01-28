import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MathsService } from './services/services/maths.service';
import { Demo1Component } from './demo1/demo1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SideNavBarComponent } from './dashboard/side-nav-bar/side-nav-bar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ForgetpasswordComponent } from './dashboard/forgetpassword/forgetpassword.component';
import { EmployeelistComponent } from './dashboard/employeelist/employeelist.component';
import { EmployeePipe } from './pipes/employee/employee.pipe';
import { SqrtPipe } from './pipes/sqrt/sqrt.pipe';
import { TranslateModule ,TranslateLoader} from '@ngx-translate/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BoxComponent } from './box/box.component';
import { CreateBookComponent } from './dashboard/book-and-review/create-book/create-book.component';
import { BookDetailsComponent } from './dashboard/book-and-review/book-details/book-details.component';
import { BookListComponent } from './dashboard/book-and-review/book-list/book-list.component';
import { UpdateBookComponent } from './dashboard/book-and-review/update-book/update-book.component';
import { AddReviewComponent } from './dashboard/book-and-review/add-review/add-review.component';
import { UpdateReviewComponent } from './dashboard/book-and-review/update-review/update-review.component';
import { Task1Component } from './exampletemplate/task1/task1.component';
import { Task2Component } from './exampletemplate/task2/task2.component';
import { Task3Component } from './exampletemplate/task3/task3.component';
import { Task4Component } from './exampletemplate/task4/task4.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DemoComponent,
    LoginComponent,
    RegisterComponent,
    Demo1Component,
    TestComponent,
    PagenotfoundComponent,
    HighlightDirective,
    DashboardComponent,
    SideNavBarComponent,
    UnauthorizedComponent,
    ProfileComponent,
    ForgetpasswordComponent,
    EmployeelistComponent,
    EmployeePipe,
    SqrtPipe,
    BoxComponent,
    CreateBookComponent,
    BookDetailsComponent,
    BookListComponent,
    UpdateBookComponent,
    AddReviewComponent,
    UpdateReviewComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LoadingBarRouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      defaultLanguage:'en'
  })
  ],

  providers: [MathsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
