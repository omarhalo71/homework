import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditReactiveComponent } from './profile-edit-reactive/profile-edit-reactive.component';
import { ProfileEditNormalComponent } from './profile-edit-normal/profile-edit-normal.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'edit-profile', component: ProfileEditNormalComponent },
  { path: 'edit-profile-reactive', component: ProfileEditReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
