import { Component } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { PrintService } from '../services/b.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {




  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(private print: PrintService) {}
    //This will list all of your bluetooth devices
    listPrinter() { 
      this.print.searchBluetoothPrinter()
       .then((resp: any)=>{
   
        //List of bluetooth device list
        this.bluetoothList=resp;
    });
}
//This will store selected bluetooth device mac address
selectPrinter(macAddress: any)
{
  //Selected printer macAddress stored here
  this.selectedPrinter=macAddress;
}

//This will print
printStuff()
{  
   //The text that you want to print
   var myText="Hello hello hello \n\n\n This is a test \n\n\n";
   this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
}


  connectSerial() {

  }
}
