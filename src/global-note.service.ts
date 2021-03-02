import { Injectable } from "@angular/core";

@Injectable()
export class GlobalNoteService {
  private DataJudul: String[] = [];
  private DataIsi: String[] = [];
  private DataTanggal: String[] = [];

  constructor() {}

  public getDataJudul() {
    return this.DataJudul;
  }

  public getDataIsi() {
    return this.DataIsi;
  }

  public getDataTanggal() {
    return this.DataTanggal;
  }

  public setData(dataJudulBaru, dataIsiBaru, dataTanggalBaru) {
    this.DataJudul.push(dataJudulBaru);
    this.DataIsi.push(dataIsiBaru);
    this.DataTanggal.push(dataTanggalBaru);
  }
}
