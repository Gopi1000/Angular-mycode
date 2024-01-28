import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule ,TranslateLoader} from '@ngx-translate/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './mydashboard/dashboard/dashboard.component';
import { SideNavBarComponent } from './mydashboard/side-nav-bar/side-nav-bar.component';
import { ProfileComponent } from './mydashboard/profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { EmployeelistComponent } from './mydashboard/employeelist/employeelist.component';
import { EmployeePipe } from './pipes/employee/employee.pipe';
import { BoxComponent } from './box/box.component';
import { EditProfileComponent } from './mydashboard/edit-profile/edit-profile.component';
import { ChangepasswordComponent } from './mydashboard/changepassword/changepassword.component';
import { NgxPaginationModule} from 'ngx-pagination';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HighlightDirective,
    TestComponent,
    PagenotfoundComponent,
    DashboardComponent,
    SideNavBarComponent,
    ProfileComponent,
    UnauthorizedComponent,
    EmployeelistComponent,
    EmployeePipe,
    BoxComponent,
    EditProfileComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      defaultLanguage:'en'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
