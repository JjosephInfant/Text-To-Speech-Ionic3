import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ttsText = "Android is a mobile operating system developed by Google, based on a modified version of the Linux kernel and other open source software and designed primarily for touchscreen mobile devices such as smartphones and tablets. In addition, Google has further developed Android TV for televisions, Android Auto for cars, and Wear OS for wrist watches, each with a specialized user interface. Variants of Android are also used on game consoles, digital cameras, PCs and other electronics.Initially developed by Android Inc., which Google bought in 2005, Android was unveiled in 2007, with the first commercial Android device launched in September 2008. The operating system has since gone through multiple major releases, with the current version being 9.0 Pie, released in August 2018. The core Android source code is known as Android Open Source Project (AOSP), and is primarily licensed under the Apache License.Android is also associated with a suite of proprietary software developed by Google, called Google Mobile Services[10] (GMS) that very frequently comes pre-installed in devices, which usually includes the Google Chrome web browser and Google Search and always includes core apps for services such as Gmail, as well as the application store and digital distribution platform Google Play, and associated development platform. These apps are licensed by manufacturers of Android devices certified under standards imposed by Google, but AOSP has been used as the basis of competing Android ecosystems, such as Amazon.com's Fire OS, which use their own equivalents to GMS.";
  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

  }

  openTTS() {
    this.tts .speak({
      text: this.ttsText,
      locale: 'en-GB',
      rate: 1.5
  })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
