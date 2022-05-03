import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PlacesService } from "../places.service";
import { Place } from "../place.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        // redirect
        this.router.navigate(['/places']);
      }
      const recipeId = paramMap.get("placeId");
      this.place = this.placesService.getPlace(recipeId);
    });
  }

  async deletePlace() {
    const alertElment = await this.alertCtrl.create({
      header: "Are you Sure, You want to delete this place?",
      message: "Be carefull.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Delete",
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigateByUrl("/places");
          }
        }
      ]
    });
    await alertElment.present();
  }
}
