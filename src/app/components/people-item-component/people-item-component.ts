import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { People } from '../../interfaces/people-response-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleModal } from '../people-modal/people-modal';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {

  people = input<People>();

  peopleClicked = output<string>();

  id : string = '';

  getPeopleId() {
    this.id = this.people()?.url.split('/')[5]!;
    return this.id;

}

emitPeopleClicked() {
  const id = this.getPeopleId();
  this.peopleClicked.emit(id);
}

}
