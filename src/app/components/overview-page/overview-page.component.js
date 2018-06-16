export class OverviewPageCtrl {

  constructor(toastr, CustData, $state) {
    'ngInject';

    if (typeof(Storage) !== "undefined") {

      let local_data = localStorage.getItem("customer_data");

      if (local_data == null || angular.equals(JSON.parse(local_data), [])) {
        this.customerData = JSON.stringify(CustData.getData());
        localStorage.setItem("customer_data", this.customerData);
      }

      this.customerData = JSON.parse(localStorage.getItem("customer_data"));

    } else {
      toastr.info("Storage Not Supported");
    }


    this.getFullName = (first, last) => {
      return `${first} ${last}`;
    };

    this.getPresentableGender = (gen) => {
      var present = "Female";
      if (gen == "m") {
        present = "Male"
      }
      return present;
    };

    this.edit_customer = (id) => {
      $state.go('customer-detail-page', { customer_id: id });
    };

    this.retun_new = (id,data) => {
     if (id.customerID == this.current_del) {
        this.customerData.splice(data, 1);
        let updated_data = JSON.stringify(this.customerData);
        localStorage.setItem("customer_data", updated_data);
      }
    };

    this.remove_customer = (data) => {

    	this.current_del = data;
      	this.customerData.map(this.retun_new);

    };

  }

}
