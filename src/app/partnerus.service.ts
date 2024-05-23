import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerusService {

  constructor() { }
  getPartners() {
    return [
      {
        prt_company: 'Microsoft',
        prt_trademark: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        prt_sponsor: 'Platinum',
        prt_website: 'https://www.microsoft.com',
      },
      {
        prt_company: 'Apple',
        prt_trademark: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        prt_sponsor: 'Gold',
        prt_website: 'https://www.apple.com',
      },
      {
        prt_company: 'Amazon',
        prt_trademark: 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
        prt_sponsor: 'Silver',
        prt_website: 'https://www.amazon.com',
      },
      {
        prt_company: 'Google',
        prt_trademark: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        prt_sponsor: 'Bronze',
        prt_website: 'https://www.google.com',
      },      
    ];
  }
}
