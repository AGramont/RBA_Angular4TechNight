import { BrowserModule } from '@angular/platform-browser'; // <-- Add support for browser rendering/communication
import { NgModule } from '@angular/core'; // <-- Add support for angular 4
import { RouterModule} from "@angular/router"; // <-- add support for routing
import { FormsModule } from "@angular/forms"; // <-- add support for Forms
import { HttpModule } from '@angular/http'; // <-- Add support for Http requests

import { AppComponent } from './app.component';

// Our components
import { RouteDefinitions } from "./app.constants";
import { HomeComponent } from "./components/home.component";
import { DashboardComponent } from "./components/dashboard.component";
import { PageWrapperComponent } from "./components/page-wrapper.component";
import { BindingDataComponent } from "./components/binding-data.component";
import { RevisitingComponentsComponent, SomeSubComponent } from "./components/revisiting-components.component";
import { DirectiveIntroComponent } from "./components/directive-intro.component";
import { ServiceDemoComponent } from './components/services-demo.component';
import { IfForComponent } from "./components/if-for.component";
import { FormListComponent } from "./components/form-list.component";
import { TemplateFormComponent } from "./components/template-form.component";


// our directives
import { HighlightDirective } from "./directives/highlight.directive";
import { InputDirective } from "./directives/input.directive";
import { InputNumericDirective } from "./directives/input-numeric.directive";

// Our services
import { StreamService } from './services/stream.service';
import { PersonService } from "./services/person.service";
import { RandomService } from "./services/random.service";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DashboardComponent, PageWrapperComponent,
    BindingDataComponent, RevisitingComponentsComponent, DirectiveIntroComponent,
    SomeSubComponent, HighlightDirective, ServiceDemoComponent, IfForComponent,
    InputNumericDirective, InputDirective, FormListComponent, TemplateFormComponent
  ],
  imports: [
    BrowserModule, RouterModule, FormsModule, HttpModule,
    RouterModule.forRoot(RouteDefinitions)
  ],
  providers: [RandomService, PersonService, StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
