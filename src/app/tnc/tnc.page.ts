import { Component, OnInit } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";

import { HomePage } from "../home/home.page";

@Component({
  selector: "app-tnc",
  templateUrl: "./tnc.page.html",
  styleUrls: ["./tnc.page.scss"]
})
export class TncPage implements OnInit {
  constructor(public navCtrl: NavController, public platform: Platform) {}
  public setVal() {
    window.localStorage.setItem("tnc", "true");
    let tnc = window.localStorage.getItem("tnc");
    console.log(tnc);
    if (tnc == "true") window.location.assign("/home");
  }

  ngOnInit() {
    let tnc = window.localStorage.getItem("tnc");
    console.log(tnc);
    if (tnc == "true") {
      window.location.assign("/home");
    }
  }
}
