import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleModal } from './people-modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('PeopleModal', () => {
  let component: PeopleModal;
  let fixture: ComponentFixture<PeopleModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleModal],
      providers: [NgbActiveModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
