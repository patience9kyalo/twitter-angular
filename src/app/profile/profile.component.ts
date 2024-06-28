import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { User } from '../Models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent implements OnInit {
  users!: User[];

  constructor(private as: ApiService) {}

  ngOnInit(): void {
    this.as.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
