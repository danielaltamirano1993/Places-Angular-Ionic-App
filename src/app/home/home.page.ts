import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos: [];
  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(data => {
        this.photos = data;
      });
  }

}
