import { Injectable } from "@angular/core";

@Injectable()
export class GlobalNoteService {
  public DataJudul: String[] = ["judul satu"];
  public DataIsi: String[] = ["isi satu"];
  public DataTanggal: String[] = ["tanggal satu"];
  public DataFavorite: Boolean[] = [false];

  constructor() {}

  public getDataJudul() {
    console.log(this.DataJudul.length);
    return this.DataJudul;
  }

  public getDataIsi() {
    return this.DataIsi;
  }

  public getDataTanggal() {
    return this.DataTanggal;
  }

  public getDataFavorite() {
    return this.DataFavorite;
  }

  public setData(dataJudulBaru, dataIsiBaru, dataTanggalBaru) {
    this.DataJudul.push(dataJudulBaru);
    this.DataIsi.push(dataIsiBaru);
    this.DataTanggal.push(dataTanggalBaru);
    this.DataFavorite.push(false);
  }
}
