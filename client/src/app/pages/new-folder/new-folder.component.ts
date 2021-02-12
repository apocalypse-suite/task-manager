import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  constructor(private tasksService: TasksService, private router: Router) {
  }

  ngOnInit(){
  }

  createFolder(title: string): any {
    this.tasksService.createList(title).subscribe((list: List) => {
      this.router.navigate([ '/lists', list._id ]);
    });
  }
}
