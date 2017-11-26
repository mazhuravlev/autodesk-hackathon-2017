import { Component, OnInit } from '@angular/core';
import {PanelOrderDto} from "../../dto/panel-order.dto";
import {ApiService} from "../../services/api.service";
import {PanelDto} from "../../dto/panel.dto";
import {PanelOrderInboundDto} from "../../dto/panel-order-inbound.dto";
import {SnackService} from "../../services/snack.service";
import {ViewerService} from "../../services/viewer.service";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  public orders: PanelOrderInboundDto[];
  private selectedOrder: PanelOrderDto;

  constructor(private apiService: ApiService,
              private viewerService: ViewerService,
              private snackService: SnackService) { }

  ngOnInit() {
    this.apiService.getPanelOrders().subscribe(orders => {
      this.orders = orders
    });
  }

  public selectOrder(order: PanelOrderDto) {
    this.selectedOrder = order;
  }

  public shipOrder(order: PanelOrderDto) {
    this.selectedOrder = null;
    this.apiService.shipOrder(order).subscribe(() => {
      this.snackService.success('Заказ отгружен');
    }, err => {
      this.snackService.error(err.error ? err.error.error.message : err.message)
    });
  }

  public selectPanel(panel: PanelDto){
    this.viewerService.showOneElement(panel.forgeId);
  }
}
