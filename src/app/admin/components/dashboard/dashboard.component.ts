import { Component, OnInit } from '@angular/core';
import { AlertifyService, MesageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private alertify: AlertifyService){}

  ngOnInit(): void {
  
  }


  // this is a sample usage. After this commit i'll delete these codes with html buttons in dashboard.
  m(){
    this.alertify.message("Hello World!",
      {
        mesageType: MesageType.Warning,
        position: Position.BottomLeft, 
        delay : 5, 
        dismissOthers : true
      });
  }


  d(){
    this.alertify.dismissAll();
  }
}
