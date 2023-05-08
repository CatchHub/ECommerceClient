import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr : ToastrService) { }


  Message(message: string , title: string, toastrOptions : Partial<ToastrOptions>){
      toastrOptions.delay = toastrOptions.delay  ? toastrOptions.delay*1000 : 3000;
      console.log(toastrOptions.delay);
      this.toastr[toastrOptions.messageType!](message,title, {
        positionClass : toastrOptions.position,
        timeOut: toastrOptions.delay,
      });
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType = ToastrMessageType.Info; 
  position : ToastrPosition = ToastrPosition.BottomRight;
  delay: number = 3000
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info", 
  Warning = "warning", 
  Error = "error" 
}


export enum ToastrPosition {
TopFullWidth= "toast-top-full-width",
TopRight= "toast-top-right",
TopCenter= "toast-top-center",
TopLeft= "toast-top-left",
BottomFullWidth= "toast-bottom-full-width",
BottomRight= "toast-bottom-right",
BottomCenter= "toast-bottom-center",
BottomLeft= "toast-bottom-left",
} 