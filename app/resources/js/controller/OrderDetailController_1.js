'use strict';

/**
 * OrderController_
 * @constructor
 */
<!-- include in index-route_1.html -->
// Ok- ClassicModelsApp.controller("OrderListCtrl",
CM_SalesInfoController.controller("OrderDetailListCtrl",
                                 ['$scope', '$http', '$routeParams',
                        function( $scope, $http, $routeParams ){
    $scope.orderDetailData = {};
    $scope.origOrderDetailData = {};
    $scope.orderData = {};
    $scope.prodLineData = {};

    $scope.editMode = false;
    $scope.isDisableVal = true;
    $scope.isOrderFrmReadonly = true;

    // $scope.isDisableQryRepSales = true;
    $scope.txtCollOrderFrom = 'Expand OrderFrom';
    $scope.gicCollOrderFromIcon = 'glyphicon glyphicon-collapse-down';
    $scope.ariaExpanded_value = false;
    //$scope.isShownCustFrm = false;
    $scope.txtManipulationFormHead = 'Order Detail From';
    $scope.orderDetailData = $routeParams.paramSelOrderDetail;
    $scope.orderData = $routeParams.paramSelOrder;
    $scope.customerData = $routeParams.paramSelCustomer;


    $scope.initialData = function() {
        if (angular.isDefined($scope.orderData) &&
            angular.isObject($scope.orderData)) {
            if (angular.isObject($scope.orderDetailData)&&
                (! $scope.orderDetailData.orderNumber)) {
                $scope.orderDetailData.orderNumber = $scope.orderData.orderNumber;
            }
        }
        //$scope.fetchOrderDetailList();
        //$scope.predicate = 'orderNumber';
    };

    $scope.fetchOrderDetailList = function() {
                              // $scope.OrderDetailList= []; // for test

        $scope.OrderDetailList=
              [{"orderNumber":10123,"productCode":"S18_1589","quantityOrdered":26,"priceEach":120.71,"orderLineNumber":2},
               {"orderNumber":10123,"productCode":"S18_2870","quantityOrdered":46,"priceEach":114.84,"orderLineNumber":3},
               {"orderNumber":10123,"productCode":"S18_3685","quantityOrdered":34,"priceEach":117.26,"orderLineNumber":4},
               {"orderNumber":10123,"productCode":"S24_1628","quantityOrdered":50,"priceEach":43.27,"orderLineNumber":1}]

    };

    $scope.fetchProdLineList = function() {
        $scope.ProdLineList =
            [{"productLine":"Classic Cars","textDescription":"Attention car enthusiasts: Make your wildest car ownership dreams come true. Whether you are looking for classic muscle cars, dream sports cars or movie-inspired miniatures, you will find great choices in this category. These replicas feature superb attention to detail and craftsmanship and offer features such as working steering system, opening forward compartment, opening rear trunk with removable spare wheel, 4-wheel independent spring suspension, and so on. The models range in size from 1:10 to 1:24 scale and include numerous limited edition and several out-of-production vehicles. All models include a certificate of authenticity from their manufacturers and come fully assembled and ready for display in the home or office.",
              "htmlDescription":"http://www.kia.com/de/modelle/kia-picanto-5-tuerer/konfigurator/#","image":"../images/prodLines/01_detail-s.jpg"},
             {"productLine":"Motorcycles","textDescription":"Our motorcycles are state of the art replicas of classic as well as contemporary motorcycle legends such as Harley Davidson, Ducati and Vespa. Models contain stunning details such as official logos, rotating wheels, working kickstand, front suspension, gear-shift lever, footbrake lever, and drive chain. Materials used include diecast and plastic. The models range in size from 1:10 to 1:50 scale and include numerous limited edition and several out-of-production vehicles. All models come fully assembled and ready for display in the home or office. Most include a certificate of authenticity.","htmlDescription":null,"image":"../images/prodLines/03_detail-s.jpg"},
             {"productLine":"Planes","textDescription":"Unique, diecast airplane and helicopter replicas suitable for collections, as well as home, office or classroom decorations. Models contain stunning details such as official logos and insignias, rotating jet engines and propellers, retractable wheels, and so on. Most come fully assembled and with a certificate of authenticity from their manufacturers.","htmlDescription":null,"image":"../images/prodLines/04_detail-s.jpg"},
             {"productLine":"Ships","textDescription":"The perfect holiday or anniversary gift for executives, clients, friends, and family. These handcrafted model ships are unique, stunning works of art that will be treasured for generations! They come fully assembled and ready for display in the home or office. We guarantee the highest quality, and best value.","htmlDescription":null,"image":null},
             {"productLine":"Trains","textDescription":"Model trains are a rewarding hobby for enthusiasts of all ages. Whether you're looking for collectible wooden trains, electric streetcars or locomotives, you'll find a number of great choices for any budget within this category. The interactive aspect of trains makes toy trains perfect for young children. The wooden train sets are ideal for children under the age of 5.","htmlDescription":null,"image":null},
             {"productLine":"Trucks and Buses","textDescription":"The Truck and Bus models are realistic replicas of buses and specialized trucks produced from the early 1920s to present. The models range in size from 1:12 to 1:50 scale and include numerous limited edition and several out-of-production vehicles. Materials used include tin, diecast and plastic. All models include a certificate of authenticity from their manufacturers and are a perfect ornament for the home and office.","htmlDescription":null,"image":null},
             {"productLine":"Vintage Cars","textDescription":"Our Vintage Car models realistically portray automobiles produced from the early 1900s through the 1940s. Materials used include Bakelite, diecast, plastic and wood. Most of the replicas are in the 1:18 and 1:24 scale sizes, which provide the optimum in detail and accuracy. Prices range from $30.00 up to $180.00 for some special limited edition replicas. All models include a certificate of authenticity from their manufacturers and come fully assembled and ready for display in the home or office.","htmlDescription":null,"image":null}]
    };

    $scope.fetchProductList = function() {
        $scope.ProductList =
            [{"productCode":"S24_4018","productName":"1912 Porsche Cayenne Turbo Silver","productScale":"1:24","productVendor":"Exoto Designs","productDescription":"This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.","quantityInStock":6582,"buyPrice":69.78,"msrp":118.28},
             {"productCode":"S24_4028","productName":"1922 Porsche Cayenne Turbo Silver","productScale":"1:24","productVendor":"Exoto Designs","productDescription":"This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.","quantityInStock":6582,"buyPrice":69.78,"msrp":118.28},
             {"productCode":"S24_4038","productName":"1932 Porsche Cayenne Turbo Silver","productScale":"1:24","productVendor":"Exoto Designs","productDescription":"This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.","quantityInStock":6582,"buyPrice":69.78,"msrp":118.28},
             {"productCode":"S24_4048","productName":"1942 Porsche Cayenne Turbo Silver","productScale":"1:24","productVendor":"Exoto Designs","productDescription":"This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.","quantityInStock":0,"buyPrice":69.78,"msrp":118.28},
             {"productCode":"S24_4058","productName":"1952 Porsche Cayenne Turbo Silver","productScale":"1:24","productVendor":"Exoto Designs","productDescription":"This replica features opening doors, superb detail and craftsmanship, working steering system, opening forward compartment, opening rear trunk with removable spare, 4 wheel independent spring suspension as well as factory baked enamel finish.","quantityInStock":6582,"buyPrice":69.78,"msrp":118.28}]
    };

    $scope.clickCollapseOrderForm = function(){
        // console.log($scope.ariaExpanded_value); // for test
        if (! $scope.ariaExpanded_value) {
           $scope.txtCollOrderFrom = 'Collapse OrderForm';
           $scope.ariaExpanded_value = true;
           $scope.gicCollOrderFromIcon = 'glyphicon glyphicon-collapse-up';
           //$scope.fetchOrderData();

        } else {
           $scope.txtCollOrderFrom = 'Expand Orderdetails';
           $scope.ariaExpanded_value = false;
           $scope.gicCollOrderFromIcon = 'glyphicon glyphicon-collapse-down';
        }
    };

    $scope.selectProdLine = function(pSelProdLine) {
        // TODO - fetchProducts by pSelProdLine
        $scope.prodLineData = pSelProdLine;
        $scope.fetchProductList();
        //$scope.defaultSelProdItem = $scope.ProductList[0];
    }

    $scope.clickProdItem = function(pProdItem) {
        $scope.orderDetailData.productCode = pProdItem.productCode;
        $scope.orderDetailData.priceEach = pProdItem.buyPrice;
    }

    $scope.pickupProdItem = function(pProdItem) {
        $scope.orderDetailData.productCode = pProdItem.productCode;
    }

    $scope.qryOrderByOrderNo = function (pOrderNo) {

        $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'OrdersJson/' + pOrderNo}).
                                    success(function(data, status, headers, config) {
                                        // $scope.orderData = data;
                                        $scope.fetchOrderList([data]);
                                    }).
                                    error(function(data, status, headers, config) {
                                    });

        // for test - TODO 2016/02/05
        $scope.fetchOrderDetailList();
    };


    $scope.initialData();


}]);