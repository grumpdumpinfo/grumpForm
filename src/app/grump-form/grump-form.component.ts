import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { VideoFetchService } from '../video-fetch.service'
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

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
  googleFetch = {}
  videoID = ""
  
  onSubmit() {
    // define regex that finds Youtube video code
    const regex = /v=(.+?)(&|$)/;
    let matchedString = this.URLForm.value.videoURL.match(regex)
    this.videoID = matchedString[1]
    // find a match, if there is one.
    if (!matchedString) {
      console.log("please use a youtube URL")
    }
    else {
      // embed video given
      this.embedURL = `https://www.youtube.com/embed/${matchedString[1]}?&autoplay=0&enablejsapi`
      // find video title with video-fetch service
      this.VideoFetchService.getVideo(`${matchedString[1]}`).subscribe(data => { this.googleFetch = data; this.haveURL = !this.haveURL })
      
    }
  }

  ngOnInit() {

  }

}
