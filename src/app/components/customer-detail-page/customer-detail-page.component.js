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

    this.saveEnable = () => {
        return $state.params.customer_id;
    };

    if(this.saveEnable()=='add'){
    	this.customer_data = {};
    	this.customer_data.customerID = Number(Object.keys(this.all_data)[this.all_data.length-1]);
    	this.customer_data.customerID += 1;
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

    this.retun_new_removed = (id, data) => {
      if (id.customerID == this.current_del) {
        this.customerData.splice(data, 1);
        let updated_data = JSON.stringify(this.customerData);
        localStorage.setItem("customer_data", updated_data);
        $state.go("overview-page");
      }
    };

    this.removeCustomer = (data) => {
      this.customerData = JSON.parse(localStorage.getItem("customer_data"));
      this.current_del = data;
      this.customerData.map(this.retun_new_removed);
    };

    this.retun_new_replace = (id, data) => {
      if (id.customerID == this.current_del) {
        this.customerData.splice(data, 1);
        
      }
    };

    this.EditCustomer = (data) => {
      this.customerData = JSON.parse(localStorage.getItem("customer_data"));
      this.current_del = data;
      this.customerData.map(this.retun_new_replace);
      this.customerData.push(this.customer_data);
      let updated_data = JSON.stringify(this.customerData);
      localStorage.setItem("customer_data", updated_data);
       $state.go("overview-page");
    };

    

    


  }

}
