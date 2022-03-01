import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  public patientsList = [];
  public patientsListCopy = [];
  public currentPatientId = 0;
  public searchPatient = '';

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
        this.patientsListCopy = [...data];
      }
    }, err => {
      console.log(err);
    })

  }

  filterPatients(data: string = '') {
    const searchQuery = this.searchPatient.toLowerCase();
    this.patientsList = this.patientsListCopy.filter(patient => {
      const firstName = patient.firstName.toLowerCase();
      const lastName = patient.lastName.toLowerCase();
      if (firstName.includes(searchQuery) || lastName.includes(searchQuery)) {
        return true
      }
    })
  }

}
