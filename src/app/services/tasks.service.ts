import {Injectable} from '@angular/core';
import {WebRequestsService} from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webRequestsService: WebRequestsService) {
  }

  createList(title: string): any {
    return this.webRequestsService.post('lists', { title });
  }
}
