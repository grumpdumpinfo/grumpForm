import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { VideoFetchService } from '../video-fetch.service'

@Component({
  selector: 'grump-form',
  templateUrl: './grump-form.component.html',
  styleUrls: ['./grump-form.component.css']
})
export class GrumpFormComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private VideoFetchService: VideoFetchService
  ) { }

  URLForm = new FormGroup({
    videoURL: new FormControl('')
  })
  haveURL = false
  embedURL = ""
  cards = {}
  googleFetch = {}

  onSubmit() {
    const regex = /v=(.+?)(&|$)/;
    let matchedString = this.URLForm.value.videoURL.match(regex)
    if (!matchedString) {
      console.log("please use a youtube URL")
    }
    else {
      this.embedURL = `https://www.youtube.com/embed/${matchedString[1]}?&autoplay=0&enablejsapi`
      this.VideoFetchService.getVideo(`${matchedString[1]}`).subscribe(data => { console.log(data); this.googleFetch = data })
      this.haveURL = !this.haveURL
    }

  }

  ngOnInit() {
    
  }

}
 