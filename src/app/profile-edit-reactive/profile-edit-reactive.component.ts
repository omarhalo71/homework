import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit-reactive',
  templateUrl: './profile-edit-reactive.component.html',
  styleUrls: ['./profile-edit-reactive.component.css']
})
export class ProfileEditReactiveComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.profileForm.patchValue(profile);
    });
  }

  save(): void {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe(() => {
        alert('Profile updated successfully!');
        this.router.navigate(['/profile']);
      });
    }
  }
}
