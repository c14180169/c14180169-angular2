import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalNoteService } from "../../global-note.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  notes = [];
  dataJudul: String[];
  dataIsi: String[];
  dataTanggal: String[];
  dataFavorite: Boolean[];

  initData() {
    this.dataJudul = this.globVar.DataJudul;
    this.dataIsi = this.globVar.DataIsi;
    this.dataTanggal = this.globVar.DataTanggal;
    this.dataFavorite = this.globVar.DataFavorite;
    this.simplifyNotes();

    console.log(this.globVar.getDataJudul());
    console.log(this.globVar.getDataIsi());
    console.log(this.globVar.getDataTanggal());
  }

  ngOnInit() {
    this.initData();
  }

  constructor(private router: Router, public globVar: GlobalNoteService) {}

  simplifyNotes() {
    for (let i = 0; i < this.dataJudul.length; i++) {
      var note = {
        judul: this.dataJudul[i],
        isi: this.dataIsi[i],
        tanggal: this.dataTanggal[i]
      };
      this.notes.push(note);
    }
  }
}
