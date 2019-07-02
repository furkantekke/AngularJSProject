agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {

    var columnDefs = [
        {headerName: "Terminal Adı", field: "terminal", width: 150},
        {headerName: "Lokasyon", field: "lokasyon", width: 150},
        {headerName: "Site ID", field: "id", width: 150},
        {headerName: "Yıl", field: "yil", width: 150},
        {headerName: "Kullanılan Kota (GB)", field: "kota", width: 200}
    ];

    var rowData = [
        {terminal: "Term1", lokasyon: "Ankara", id: 35000, kota: 150, yil:1997},
        {terminal: "Term2", lokasyon: "Manisa", id: 32000, kota: 200, yil:1999},
        {terminal: "Term3", lokasyon: "Antalya", id: 72000, kota: 170, yil:1998}
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
        //localeText: MoganConstant.AG_GRID.localeText
    };

    function onModelUpdated() {
        var model = $scope.gridOptions.api.getModel();
        var totalRows = $scope.gridOptions.rowData.length;
        var processedRows = model.getRowCount();
        $scope.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
    };



});