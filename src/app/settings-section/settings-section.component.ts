import { Component, OnInit } from '@angular/core';
import { MbscOptionsService, localeEn, localeAr, localeBg, localeCa, localeCs, localeHr, localeZh, localeDa, localeDe, localeEs, localeFr, localeEl, localeFi, localeHi, localeKo, localeIt, localeJa, localeLt, localeHu, localeNl, localeNo, localePl, localePtPT, localeRo, localeSk, localeSr, localeSv, localeTr, localeVi, localeRu, localeHe, localeFa } from '@mobiscroll/angular';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.css']
})
export class SettingsSectionComponent implements OnInit {


  options = {
    theme: this.optService.options.theme,
    locale: this.optService.options.locale
  };
  
  updateOptions(){
    this.optService.setOptions(this.options);
    this.optService.options.locale = this.options.locale;
    this.optService.options.theme = this.options.theme;
  }
 
  //Saved settings
  set theme(v: string){
    this.options = { ...this.options, theme: v};
  }

  get theme(): string {
    return this.options && this.options.theme;
  }
  
  set lang(v: any){
    this.options = { ...this.options, locale: v};
  }

  get lang(): any {
    return this.options && this.options.locale;
  }

  themes: Array<any> = [
    { value: "ios", text: "iOS" },
    { value: "material", text: "Material" },
    { value: "windows", text: "Windows" },
  ];

  languages: Array<any> = [
    { value: localeEn, text: "English" },
    { value: localeAr, text: "Arabic" },
    { value: localeBg, text: "Bulgarian" },
    { value: localeCa, text: "Català" },
    { value: localeCs, text: "Cestina" },
    { value: localeHr, text: "Croatian" },
    { value: localeZh, text: "Chinese" },
    { value: localeDa, text: "Dansk" },
    { value: localeDe, text: "Deutsch" },
    { value: localeEs, text: "Español" },
    { value: localeFr, text: "Français" },
    { value: localeEl, text: "Greek" },
    { value: localeFi, text: "Finnish" },
    { value: localeHi, text: "Hindi" },
    { value: localeKo, text: "Korean" },
    { value: localeIt, text: "Italiano" },
    { value: localeJa, text: "Japanese" },
    { value: localeLt, text: "Lietuvių" },
    { value: localeHu, text: "Magyar" },
    { value: localeNl, text: "Nederlands" },
    { value: localeNo, text: "Norsk" },
    { value: localePl, text: "Polski" },
    { value: localePtPT, text: "Português" },
    { value: localeRo, text: "Româna" },
    { value: localeSk, text: "Slovencina" },
    { value: localeSr, text: "Serbian" },
    { value: localeSv, text: "Svenska" },
    { value: localeTr, text: "Türkçe" },
    { value: localeVi, text: "Vietnamese" },
    { value: localeRu, text: "Русский" },
    { value: localeHe, text: "עברית" },
    { value: localeFa, text: "فارسی" },
  ];

  constructor(protected optService: MbscOptionsService) { }

  ngOnInit(): void {
  }

}
