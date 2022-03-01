import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  public patientsList = [];
  public currentPatientId = 0;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.loadPatientList();
  }

  loadPatientList() {
    const URL = "https://helixapi20211129123604.azurewebsites.net/patients";

    this.http.get(URL).subscribe((data: Array<any>) => {
      if (data.length > 0) {
        this.patientsList = data;
      }
    }, err => {
      console.log(err);
    })

  }

}
