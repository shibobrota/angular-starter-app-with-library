import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sd-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

//   constructor(private readonly dialog: MatDialogRef<PopupComponent>, 
//     @Inject(MAT_DIALOG_DATA) readonly data: any){}

// static open(matDialog: MatDialog, config: MatDialogConfig<{}>){
//   return matDialog.open<PopupComponent,{}, string>(PopupComponent, {
//     width:'320px',
//     ...config,
//   });
// }
  
ngOnInit(): void {
  }

}
