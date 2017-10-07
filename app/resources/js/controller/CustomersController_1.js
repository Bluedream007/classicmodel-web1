'use strict';

/**
 * CustomerController_
 * @constructor
 */
// var CustomerController_2 = function($scope, $http) {
<!-- include in index-routing_t1.html -->

// OK - ClassicModelsApp.controller("CustListCtrl",
CM_SalesInfoController.controller("CustListCtrl",
                      ['$scope', '$http', '$location', 'ClassicMdConfig',
                          function( $scope, $http, $location, ClassicMdConfig){
    $scope.customer = {};
    $scope.origCustomer = {};
    $scope.origRepSales = {};
    $scope.CustomerList = [];
    $scope.editMode = false;
    //$scope.employee = {};
    $scope.isDisableVal = true;
    $scope.isDisableQryRepSales = true;
    $scope.isShownCustFrm = true;
    $scope.txtManipulationFormHead = 'Customer From';
    // $scope.txtHintSearchCond = 'Search by ';

    $scope.qryCondValue = null;
    $scope.qryCustCondList = [{name:'ByCustNo', displayTxt: 'CustNo'}, {name:'ByRepSalesNo', displayTxt: 'SalesNo'}];
    // $scope.qryCustCondition = 'ByCustNo';
    $scope.qryCustCondition = '';

    $scope.initiateData = function() {
        console.log('qryCustCondList[0].name: ' + $scope.qryCustCondList[0].name);
        $scope.qryCustCondition = $scope.qryCustCondList[0].name; // default condition

        // for test
        console.log(ClassicMdConfig);
        console.log('App Name', ClassicMdConfig.appName);
    }

    $scope.fetchCustomerList = function() {

        // $http({method: 'GET', url: '/ClassicModels15_AJs1/CustomersJson'}).
        // $http({method: 'GET', url: 'http://jbossews-bluedream.rhcloud.com/CustomersJson'}).
        $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'CustomersJson/'}).
            success(function(data, status, headers, config) {
                $scope.CustomerList = data;
            }).
            error(function(data, status, headers, config) {
            });

       /*
        $http.get('trains/trainslist.json').success(function(trainList){
            $scope.trains = trainList;
        });
        */

        /*
        $scope.CustomerList=
           [{"state":null,"country":"France","phone":"40.32.2555","city":"Nantes","postalCode":"44000","customerNumber":103,"customerName":"Atelier graphique","contactLastName":"Schmitt","contactFirstName":"Carine ","addressLine1":"54, rue Royale","addressLine2":null,"creditLimit":21000},
            {"state":"NV","country":"USA","phone":"7025551838","city":"Las Vegas","postalCode":"83030","customerNumber":112,"customerName":"Signal Gift Stores","contactLastName":"King","contactFirstName":"Jean","addressLine1":"8489 Strong St.","addressLine2":null,"creditLimit":71800},
            {"state":"Victoria","country":"Australia","phone":"03 9520 4555","city":"Melbourne","postalCode":"3004","customerNumber":114,"customerName":"Australian Collectors, Co.","contactLastName":"Ferguson","contactFirstName":"Peter","addressLine1":"636 St Kilda Road","addressLine2":"Level 3","creditLimit":117300},
            {"state":null,"country":"France","phone":"40.67.8555","city":"Nantes","postalCode":"44000","customerNumber":119,"customerName":"La Rochelle Gifts","contactLastName":"Labrune","contactFirstName":"Janine ","addressLine1":"67, rue des Cinquante Otages","addressLine2":null,"creditLimit":118200},
            {"state":null,"country":"Norway","phone":"07-98 9555","city":"Stavern","postalCode":"4110","customerNumber":121,"customerName":"Baane Mini Imports","contactLastName":"Bergulfsen","contactFirstName":"Jonas ","addressLine1":"Erling Skakkes gate 78","addressLine2":null,"creditLimit":81700},
            {"state":"CA","country":"USA","phone":"4155551450","city":"San Rafael","postalCode":"97562","customerNumber":124,"customerName":"Mini Gifts Distributors Ltd.","contactLastName":"Nelson","contactFirstName":"Susan","addressLine1":"5677 Strong St.","addressLine2":null,"creditLimit":210500},
            {"state":null,"country":"Poland","phone":"(26) 642-7555","city":"Warszawa","postalCode":"01-012","customerNumber":125,"customerName":"Havel & Zbyszek Co","contactLastName":"Piestrzeniewicz","contactFirstName":"Zbyszek ","addressLine1":"ul. Filtrowa 68","addressLine2":null,"creditLimit":0},
            {"state":null,"country":"Germany","phone":"+49 69 66 90 2555","city":"Frankfurt","postalCode":"60528","customerNumber":128,"customerName":"Blauer See Auto, Co.","contactLastName":"Keitel","contactFirstName":"Roland","addressLine1":"Lyonerstr. 34","addressLine2":null,"creditLimit":59700},
            {"state":"CA","country":"USA","phone":"6505555787","city":"San Francisco","postalCode":"94217","customerNumber":129,"customerName":"Mini Wheels Co.","contactLastName":"Murphy","contactFirstName":"Julie","addressLine1":"5557 North Pendale Street","addressLine2":null,"creditLimit":64600},
            {"state":"NY","country":"USA","phone":"2125557818","city":"NYC","postalCode":"10022","customerNumber":131,"customerName":"Land of Toys Inc.","contactLastName":"Lee","contactFirstName":"Kwai","addressLine1":"897 Long Airport Avenue","addressLine2":null,"creditLimit":114900},
            {"state":null,"country":"Spain","phone":"(91) 555 94 44","city":"Madrid","postalCode":"28034","customerNumber":141,"customerName":"Euro+ Shopping Channel","contactLastName":"Freyre","contactFirstName":"Diego ","addressLine1":"C/ Moralzarzal, 86","addressLine2":null,"creditLimit":227600},
            {"state":null,"country":"Sweden","phone":"0921-12 3555","city":"Lulea","postalCode":"S-958 22","customerNumber":144,"customerName":"Volvo Model Replicas, Co","contactLastName":"Berglund","contactFirstName":"Christina ","addressLine1":"Berguvsvagen  8","addressLine2":null,"creditLimit":53100},
            {"state":null,"country":"Denmark","phone":"31 12 3555","city":"Kobenhavn","postalCode":"1734","customerNumber":145,"customerName":"Danish Wholesale Imports","contactLastName":"Petersen","contactFirstName":"Jytte ","addressLine1":"Vinbaltet 34","addressLine2":null,"creditLimit":83400},
            {"state":null,"country":"France","phone":"78.32.5555","city":"Lyon","postalCode":"69004","customerNumber":146,"customerName":"Saveley & Henriot, Co.","contactLastName":"Saveley","contactFirstName":"Mary ","addressLine1":"2, rue du Commerce","addressLine2":null,"creditLimit":123900},
            {"state":null,"country":"Singapore","phone":"+65 221 7555","city":"Singapore","postalCode":"079903","customerNumber":148,"customerName":"Dragon Souveniers, Ltd.","contactLastName":"Natividad","contactFirstName":"Eric","addressLine1":"Bronz Sok.","addressLine2":"Bronz Apt. 3/6 Tesvikiye","creditLimit":103800},
            {"state":"NY","country":"USA","phone":"2125557413","city":"NYC","postalCode":"10022","customerNumber":151,"customerName":"Muscle Machine Inc","contactLastName":"Young","contactFirstName":"Jeff","addressLine1":"4092 Furth Circle","addressLine2":"Suite 400","creditLimit":138500},
            {"state":"PA","country":"USA","phone":"2155551555","city":"Allentown","postalCode":"70267","customerNumber":157,"customerName":"Diecast Classics Inc.","contactLastName":"Leong","contactFirstName":"Kelvin","addressLine1":"7586 Pompton St.","addressLine2":null,"creditLimit":100600}];
            */

    };

    $scope.qryCustByCondition = function(pQryCustCond, pQryCustCondValue) {


    };

    $scope.fetchEmployee = function() {
        $scope.employee={"employeeNumber":1370,"lastName":"Hernandez","firstName":"Gerard","extension":"x2028","email":"ghernande@classicmodelcars.com","jobTitle":"Sales Rep",
            "offices":{"officeCode":"4","city":"Paris","phone":"+33 14 723 4404","addressLine1":"43 Rue Jouffroy D'abbans","addressLine2":null,"state":null,"country":"France","postalCode":"75017","territory":"EMEA"},
            "employees":null};
        /* get from Restful service
        script.employee={"employeeNumber":1370,"lastName":"Hernandez","firstName":"Gerard","extension":"x2028","email":"ghernande@classicmodelcars.com","jobTitle":"Sales Rep",
            "offices":{"officeCode":"4","city":"Paris","phone":"+33 14 723 4404","addressLine1":"43 Rue Jouffroy D'abbans","addressLine2":null,"state":null,"country":"France","postalCode":"75017","territory":"EMEA"},
            "employees":{"employeeNumber":1102,"lastName":"Bondur","firstName":"Gerard","extension":"x5408","email":"gbondur@classicmodelcars.com","jobTitle":"Sale Manager (EMEA)",
                "offices":{"officeCode":"4","city":"Paris","phone":"+33 14 723 4404","addressLine1":"43 Rue Jouffroy D'abbans","addressLine2":null,"state":null,"country":"France","postalCode":"75017","territory":"EMEA"},
                "employees":{"employeeNumber":1056,"lastName":"Patterson","firstName":"Mary","extension":"x4611","email":"mpatterso@classicmodelcars.com","jobTitle":"VP Sales",
                    "offices":{"officeCode":"1","city":"San Francisco","phone":"+1 650 219 4782","addressLine1":"100 Market Street","addressLine2":"Suite 300","state":"CA","country":"USA","postalCode":"94080","territory":"NA"},
                    "employees":{"employeeNumber":1002,"lastName":"Murphy","firstName":"Diane","extension":"x5800","email":"dmurphy@classicmodelcars.com","jobTitle":"President",
                        "offices":{"officeCode":"1","city":"San Francisco","phone":"+1 650 219 4782","addressLine1":"100 Market Street","addressLine2":"Suite 300","state":"CA","country":"USA","postalCode":"94080","territory":"NA"},
                        "employees":null}}}};
                        */
    };

    $scope.fetchEmployeeQuickList = function() {
           $scope.RepSalesList =
              [{"employeeNumber":1000,"lastName":"業務代表01","firstName":"王","extension":"x1028","email":"ghernande@classicmodelcars.com","jobTitle":"Sales Rep"},
               {"employeeNumber":2000,"lastName":"業務代表02","firstName":"李","extension":"x2028","email":"ghernande@classicmodelcars.com","jobTitle":"Sales Rep"},
               {"employeeNumber":3000,"lastName":"業務代表03","firstName":"趙","extension":"x3028","email":"ghernande@classicmodelcars.com","jobTitle":"Sales Rep"}];
                          }

    $scope.addNewCustomer = function(pCustomer) {
          $scope.resetError();

          // todo - change the uri by Spring mvc controller
          $http.post('custCRUD/addCustomer', pCustomer).success(function() {
              $scope.fetchCustomerList();
              $scope.customer.customerNumber = '';
              $scope.customer.customerName = '';
              $scope.customer.creditLimit = '';
              //$scope.train.diesel = false;
              $scope.setError('Append a new customer is successful!');
          }).error(function() {
                  $scope.setError('Could not add a new customer');
              });
    };

    $scope.updateCustomer = function(pCustomer) {
          $scope.resetError();

          // todo - change the uri by Spring mvc controller
          $http.put('trains/updateCustomer', pCustomer).success(function() {
              $scope.fetchCustomerList();
              $scope.customer.customerNumber = '';
              $scope.customer.customerName = '';
              $scope.customer.creditLimit = '';
              // $scope.train.diesel = false;
              $scope.editMode = false;
          }).error(function() {
                  $scope.setError('Could not update the customer');
              });
    };

    $scope.editCustomer = function(pCustomer) {
           $scope.resetError();
           $scope.customer = pCustomer;
           $scope.origCustomer = angular.copy(pCustomer);
           $scope.editMode = true;
           $scope.fetchEmployee();
           $scope.fetchEmployeeQuickList();

           $scope.isDisableVal = false;
           $scope.origRepSales = angular.copy($scope.employee);
    };

    $scope.removeCustomer = function(pCustNumber) {
          $scope.resetError();

          // todo - change the uri by Spring mvc controller
          $http.delete('trains/removeTrain/' + pCustNumber).success(function() {
              $scope.fetchCustomerList();
          }).error(function() {
                  $scope.setError('Could not remove customer');
              });
    };

    $scope.removeAllCustomers = function() {
          $scope.resetError();

          // todo - change the uri by Spring mvc controller
          $http.delete('trains/removeAllTrains').success(function() {
              $scope.fetchCustomerList();
          }).error(function() {
                  $scope.setError('Could not remove all basic_data');
              });

    };

    $scope.fetchAllCustomers = function() {
        $scope.resetError();

        $scope.fetchCustomerList();
        $scope.predicate = 'customerName';
        $scope.editMode = false;

    };

    // Select a rep. sales from quick list
    $scope.selectRepSales = function(pRepSalesEmp) {
        $scope.employee = pRepSalesEmp;

    };

    // Cancel modified data
    $scope.cancelCustForm = function() {
        // $scope.customer =  $scope.origCustomer;
        angular.copy($scope.origCustomer, $scope.customer);
    };

    $scope.updateRepSales = function() {
        // TODO
    };

    $scope.cancelRepSalesForm = function() {
        angular.copy($scope.origRepSales, $scope.employee);
    };

    // Enable/Disable Query Rep. Sales function
    $scope.enableQryRepSales = function() {
        $scope.isDisableQryRepSales = (!$scope.isDisableQryRepSales);
    };

    $scope.resetCustForm = function() {
        $scope.resetError();
        $scope.customer = {};
        $scope.editMode = false;

    };

    $scope.clickShowCustForm = function (pIsShowCust) {
        if (pIsShowCust) {
           $scope.txtManipulationFormHead = 'Customer Form';
        } else {
           $scope.txtManipulationFormHead = 'Rep.Sales Form';
        }
        $scope.isShownCustFrm = (pIsShowCust);
    };

    // TODO; common lib.
    $scope.resetError = function() {
                              $scope.error = false;
                              $scope.errorMessage = '';
    };

    $scope.setError = function(message) {
                              $scope.error = true;
                              $scope.errorMessage = message;
    };

    // TODO; common lib.
    $scope.switchPage = function(path, pCustomer){
        // var selCustomer = pCustomer;
        $location.path(path).search({paramSelCustomer: pCustomer});
        // paramSelOrder:pOrder
    };

    $scope.qryCustomerByCond = function() {
        // if (($scope.qryCustCondition == 'ByCustNo') &&
        if (!($scope.qryCondValue)) {
            $scope.setError('The input data of condition is empty!!');
        } else {
            $scope.resetError();
            if ($scope.qryCustCondition == $scope.qryCustCondList[0].name) {

                // $http({method: 'GET', url: 'http://jbossews-bluedream.rhcloud.com/CustomersJson/' + $scope.qryCondValue}).
                $http({method: 'GET', url: ClassicMdConfig.dataApiUrl + 'CustomersJson/' + $scope.qryCondValue}).
                success(function(data, status, headers, config) {
                    $scope.customer = data;
                    $scope.CustomerList = [data];
                }).
                error(function(data, status, headers, config) {
                });

                // for test - TODO 2016/02/05
                /*
                $scope.CustomerList =
                    [{
                        "state": null,
                        "country": "France",
                        "phone": "40.32.2555",
                        "city": "Nantes",
                        "postalCode": "44000",
                        "customerNumber": 103,
                        "customerName": "Atelier graphique",
                        "contactLastName": "Schmitt",
                        "contactFirstName": "Carine ",
                        "addressLine1": "54, rue Royale",
                        "addressLine2": null,
                        "creditLimit": 21000
                    }];
                 */

            } else {
                // for test - TODO 2016/02/05
                $scope.fetchCustomerList();
                $scope.predicate = 'customerName';
            }
        }
    };

    //$scope.fetchCustomerList();
    //$scope.predicate = 'customerName';
    $scope.initiateData();

}]);