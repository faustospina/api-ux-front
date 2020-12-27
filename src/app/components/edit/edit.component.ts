import { Component, Input, OnInit } from '@angular/core';
import { BackService } from 'src/app/services/back.service';
import { Activity } from '../dto/activity';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 
  succes:Boolean=false;
  fail:Boolean=false;
  @Input() id: number;

  constructor(private back:BackService,private router: Router, private activateRouter: ActivatedRoute) { 
    const id = this.activateRouter.snapshot.paramMap.get('id');
    this.back.getActivityById(parseInt(id)).subscribe((temp)=>{
      this.activity=temp;
    })

  }

  activity: Activity = {
    id:null,
    description: null,
    creation_date:null,
    is_active:null
  }
 

  bandera: boolean = false;

  

  ngOnInit() {
    console.log(this.activity);
  }

  edit(forma: NgForm) {
    this.back.aditActivity(this.activity).subscribe((temp)=>{
      if (temp) {
        this.succes=true;
        this.router.navigate( ['/view'] );  
      }else{
        this.fail=true;
      }
    })
    console.log("forma", forma);
    console.log("valor", forma.value)
  }

}
