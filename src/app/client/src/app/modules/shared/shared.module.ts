import { SuiModule } from 'ng2-semantic-ui/dist';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ContentCardComponent, AnnouncementInboxCardComponent,
  PageSectionComponent, NoResultComponent, AppLoaderComponent
} from './components';
import { ConfigService, ResourceService, FileUploadService, ToasterService, WindowScrollService } from './services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './pipes';
import { Ng2IzitoastService } from 'ng2-izitoast';
@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    SlickModule,
    FormsModule
  ],
  declarations: [AppLoaderComponent, AnnouncementInboxCardComponent,
    DateFormatPipe, PageSectionComponent, ContentCardComponent, NoResultComponent],
  exports: [AppLoaderComponent, AnnouncementInboxCardComponent, DateFormatPipe,
    PageSectionComponent, ContentCardComponent, NoResultComponent],
  providers: [ResourceService, ConfigService, FileUploadService, ToasterService, Ng2IzitoastService, WindowScrollService]
})
export class SharedModule { }
