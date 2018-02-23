import { Document } from './../../typedef/document';
import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document/document.service';

@Component({
  selector: 'fea-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor(
    private _documentService: DocumentService
  ) { }

  ngOnInit() {
    this._documentService.$documents.subscribe((documents:Document[])=>{
      this.documents = documents;
    });
  }

  public documents:Document[] = [];
  public selectedDocument:Document;

  public add(){

  }
  
  public edit(){

  }

}
