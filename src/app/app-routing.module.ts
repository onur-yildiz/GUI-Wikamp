import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ReqcourseComponent } from './content/employees/reqcourse/reqcourse.component';
import { UniinfoComponent } from './content/employees/uniinfo/uniinfo.component';
import { CoursesComponent } from './content/courses/courses.component';
import { StaffTrainingComponent } from './content/help/staff-training/staff-training.component';
import { StudentTutorialComponent } from './content/help/student-tutorial/student-tutorial.component';
import { TeacherTutorialComponent } from './content/help/teacher-tutorial/teacher-tutorial.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { GradesComponent } from './user/grades/grades.component';
import { PreferencesComponent } from './user/preferences/preferences.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UninewsComponent } from './content/employees/uninews/uninews.component';
import { IfenewsComponent } from './content/employees/ifenews/ifenews.component';
import { LibraryComponent } from './content/students/library/library.component';
import { LibcoursesComponent } from './content/students/libcourses/libcourses.component';
import { TulEducationComponent } from './content/info/tul-education/tul-education.component';
import { DataProtComponent } from './content/info/data-prot/data-prot.component';
import { DepartmentsComponent } from './content/info/departments/departments.component';
import { RulesOfLawComponent } from './content/info/rules-of-law/rules-of-law.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: 'app', component: ContentComponent,
    children: [
      {path: 'reqcourse', component: ReqcourseComponent},
      {path: 'uniinfo', component: UniinfoComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'stafftrain', component: StaffTrainingComponent},
      {path: 'studenttrain', component: StudentTutorialComponent},
      {path: 'uninews', component: UninewsComponent},
      {path: 'library', component: LibraryComponent},
      {path: 'libcourses', component: LibcoursesComponent},
      {path: 'dataprot', component: DataProtComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'rules', component: RulesOfLawComponent},
      {path: 'tuled', component: TulEducationComponent},
      {path: 'ifenews', component: IfenewsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'teachertut', component: TeacherTutorialComponent},
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
