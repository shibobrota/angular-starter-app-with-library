import { NgModule } from '@angular/core';
import { MagicLibraryComponent } from './magic-library.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    MagicLibraryComponent,
    PopupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule
  ],
  exports: [
    MagicLibraryComponent
  ]
})
export class MagicLibraryModule { }
