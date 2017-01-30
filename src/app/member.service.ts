import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {

  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                house: localUpdatedMember.house,
                                patronus: localUpdatedMember.patronus});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
    //deleteMember() takes the local copy of the Member, calls the existing getMemberById() method to locate the Firebase entry, calls localMemberToDelete.$key within the argument to getMemberById(), and after the database entry has been located, AngularFire's built in remove() method is called on memberEntryInFirebase which removes the entire entry from Firebase.
  }
}
