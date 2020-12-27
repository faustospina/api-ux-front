import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackService } from 'src/app/services/back.service';
import { Activity } from '../dto/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
  
})
export class AddComponent implements OnInit {

  succes:Boolean=false;
  fail:Boolean=false;

  constructor(private back:BackService,private router:Router) { }

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

  save(forma: NgForm) {
    this.back.saveActivity(this.activity).subscribe((temp)=>{
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

