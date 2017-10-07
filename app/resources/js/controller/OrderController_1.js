'use strict';

/**
 * OrderController_
 * @constructor
 */
<!-- include in index-route_1.html -->
// Ok- ClassicModelsApp.controller("OrderListCtrl",
CM_SalesInfoController.controller("OrderListCtrl",
                                ['$scope', '$http', '$routeParams', '$location', 'ClassicMdConfig',
                       function( $scope, $http, $routeParams, $location, ClassicMdConfig ){
    $scope.orderData = {};
    $scope.origOrderData = {};
    $scope.OrderList = [];

    $scope.editMode = false;
    // $scope.employee = {};
    $scope.isDisableVal = true;
    // $scope.isDisableQryRepSales = true;
    $scope.txtCollOrderDetails = 'Expand Orderdetails';
    $scope.gicCollOrderDetailsIcon = 'glyphicon glyphicon-collapse-down';
    $scope.ariaExpanded_value = false;

    $scope.isShownCustFrm = false;
    $scope.txtManipulationFormHead = 'Order From';
    $scope.error = false;
    $scope.txtMessage = ''
    $scope.customer = $routeParams.paramSelCustomer;

    $scope.qryCondValue = null;
    $scope.qryOrderCondList = [{name:'ByOrderNo', displayTxt: 'OrderNo.'}, {name:'ByCustNo', displayTxt: 'CustNo.'}];
    $scope.qryOrderCondition = '';

    $scope.initialFuncControll = function() {
        if (angular.isObject($scope.customer)) {
            $scope.clickShowOrderForm(false);
            $scope.isDisableVal = false;
        }
    };

    $scope.initialData = function() {

        if (angular.isDefined($scope.customer) &&
            angular.isObject($scope.customer)) {
            // TODO Query
            //$scope.fetchOrderList([]);
            $scope.qryOrderByCustNo($scope.customer.customerNumber);
            $scope.predicate = 'orderNumber';
        }

        $scope.qryOrderCondition = $scope.qryOrderCondList[0].name; // default condition
    };

    $scope.fetchOrderList = function(pOrderList) {

        $scope.OrderList = pOrderList;
        $scope.predicate = 'orderNumber';
        $scope.setMsg('Fetch the number of record: ' + $scope.OrderList.length.toString());
        //console.log('OrderList[0].orderNo:' + $scope.OrderList[0].orderNumber);
        $scope.customer = $scope.OrderList[0].customers;
        //console.log('OrderList[0].CustNo:' + $scope.OrderList[0].customers.customerNumber);


        /*
        $http({method: 'GET', url: '/ClassicModels15_AJs1/Orders'}).
            success(function(data, status, headers, config) {
                $scope.OrderLis = data;
            }).
            error(function(data, status, headers, config) {
            });
        */
        // for test
        /*
        $scope.OrderList=
            [{"orderNumber":10123,"orderDate":1053360000000,"requiredDate":1054137600000,"shippedDate":1053532800000,"status":"Shipped","comments":null,"customers":{"customerNumber":103,"customerName":"Atelier graphique","contactLastName":"Schmitt test21","contactFirstName":"Carine ","phone":"40.32.2666","addressLine1":"54, rue Royale","addressLine2":null,"city":"Nantes","state":null,"postalCode":"44000","country":"France","creditLimit":21000}},
             {"orderNumber":10298,"orderDate":1096214400000,"requiredDate":1096905600000,"shippedDate":1096560000000,"status":"Shipped","comments":null,"customers":103},
             {"orderNumber":10345,"orderDate":1101312000000,"requiredDate":1101830400000,"shippedDate":1101398400000,"status":"Shipped","comments":null,"customers":103}];
        */
    };

    $scope.fetchOrderDetailList = function(pOrderNo) {

        $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'OrdersJson/' + pOrderNo + '/orderdetailses'}).
            success(function(data, status, headers, config) {
                // $scope.orderData = data;
                // $scope.fetchOrderList([data]);
                $scope.OrderDetailList = data;
            }).
            error(function(data, status, headers, config) {
            });

        // $scope.OrderDetailList= []; // for test
        // for test
        /*
        $scope.OrderDetailList=
            [{"orderNumber":10123,"productCode":"S18_1589","quantityOrdered":26,"priceEach":120.71,"orderLineNumber":2},
             {"orderNumber":10123,"productCode":"S18_2870","quantityOrdered":46,"priceEach":114.84,"orderLineNumber":3},
             {"orderNumber":10123,"productCode":"S18_3685","quantityOrdered":34,"priceEach":117.26,"orderLineNumber":4},
             {"orderNumber":10123,"productCode":"S24_1628","quantityOrdered":50,"priceEach":43.27,"orderLineNumber":1}]
        */
    };

    $scope.fetchAllOrders = function () {

        // TODO func. put into common lib.
        $scope.resetMsg();
        // $scope.fetchOrderList([]);
        $scope.predicate = 'orderNumber';
        $scope.editMode = false;
    };

    $scope.clickCollapseOrderDetails = function(){
        // console.log($scope.ariaExpanded_value); // for test
        if (! $scope.ariaExpanded_value) {
            $scope.txtCollOrderDetails = 'Collapse Orderdetails';
            $scope.ariaExpanded_value = true;
            $scope.gicCollOrderDetailsIcon = 'glyphicon glyphicon-collapse-up';
            $scope.fetchOrderDetailList($scope.orderData.orderNumber);
            $scope.detailOrder = 'orderLineNumber';
        } else {
            $scope.txtCollOrderDetails = 'Expand Orderdetails';
            $scope.ariaExpanded_value = false;
            $scope.gicCollOrderDetailsIcon = 'glyphicon glyphicon-collapse-down';
        }
    };

    $scope.updateOrderForm = function (pOrderData) {

    };

    $scope.editOrderData = function (pOrderData) {
        // TODO func. put into common lib.
        $scope.resetMsg();
        $scope.orderData = pOrderData;
        $scope.origOrderData = angular.copy(pOrderData);
        $scope.editMode = true;

        $scope.isDisableVal = false;
        $scope.clickShowOrderForm(true);

        // $scope.orderData.orderDate = new Date($scope.orderData.orderDate);
        $scope.orderData.orderDate = $scope.convertDateFormat($scope.orderData.orderDate);
        $scope.orderData.requiredDate = $scope.convertDateFormat($scope.orderData.requiredDate);
        $scope.orderData.shippedDate = $scope.convertDateFormat($scope.orderData.shippedDate);
    };

    $scope.convertDateFormat = function (pDate){
        console.log(pDate); // for test
        return (new Date(pDate));
    };

    $scope.clickShowOrderForm = function (pIsShowOrder) {
        if (pIsShowOrder) {
            $scope.txtManipulationFormHead = 'Order Form';
        } else {
            $scope.txtManipulationFormHead = 'Customer Form';
        }
        $scope.isShownCustFrm = (!pIsShowOrder);
    };

    // $scope.editOrderDetailsData = function(path, pOrderDetail){
    $scope.switch2OrdetailPage = function(path, pOrder, pOrderDetail, pCustomer){
        // var selCustomer = pCustomer;
        // $location.path(path).search({paramSelOrder:pOrder ,paramSelOrderDetail: pOrderDetail});
        $location.path(path).search({paramSelOrder:pOrder ,paramSelOrderDetail: pOrderDetail, paramSelCustomer:pCustomer});
    };

    $scope.qryOrderByCond = function() {
        if (!($scope.qryCondValue)) {
            $scope.setErrorMsg('The input data of condition is empty!!');
        } else {
            $scope.resetMsg();
            $scope.resetData();
            $scope.ariaExpanded_value = true;
            $scope.clickCollapseOrderDetails();
            // Query by OrderNo.
            if ($scope.qryOrderCondition == $scope.qryOrderCondList[0].name) {
                $scope.qryOrderByOrderNo($scope.qryCondValue);


            } else { // Query by CustomerNo.
                $scope.qryOrderByCustNo($scope.qryCondValue);
            }
        }
    };

    $scope.qryOrderByOrderNo = function (pOrderNo) {
        /*
         $http({method: 'GET', url: '/ClassicModels15_AJs1/Orders'}).
         success(function(data, status, headers, config) {
         $scope.OrderLis = data;
         }).
         error(function(data, status, headers, config) {
         });
         */
        // $http({method: 'GET', url: 'http://jbossews-bluedream.rhcloud.com/OrdersJson/' + pOrderNo}).
        $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'OrdersJson/' + pOrderNo}).
            success(function(data, status, headers, config) {
                // $scope.orderData = data;
                $scope.fetchOrderList([data]);
            }).
            error(function(data, status, headers, config) {
            });

        // for test - TODO 2016/02/05
        /*
        $scope.OrderList=
            [{"orderNumber":10123,"orderDate":1053360000000,"requiredDate":1054137600000,"shippedDate":1053532800000,"status":"Shipped","comments":null,"customers":{"customerNumber":103,"customerName":"Atelier graphique","contactLastName":"Schmitt test21","contactFirstName":"Carine ","phone":"40.32.2666","addressLine1":"54, rue Royale","addressLine2":null,"city":"Nantes","state":null,"postalCode":"44000","country":"France","creditLimit":21000}}];

        $scope.setMsg('Fetch the number of record: ' + $scope.OrderList.length.toString());
        */
    };

    $scope.qryOrderByCustNo = function (pCustNo) {
        /*
         $http({method: 'GET', url: '/ClassicModels15_AJs1/Orders'}).
         success(function(data, status, headers, config) {
         $scope.OrderLis = data;
         }).
         error(function(data, status, headers, config) {
         });
        */
        // $http({method: 'GET', url: 'http://jbossews-bluedream.rhcloud.com/CustomersJson/' + pCustNo +'/orderses'}).
        $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'CustomersJson/' + pCustNo +'/orderses'}).
            success(function(data, status, headers, config) {
                $scope.fetchOrderList(data);
            }).
            error(function(data, status, headers, config) {
            });


        // for test - TODO 2016/02/05
        // $scope.fetchOrderList();
    };

    $scope.resetData = function() {
        $scope.orderData = {};
        /* TODO CollapseOrderDetails
        if ($scope.ariaExpanded_value) {
            $scope.ariaExpanded_value = false;
            $scope.clickCollapseOrderDetails();
        }
        */
    };

    // TODO; common lib.
    $scope.resetMsg = function () {
        $scope.error = false;
        $scope.txtMessage = '';
    };

    $scope.setErrorMsg = function(message) {
        $scope.error = true;
        $scope.txtMessage = message;
    };

    $scope.setMsg = function(message) {
        $scope.error = false;
        $scope.txtMessage = message;
    };

    // * process begin -------------------- *
    $scope.initialFuncControll();
    $scope.initialData();


}]);