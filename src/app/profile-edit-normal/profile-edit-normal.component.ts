import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit-normal',
  templateUrl: './profile-edit-normal.component.html',
  styleUrls: ['./profile-edit-normal.component.css']
})
export class ProfileEditNormalComponent implements OnInit {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log(this.profile);
      this.router.navigate(['/profile']);
    }
  }
}
