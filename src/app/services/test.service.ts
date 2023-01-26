import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  guests = [
    {
      name: 'Akira',
      surname: 'Toriyama',
      stillInOurHotel: true,
    },
    {
      name: 'Eichiro',
      surname: 'Oa',
      stillInOurHotel: true,
    },
    {
      name: 'Marc',
      surname: 'Crilley',
      stillInOurHotel: false,
    },
    {
      name: 'Johnny ',
      surname: 'Depp',
      stillInOurHotel: false,
    },
  ];
  renderGuests() {
    return this.guests;
  }
  renderGuestsByI(i: number) {
    return this.guests[i];
  }
}
