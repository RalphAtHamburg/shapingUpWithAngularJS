(function(){

  // Create module store-directives  
  var app = angular.module('store-directives', []);

  // Element directive for the product descriptiom
  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });
 
  // Element directive for the product reviews
  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  // Attribute directive for the product specs
  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  // Element directive for the tab panel  /
  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        // The active tab
        this.tab = 1;

        // check if a specific tab is active 
        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        // sets the selected tab to the current tab
        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  // Element directive for the image gallery
  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
  
})();
