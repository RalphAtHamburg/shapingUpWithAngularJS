(function() {

  // Build the gemStone app. Introduce modul 'store-directives' as dependency
  var app = angular.module('gemStore', ['store-directives']);

  // Use the build in ¢http service for the request to the json file
  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    
    $http.get('store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  // Review controller to add reviews to a product
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
  
})();