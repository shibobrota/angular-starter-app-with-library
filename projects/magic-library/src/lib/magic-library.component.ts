import { Component, ViewChild, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MagicLibraryService } from './magic-library.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'sd-magic-library',
  templateUrl: './magic-library.component.html',
  styleUrls: ['./magic-library.component.scss']
})
export class MagicLibraryComponent implements OnInit {

  constructor(private libraryService: MagicLibraryService, public dialog: MatDialog) { }

  ngOnInit(): void {}

  @Input() count: number = 0;

  onRequest(){
    console.log("CLicked!!");
    this.libraryService.getRatings()
    .then(res => {console.log("Received Data:", res)} );
  }

  openDialog(): void {
    this.dialog.open(PopupComponent, {
     // data: {
     // },
     // panelClass:'pop-out',
     // hasBackdrop: true,
     // backdropClass: '',
   });
 }

}


