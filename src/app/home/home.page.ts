import { Component, OnInit } from '@angular/core';
import { SkiService } from '../SkiAPI/ski.service';
import { Storage  } from '@ionic/Storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = "SkiApp";

  constructor(private SkiAPI: SkiService, public storage: Storage ) {
    SkiAPI.getTest().subscribe( resp =>{
      console.log(resp);
      this.storage.get("UserID").then(val => console.log(val))
    })
   }

  ngOnInit() {
  }

}
