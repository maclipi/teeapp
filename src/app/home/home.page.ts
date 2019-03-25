import { Component } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    public loadingController: LoadingController,
    private geolocation: Geolocation
  ) {}
  ionViewWillEnter() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch(error => {
        console.log("Error getting location", error);
      });

    const watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

    this.presentLoadingWithOptions();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Hellooo",
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log("Loading dismissed!");
  }
  async presentLoadingWithOptions() {
    let tnc = window.localStorage.getItem("tnc");
    if (tnc !== "true") window.location.assign("/tnc");
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: "Please wait...",
      translucent: true,
      cssClass: "custom-class custom-loading"
    });

    return await loading.present();
  }
}
