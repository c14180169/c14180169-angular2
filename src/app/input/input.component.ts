import { Component, OnInit } from "@angular/core";
import { GlobalNoteService } from "../../global-note.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  judul = "";
  isi = "";
  tanggal = "";

  constructor(public globVar: GlobalNoteService) {}

  ngOnInit() {
    console.log(this.globVar.getDataJudul());
  }

  addData() {
    this.globVar.setData(this.judul, this.isi, this.tanggal);
    this.judul = "";
    this.isi = "";
    this.tanggal = "";
  }
}
