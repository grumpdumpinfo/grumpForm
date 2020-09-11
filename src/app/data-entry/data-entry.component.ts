import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  @Input() videoID: String;
  @Input() haveURL: Boolean;
  @Input() googleFetch: any;
  
  constructor() { }

  dataForm = new FormGroup({
    videoID: new FormControl({value: this.videoID, disabled: true}),
    videoTitle: new FormControl({value: this.googleFetch, disabled: true})
  })
  onSubmit(){
    console.log('submit works')
  }

  ngOnInit(): void {
  }

}
