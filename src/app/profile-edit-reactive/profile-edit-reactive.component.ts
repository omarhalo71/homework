import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

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
    this.createForm();
  }

  ngOnInit(): void {
    this.getProfile();
  }

  createForm() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getProfile(): void {
    this.profileService.getProfiles().subscribe(profiles => {
      this.profile = profiles[0];
      this.profileForm.patchValue(this.profile);
    });
  }

  save(): void {
    this.profile = this.profileForm.value;
    this.profileService.updateProfile(this.profile).subscribe();
  }
}
