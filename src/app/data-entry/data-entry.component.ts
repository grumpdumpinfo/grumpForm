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
    videoTitle: new FormControl({value: this.googleFetch, disabled: true}),
    category: new FormControl(''),
    gameName: new FormControl('')
  })

  submitData = {}
  
  onSubmit(){
    let submitData = {
      videoID: this.videoID,
      videoTitle: this.googleFetch.items[0].snippet.title,
      dataForm: this.dataForm.value
    }
    console.log(submitData)
    this.submitData = submitData
    console.log(this.submitData)
  }

  ngOnInit(): void {
  }

}
