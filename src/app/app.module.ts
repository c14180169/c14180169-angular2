import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InputComponent } from "./input/input.component";
import { DetailComponent } from "./detail/detail.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { GlobalNoteService } from "../global-note.service";

const ROUTES: Routes = [
  { path: "", component: HelloComponent },
  { path: "input", component: InputComponent },
  { path: "detail", component: DetailComponent },
  { path: "favorite", component: FavoriteComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    DetailComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalNoteService]
})
export class AppModule {}
