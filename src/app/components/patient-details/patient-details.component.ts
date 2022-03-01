import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, OnChanges {
  @Input('patientId') patientId: Number;
  public patientDetails;
  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.fetchPatientDetails();
  }

  fetchPatientDetails() {
    if (Number(this.patientId)) {
      const URL = `https://helixapi20211129123604.azurewebsites.net/patients/${this.patientId}`;
      this.http.get(URL).subscribe(data => {
        if (Object.keys(data).length > 0) {
          this.patientDetails = data;
        }
      }, err => {
        console.log(err);
      })
    }
  }

}
