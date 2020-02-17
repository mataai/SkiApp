import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Groupe } from './DTO';

@Injectable({
  providedIn: 'root'
})
export class SkiService {
  public static levels = [
    "Test",
    "Ourson",
    " Kangourou",
    " Prélude",
    " Tigre",
    " Lion",
    " Christiania",
    " Parallèle I",
    " Parallèle II",
    " Compétence I",
    " Compétence II",
    " Élite I",
    " Élite II",
    " Excellence"
  ];
  public static status = [
    "Non évalué",
    "Normal",
    "En retard",
    "Absent",
    "Fort"
  ];
  public static apiUrl = "http://api.mateimartin.ca:8082/";

  constructor(public http: HttpClient) {}

  getLevels() {
    return this.http.get(SkiService.apiUrl + "levels");
  }

  getGroups(id: number) {
    var tmp = this.http.get<Groupe[]>(SkiService.apiUrl + "groups/" + id);
    console.log(tmp);
    return tmp;
  }

  getGroup(groupID: number) {
    var tmp = this.http.get<Groupe>(SkiService.apiUrl + "group/" + groupID);
    return tmp;
  }

  getExercices(levelID: number) {
    var tmp = this.http.get(
      SkiService.apiUrl + "levels/" + levelID + "/exercices"
    );
    return tmp;
  }

  setStatus(student: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(SkiService.apiUrl + "status/", student, {
      headers
    });
  }

  search(input) {
    input = input.trim().replace(" ", "_");

    var tmp = this.http.get(SkiService.apiUrl + "search/" + input);
    return tmp;
  }
}