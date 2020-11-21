import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { VideoFetchService } from '../video-fetch.service'

@Component({
  selector: 'grump-form',
  templateUrl: './grump-form.component.html',
  styleUrls: ['./grump-form.component.css']
})
export class GrumpFormComponent implements OnInit {

  constructor(
    private VideoFetchService: VideoFetchService
  ) { }

  URLForm = new FormGroup({
    videoURL: new FormControl('')
  })
  haveURL = false;
  embedURL: String;
  googleFetch: Object;
  videoID = "videoID needed";

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
