import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalNoteService } from "../global-note.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  notes = [];
  dataJudul: String[] = [];
  dataIsi: String[] = [];
  dataTanggal: String[] = [];

  constructor(private router: Router, public globVar : GlobalNoteService) {
    this.dataJudul = globVar.getDataJudul();
    this.dataIsi = globVar.getDataIsi();
    this.dataTanggal = globVar.getDataTanggal();
    this.simplifyNotes();
   
  }

  simplifyNotes(){
    for(let i=0;i<this.dataJudul.length;i++){
      var note = {
        judul : this.dataJudul[i],
        isi  : this.dataIsi[i],
        tanggal : this.dataTanggal[i]
      };
      this.notes.push(note);
    }
  }

  navInput() {
    this.router.navigate(["/input"]);
  }

  navFavorite() {
    this.router.navigate(["/favorite"]);
  }
}
