import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ExercicesPageRoutingModule } from "./exercices-routing.module";
import { ExercicesPage } from "./exercices.page";
import { HttpClientModule } from "@angular/common/http";
import { ExerciceListComponent } from "./exercice-list/exercice-list.component";
import { ExerciceInfoComponent } from "./exercice-info/exercice-info.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicesPageRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [ExercicesPage, ExerciceListComponent, ExerciceInfoComponent]
})
export class ExercicesPageModule {}