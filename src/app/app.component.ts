import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<any>;
  myTags$: Observable<any>;
  contacts$: Observable<any>

  constructor(private afs: AngularFirestore) {
    this.user$ = afs.doc<any>('users/IgVEtUQILQceBF53u79o').valueChanges();
    this.contacts$ = afs.collection<any[]>('users/IgVEtUQILQceBF53u79o/contacts').valueChanges();
    this.contacts$.subscribe((res: AngularFirestoreDocument<any>) => { console.log(res) });
  }
} 
