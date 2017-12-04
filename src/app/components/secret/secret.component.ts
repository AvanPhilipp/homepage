import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { SecretService } from "./secret.service";

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  _characters: Character[];

  constructor(private secret: SecretService){

  }

  ngOnInit() {
    this.secret.characters.subscribe(characters => {
      this._characters = characters;
    })
  }

  get characters(){
    return this._characters;
  }

}
