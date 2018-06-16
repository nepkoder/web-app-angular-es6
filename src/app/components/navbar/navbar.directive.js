export function NavDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavController {
  constructor (moment) {
    'ngInject';

  }
}
