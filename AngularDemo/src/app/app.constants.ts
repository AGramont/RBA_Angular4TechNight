import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { DashboardComponent } from "./components/dashboard.component";
import { BindingDataComponent } from "./components/binding-data.component";
import { RevisitingComponentsComponent } from "./components/revisiting-components.component";
import { DirectiveIntroComponent } from "./components/directive-intro.component";
import { ServiceDemoComponent } from './components/services-demo.component';
import { IfForComponent } from "./components/if-for.component";
import { FormListComponent } from "./components/form-list.component";
import { TemplateFormComponent } from "./components/template-form.component";

export const RouteDefinitions: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'binding', component: BindingDataComponent },
    { path: 'revisit-components', component: RevisitingComponentsComponent},
    { path: 'directive-intro', component: DirectiveIntroComponent},
    { path: 'services-demo', component: ServiceDemoComponent},
    { path: 'if-for', component: IfForComponent },
    { path: 'form-list', component: FormListComponent },
    { path: 'template-form/:id', component: TemplateFormComponent}
];