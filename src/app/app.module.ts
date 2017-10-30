import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

import { WebService } from './web.service';
import { CookieService } from './cookie.service';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ApolloModule } from 'apollo-angular';
import { FirebaseService } from './firebase.service';
import { getClient } from './client';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArticlesComponent,
    ArticleComponent,
    WorkComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ApolloModule.withClient(getClient),
    ChartsModule
  ],
  providers: [FirebaseService, WebService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
