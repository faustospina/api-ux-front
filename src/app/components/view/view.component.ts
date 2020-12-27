import { Component, OnInit } from '@angular/core';
import { BackService } from 'src/app/services/back.service';
import { Activity } from '../dto/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  activities:Activity[]=[]

  constructor(private back:BackService,private router:Router) { 
    this.uploadActivities();
  }


  uploadActivities(){
    this.back.getActivities().subscribe((listActivities)=>{
      this.activities=listActivities;
      console.log(this.activities);
    });
  }


  editActivity(id:string){   
      console.log(id);
      this.router.navigate( ['/edit',id] );      
  }

  deleteActivity(id:number){
    this.back.deleteActivityById(id).subscribe(()=>{   
      this.uploadActivities();
    })
  }


  ngOnInit(): void {
    
  }

}
