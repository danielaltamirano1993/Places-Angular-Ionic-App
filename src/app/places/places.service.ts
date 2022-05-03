import { Injectable } from "@angular/core";
import { Place } from "../places/place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: "Eiffel Tower",
      imageURL:
        "https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg",
      comments: ["Awesome place", "wonderful experience"]
    },
    {
      id: "2",
      title: "Statue of Liberty",
      imageURL:
        "https://inteng-storage.s3.amazonaws.com/img/iea/ypwqn1mmON/sizes/statue-of-liberty_resize_md.jpg",
      comments: ["Awesome place", "wonderful experience"]
    }
  ];

  constructor() {}

  getPlaces(): Place[] {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }

  addPlace(title, imageURL) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

}
