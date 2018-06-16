export class CustomerDetailPageCtrl {

  constructor(toastr, $state) {
    'ngInject';

    this.all_data = JSON.parse(localStorage.getItem("customer_data"));

    this.check = (i) => {
      if (i.customerID == $state.params.customer_id) {
        return i;
      }
    };

    this.customer_data = this.all_data.filter(this.check);

    this.customer_data = this.customer_data[0];

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

    this.removeCustomer = (id) => {
      return `${first} ${last}`;
    };

    this.saveEnable = () => {
      if($state.params.customer_id== "add"){
      	return true;
      }
    };

    this.EditCustomer = (first, last) => {
      return `${first} ${last}`;
    };


  }

}
