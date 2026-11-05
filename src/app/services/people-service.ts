import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponseList } from '../interfaces/people-response-list';
import { PeopleResponseDetail } from '../interfaces/people-response-detail';

@Service()
export class PeopleService {
    http = inject(HttpClient);




    getAll(): Observable<PeopleResponseList>{
        return this.http.get<PeopleResponseList>('https://swapi.dev/api/people/');
    }

    getOne(id: number | string): Observable<PeopleResponseDetail> {
        return this.http.get<PeopleResponseDetail>(`https://swapi.dev/api/people/${id}/`);
    }
}
