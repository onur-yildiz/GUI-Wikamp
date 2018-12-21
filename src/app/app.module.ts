import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { StudentsComponent } from './content/students/students.component';
import { CoursesComponent } from './content/courses/courses.component';
import { InfoComponent } from './content/info/info.component';
import { HelpComponent } from './content/help/help.component';
import { UninewsComponent } from './content/employees/uninews/uninews.component';
import { IfenewsComponent } from './content/employees/ifenews/ifenews.component';
import { UniinfoComponent } from './content/employees/uniinfo/uniinfo.component';
import { ReqcourseComponent } from './content/employees/reqcourse/reqcourse.component';
import { LibraryComponent } from './content/students/library/library.component';
import { LibcoursesComponent } from './content/students/libcourses/libcourses.component';
import { StaffTrainingComponent } from './content/help/staff-training/staff-training.component';
import { TeacherTutorialComponent } from './content/help/teacher-tutorial/teacher-tutorial.component';
import { StudentTutorialComponent } from './content/help/student-tutorial/student-tutorial.component';
import { RulesOfLawComponent } from './content/info/rules-of-law/rules-of-law.component';
import { DepartmentsComponent } from './content/info/departments/departments.component';
import { TulEducationComponent } from './content/info/tul-education/tul-education.component';
import { DataProtComponent } from './content/info/data-prot/data-prot.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { GradesComponent } from './user/grades/grades.component';
import { PreferencesComponent } from './user/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StudentsComponent,
    CoursesComponent,
    InfoComponent,
    HelpComponent,
    UninewsComponent,
    IfenewsComponent,
    UniinfoComponent,
    ReqcourseComponent,
    LibraryComponent,
    LibcoursesComponent,
    StaffTrainingComponent,
    TeacherTutorialComponent,
    StudentTutorialComponent,
    RulesOfLawComponent,
    DepartmentsComponent,
    TulEducationComponent,
    DataProtComponent,
    UserComponent,
    ProfileComponent,
    DashboardComponent,
    GradesComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
