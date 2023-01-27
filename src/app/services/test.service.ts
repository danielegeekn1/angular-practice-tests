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
      color: 'green',
    },
    {
      name: 'Eichiro',
      surname: 'Oda',
      stillInOurHotel: true,
      color: 'green',
    },
    {
      name: 'Marc',
      surname: 'Crilley',
      stillInOurHotel: false,
      color: 'red',
    },
    {
      name: 'Johnny ',
      surname: 'Depp',
      stillInOurHotel: false,
      color: 'red',
    },
  ];
  renderGuests() {
    return this.guests;
  }
  renderGuestsByI(i: number) {
    return this.guests[i];
  }
}
