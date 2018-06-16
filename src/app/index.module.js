import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { OverviewPageCtrl } from '../app/components/overview-page/overview-page.component';
import { CustomerDetailPageCtrl } from '../app/components/customer-detail-page/customer-detail-page.component';
import { CustomerDataService } from '../app/data/data.service';
import { NavDirective } from '../app/components/navbar/navbar.directive';

angular.module('customerManagement', ['ui.router', 'toastr','angular-loading-bar','ui.bootstrap'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('OverviewPageCtrl', OverviewPageCtrl)
  .controller('CustomerDetailPageCtrl', CustomerDetailPageCtrl)
  .service('CustData', CustomerDataService)
  .directive('navDirective', NavDirective)