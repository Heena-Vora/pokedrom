import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.interface';
import { LocalStoreService } from '../services/local-store.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  searchQuery: string;
  loggedInUser:any;
  pokemons: Pokemon;
  
  constructor(private userService: UserService, private router: Router, private store: LocalStoreService) {
    this.userService.user$.subscribe((user)=>this.loggedInUser = user);
  }
  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.store.localStore$.subscribe((store)=> {
      this.pokemons = store.pokemons;
    })
  }
  logout() {
    this.userService.logout();
    this.router.navigateByUrl('');
  }
}
