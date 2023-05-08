import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';

  constructor(private toastr :CustomToastrService){


    
  // these are sample usages. After this commit i'll delete these codes.
    this.toastr.Message("Hello World!", "Greeting", { 
      messageType: ToastrMessageType.Success, 
      position :ToastrPosition.BottomFullWidth,
      delay : 5
    });

    this.toastr.Message("I Have the High Ground!", "Obi", {
      messageType: ToastrMessageType.Info,
      position : ToastrPosition.TopCenter,
      delay : 5
    });


    this.toastr.Message("Anakin", "Error",{
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopCenter,
      delay : 5
    } );

    this.toastr.Message("It's Over!", "Warning",  {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopCenter,
      delay : 5
    });
  }
}

