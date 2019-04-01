import {Component} from '@angular/core';
import {Tv} from "../tv";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-create',
  templateUrl: './tv-create.component.html',
  styleUrls: ['./tv-create.component.css'],

})
export class TvCreateComponent {

  tv:Tv = new Tv();
  submitted = false;
  parametrs = ["Brand","Model","Color","Display technology","Screen size","Refresh rate","Weight","Condition","Inputs"];
  selectedParam=[];
  paramIndex=0;
  paramet = [];
  paramRows = [0,1,2,3,4,5,6,7,8];
  r = 0;


  checkSelect(){
    for (let p in this.parametrs){
      let index = this.selectedParam.indexOf(this.parametrs[p]);
      if(index>-1){
        console.log(index);
        let ind = this.parametrs.indexOf(this.selectedParam[index]);
        this.parametrs.splice(ind,1)
      }
    }

  }
  passData(){
    for (let s of this.selectedParam){
      if (s.indexOf(' ')>0){
        s = s.split(' ').join('_');
      }
      let temp = s.toLocaleLowerCase();
      console.log(this.r);
      console.log(this.paramet);
      this.tv[temp] = this.paramet[this.r];
      this.r=this.r+1;

    }
  }

  constructor(
    private app:AppService,
    private router:Router
  ) { }

  newTv():void{
    this.submitted = false;
    this.tv = new Tv();
  }

  saveTv(){
    this.app.addTv(this.tv).subscribe(data=>
    {console.log(data)
    this.router.navigateByUrl('/list')
    }, error=>console.log(error));
    this.tv = new Tv();
  }

  onSubmit(){
    this.submitted =true;
    this.passData();
    this.saveTv();
  }
}
