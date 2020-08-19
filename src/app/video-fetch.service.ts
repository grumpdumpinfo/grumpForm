import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideoFetchService {

  constructor(
    private http: HttpClient,
  ) { }

  getVideo(videoID) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyBMHmSGnRbhclyQ2-B2bjKAnrbVnVA-NJc`)
  }
}
