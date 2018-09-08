class adminModuleServices {

	constructor($http) {
		this.$http = $http;
  }
  get = () => {
    return this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.data;
      });
  }
}

adminModuleServices.$inject = ['$http']

export default angular.module('services.adminModuleServices', [])
	.service('adminModuleServices', adminModuleServices)
	.name;
