import { Component,OnInit } from '@angular/core';
import { Gems } from '../gems';
import { GemsDetailsComponent } from '../gems-details/gems-details.component';

import { Observable } from "rxjs";
import { GemsService } from "../gems.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-gems-list',
  templateUrl: './gems-list.component.html',
  styleUrls: ['./gems-list.component.css']
})
export class GemsListComponent implements OnInit{
  gems: Observable<Gems[]>;

constructor(private gemsServ: GemsService,
    private router: Router) {}

     ngOnInit() {
        this.reloadData();
      }
      reloadData() {
          this.gems = this.gemsServ.getGemsList();
        }
        deleteGems(id: String) {
            this.gemsServ.deleteGems(id)
              .subscribe(
                data => {
                  console.log(data);
                  this.reloadData();
                },
                error => console.log(error));
          }
          gemsDetails(id: String){
            this.router.navigate(['details', id]);
          }
          addNewGems(){
            this.router.navigate(['/add']);
          }
}
