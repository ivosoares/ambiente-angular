import { ListService } from './../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.scss']
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result?.results;
      console.log(this.personagens);
    })
  }

}
