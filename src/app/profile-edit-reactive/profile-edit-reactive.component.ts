import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit-reactive',
  templateUrl: './profile-edit-reactive.component.html',
  styleUrls: ['./profile-edit-reactive.component.css']
})
export class ProfileEditReactiveComponent implements OnInit {
  profileForm: FormGroup;
  profile: Profile;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    // Initialize form group
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
    // Initialize profile object
    this.profile = {
      id: 1, // Use a default value or fetch from service
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.profile = profiles[0]; // Assuming you want the first profile
      this.profileForm.patchValue(this.profile);
    });
  }

  save(): void {
    if (this.profileForm.valid) {
      const updatedProfile = { ...this.profile, ...this.profileForm.value };
      this.profileService.updateProfile(updatedProfile).subscribe();
    }
  }
}
