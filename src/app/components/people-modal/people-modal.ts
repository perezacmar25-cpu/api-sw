import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleResponseDetail } from '../../interfaces/people-response-detail';

@Component({
  imports: [],
  selector: 'app-people-modal',
  styleUrl: './people-modal.css',
  templateUrl: './people-modal.html',
})
export class PeopleModal {

    activeModal = inject(NgbActiveModal);

    @Input () peopleDetail: PeopleResponseDetail | undefined;
}
