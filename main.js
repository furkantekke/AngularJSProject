agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {

    var columnDefs = [
        {headerName: "Your name", field: "name", width: 150},
        {headerName: "Your place", field: "place", width: 150},
        {headerName: "Your old", field: "old", width: 150}
        
    ];

    var rowData = [
        {name: "john", place: "Ankara", old: 35},
        {name: "ferdinand", place: "Manisa", old: 32},
        {name: "ceren", place: "Antalya", old: 27}
    ];

    $scope.gridOptions = {

        columnDefs: columnDefs,
        rowData: rowData,
        rowSelection: 'single',
        enableColResize: true,
        enableSorting: true,
        enableFilter: true,
        groupHeaders: true,
        toolPanelSuppressPivotMode: true,
        onModelUpdated: onModelUpdated
       
    };

    function onModelUpdated() {
        var model = $scope.gridOptions.api.getModel();
        var totalRows = $scope.gridOptions.rowData.length;
        var processedRows = model.getRowCount();
        $scope.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
    };



});
