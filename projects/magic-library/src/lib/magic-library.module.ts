import { NgModule } from '@angular/core';
import { MagicLibraryComponent } from './magic-library.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    MagicLibraryComponent,
    PopupComponent
  ],
  imports: [
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    MatGridListModule
  ],
  exports: [
    MagicLibraryComponent
  ],
  entryComponents: [PopupComponent]
})
export class MagicLibraryModule { }
