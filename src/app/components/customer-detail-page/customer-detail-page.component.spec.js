describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('customerManagement'));

  beforeEach(inject(($controller) => {
    vm = $controller('CustomerDetailPageCtrl');
  }));

  it('should have an object with Customer ID', () => {
    expect(this.all_data[0].customerID).toEqual(jasmine.any(Number));
  });

  it('Customer List Object Should be Defined', () => {
    expect(angular.isArray(this.all_data)).toBeTruthy();
  });
});