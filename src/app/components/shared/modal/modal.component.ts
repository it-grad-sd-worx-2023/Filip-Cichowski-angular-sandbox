import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cars } from '../../../models/cars';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit{
  modalRef: BsModalRef = new BsModalRef();
  @Input() item: Cars | any;
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {
    console.log("Item:",this.item);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalRef.hide();

  }
}
