import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { UnauthGuard } from './authentication/guards/unauth.guard';
import { StudentsComponent } from './components/students/students.component';
import { DataStudentComponent } from './components/students/data-student/data-student.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: 'students', component: StudentsComponent, canActivate: [AuthGuard], children: [
      { path: '', component: StudentsListComponent },
      { path: ':studentId', component: DataStudentComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
