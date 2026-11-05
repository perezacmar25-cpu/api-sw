import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleModal } from '../people-modal/people-modal';
import { People } from '../../interfaces/people-response-list';
import { PeopleService } from '../../services/people-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleItemComponent } from '../people-item-component/people-item-component';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {

  
  peopleService = inject(PeopleService);
  peopleList = signal<People []>([]);
  private modalService = inject(NgbModal);

  ngOnInit():void{
    this.peopleService.getAll().subscribe(response => {
      this.peopleList.set(response.results);
    });
  }

  openPeopleModal (id: string | number) {
    return this.peopleService.getOne(+id).subscribe(resp => {
      const modalRef = this.modalService.open(PeopleModal);
      modalRef.componentInstance.peopleDetail = resp;
    });
  }
}
