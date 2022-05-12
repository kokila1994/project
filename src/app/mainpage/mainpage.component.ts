import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  isUser
  isMenu
  username:any;
  MenuNames:any;
  newarray:any;
  checked:any;
  i:any;
  items:any;
  uname:any;

 
  constructor() { 

this.isUser=false;

this.MenuNames=""
this.isMenu=false;
this.newarray=[]

    }

   
     ngOnInit(): void {
       
  }
  getUsername(event:any){
  
    if(this.username!="")
    {
     this.uname= this.username;
  this.isUser=true;
  this.i=0;
    }
  }
  
  getMenuName(){
    if(this.MenuNames!="")
    {
      this.isMenu=true;
      this.newarray.push(this.MenuNames);
      console.log(this.newarray);

    }

  }
  remove(i:number){
    this.newarray.splice(i,1);
  }
  


}
