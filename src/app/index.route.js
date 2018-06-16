export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('overview-page', {
      url: '/',
      templateUrl: 'app/components/overview-page/overview-page.component.html',
      controller: 'OverviewPageCtrl',
      controllerAs: 'overviewCtrl'
    })
    .state('customer-detail-page', {
      url: '/customer-detail-page/:customer_id/',
      templateUrl: 'app/components/customer-detail-page/customer-detail-page.component.html',
      controller: 'CustomerDetailPageCtrl',
      controllerAs: 'custPageCtrl'
    })
    
    ;

  $urlRouterProvider.otherwise('/');
}
