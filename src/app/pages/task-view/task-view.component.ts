import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
  }

  createNewList(): any {
    this.tasksService.createList('Testing').subscribe((response: any) => {
      console.log(response);
    });
  }

}
