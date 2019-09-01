import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '@route/app-routing.module';

import { AppComponent } from './app.components/app.component';
import { HeaderComponent } from '@commonComponent/header/header.component';
import { FooterComponent } from '@commonComponent/footer/footer.component';

import { CookieModule } from 'ngx-cookie';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthInterceptor } from '@services/interceptors/interceptors.service';
import { TransportEncryptionInterceptor } from '@services/interceptors/transport-encryption-interceptor.services';
import { SnackbarComponent } from './services/snackbar/snackbar-component/snackbar.component';


import { LoadMetaService } from '@services/interceptors/loadMeta';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { MatInputModule, MatDialogModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule, MatTooltipModule, MatFormFieldModule } from '@angular/material';


import { Ng2TelInputModule } from 'ng2-tel-input';


import { ConfirmationPopupComponent } from '@commonComponent/confirmation-popup/confirmation-popup.component';


import { DebounceModule } from 'ngx-debounce';



export function loadMetaBeforeApp(loadMetaService: LoadMetaService) {
  return (): Promise<any> => {
    return loadMetaService.getMetaTags();
  };
}


export function tokenGetter() {
  return 'TOKNE';
}


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    NgbModule,

    BrowserAnimationsModule,
    // CustomFormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200/'],
        blacklistedRoutes: ['']
      }
    }),

    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    Ng2TelInputModule,
    MatProgressSpinnerModule,
    DebounceModule,
    MatTooltipModule

  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    ConfirmationPopupComponent,
    SnackbarComponent

  ],
  entryComponents: [ ConfirmationPopupComponent, SnackbarComponent],
  providers: [
    // LoadMetaService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadMetaBeforeApp,
    //   deps: [LoadMetaService],
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: TransportEncryptionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
