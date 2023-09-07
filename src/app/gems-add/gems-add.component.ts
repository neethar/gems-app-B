
import { Component,OnInit } from '@angular/core';
import { Gems } from '../gems';
import { GemsDetailsComponent } from '../gems-details/gems-details.component';
import { Observable } from "rxjs";
import { GemsService } from "../gems.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gems-add',
  templateUrl: './gems-add.component.html',
  styleUrls: ['./gems-add.component.css']
})
export class GemsAddComponent implements OnInit {
  gems: Gems = new Gems();
  submitted = false;

  constructor(private gemService: GemsService,
    private router: Router) { }
    ngOnInit() {
      }
      newGems(): void {
        this.submitted = false;
        this.gems = new Gems();
      }
      save() {
          this.gemService
          .createGems(this.gems).subscribe(data => {
            console.log(data)
            this.gems = new Gems();
            this.gotoList();
          },
          error => console.log(error));
        }
        onSubmit() {
          this.submitted = true;
          this.save();
        }
        gotoList() {
          this.router.navigate(['/gems']);
        }
}



