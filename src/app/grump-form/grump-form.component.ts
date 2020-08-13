import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'grump-form',
  templateUrl: './grump-form.component.html',
  styleUrls: ['./grump-form.component.css']
})
export class GrumpFormComponent implements OnInit {
  URLForm = new FormGroup({
    videoURL: new FormControl('')
  })
  haveURL = false
  embedURL = ""
  onSubmit() {
    const regex = /v=(.+?)(&|$)/;
    let matchedString = this.URLForm.value.videoURL.match(regex)
    if (!matchedString) {
      console.log("please use a youtube URL")
    }
    else {
      
      console.log(matchedString)
      this.embedURL = `https://www.youtube.com/embed/${matchedString[1]}?&autoplay=1`
      console.log(matchedString[1]);
      console.log(this.embedURL)
      this.haveURL = !this.haveURL
    }
   
  }

  ngOnInit(): void {
  }

}
