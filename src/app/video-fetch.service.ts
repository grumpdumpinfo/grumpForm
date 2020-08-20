import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'

export interface YTData {
  etag: String, 
  items: [{
    etag: String,
    id: String,
    kind: String,
    snippet: {
      categoryId: String,
      channelId: String,
      channelTitle: String,
      defaultAudioLanguage: String,
      defaultLanguage: String,
      description: String,
      liveBroadcastContent: String,
      localized: {
        description: String,
        title: String,
      },
      publishedAt: String,
      tags: string[],
      thumbnails: Object,
      title: String
    },
  }],
  kind: String,
  pageInfo: Object,
}

@Injectable({
  providedIn: 'root'
})
export class VideoFetchService {

  constructor(
    private http: HttpClient,
  ) { }

  getVideo(videoID) {
    return this.http.get<YTData>(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyBMHmSGnRbhclyQ2-B2bjKAnrbVnVA-NJc`)
  }
}
