
//file for include routes 
routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
    //   $urlRouterProvider.otherwise('login');
  $stateProvider
     .state('login', {
            abstract: false,
            url: '/login',
            template: require('./admin/login/login.html'),
            controller: 'loginController',
            controllerAs:'login'           
        })
        .state('darshboard', {
            url: '/darshboard',
            template: require('./admin/dashboard/dashboard.html'),          
        })
        .state('darshboard.home', {
            url: '/home',
            template: require('./admin/home/home.html'),
            controller: 'homeController',
            controllerAs:'home'          
        })      
        .state('darshboard.user', {
            url: '/user',
            template: require('./admin/user/user.html'),
            controller: 'userController',
            controllerAs:'user'          
        })   
}
