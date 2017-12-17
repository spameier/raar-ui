import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { SharedAdminModule } from './shared/shared-admin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ShowsModule } from './shows/shows.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PlaybackFormatsModule } from './playback-formats/playback-formats.module';
import { AccessCodesModule } from './access-codes/access-codes.module';
import { AudioEncodingsService } from './shared/services/audio-encodings.service';
import { LoginModule } from './login/login.module';
import { NotificationService } from './shared/services/notification.service';
import { NotificationComponent } from './shared/components/notification.component';

import * as moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    LoginModule,
    ShowsModule,
    ProfilesModule,
    PlaybackFormatsModule,
    AccessCodesModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule.forRoot(),
    SharedAdminModule.forRoot()
  ],
  declarations: [AppComponent, NotificationComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' },
    AudioEncodingsService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
