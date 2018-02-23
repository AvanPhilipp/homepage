import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'fea-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.$user.subscribe((user)=>{
      console.log(user);
      this.user = user;
    })
  }

  public user;

}
