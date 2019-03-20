import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
    videos:any[]=[];
    videosel:any="";
  constructor(private yt:YoutubeService) {
      this.yt.getVideos().subscribe(
          videos=>{
              this.videos=videos;
          }
      );
  }

  ngOnInit() {
  }


  verVideo(video:any){
      this.videosel=video;
      $('#exampleModalCenter').modal();
  }

  cerrarModal(){
      this.videosel=null;
      $('#exampleModalCenter').modal('hide');
  }


  cargarMas(){
      this.yt.getVideos().subscribe(
          videos=>{
              this.videos.push.apply(this.videos, videos);
          }
      );
  }
}
