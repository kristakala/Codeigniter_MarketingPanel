var TableDatatablesEditable = function () {

    var handleTable = function () {

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {
            //data_element =$('.user_status').html();
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<input type="text"  readonly class="form-control input-small" value="' + aData[0] + '">';
            jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<input type="text" class="form-control  input-small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="form-control  input-small" value="' + aData[3] + '">';
            jqTds[4].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[4] + '">';
            jqTds[5].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[5] + '">';
            jqTds[6].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[6] + '">';
            jqTds[7].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[7] + '">';
            jqTds[8].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[8] + '">';
            //jqTds[9].innerHTML = '<a href="" class="user_status hide block btn btn-warning">'+ data_element +'</a>';
            jqTds[10].innerHTML = '<a class="edit btn btn-success" href="">Save</a>';
            jqTds[11].innerHTML = '<a class="cancel btn btn-warning" href="">Cancel</a>';
        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            // Storing input into data array to parse 
            dataString = [];
             dataString[0] = jqInputs[8].value;
             //dataString[1] = jqInputs[0].value;
             dataString[1] = jqInputs[1].value;
             if(jqInputs[2].value == "********"){
                dataString[2] = "";
             }
                
            else{
             dataString[2] = jqInputs[2].value;
                }
             dataString[3] = jqInputs[3].value;
             dataString[4] = jqInputs[4].value;
             dataString[5] = jqInputs[5].value;
             dataString[6] = jqInputs[6].value;
             dataString[7] = jqInputs[7].value;
             url_ = document.getElementById("base_url").innerHTML;
            // alert(url_);
        var jsonString = JSON.stringify(dataString);
           $.ajax({
                type: "POST",
                url: url_+'update_user',
                data: {data : jsonString}, 
                cache: false,
                success: function(parm){
                    console.log(parm);
                }
            });
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
            oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
            oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
            oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
            oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
            //oTable.fnUpdate('<a href="" class="block btn btn-warning">'+ data_element +'</a>', nRow, 9, false);
            oTable.fnUpdate('<a class="edit btn btn-primary" href="">Edit</a>', nRow, 10, false);
            oTable.fnUpdate('<a class="delete btn btn-danger" href="">Delete</a>', nRow, 11, false);
            oTable.fnDraw();
        }

        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
            oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
            oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
            oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
            oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
            oTable.fnUpdate('<a class="edit btn btn-primary" href="">Edit</a>', nRow, 10, false);
            oTable.fnDraw();
        }

        var table = $('#sample_editable_1');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 5,

            "language": {
                "lengthMenu": " _MENU_ records"
            },
            "columnDefs": [{ // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": true,
                "targets": [0]
            }],
            "order": [
                [0, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = $("#sample_editable_1_wrapper");

        var nEditing = null;
        var nNew = false;

        $('#sample_editable_1_new').click(function (e) {
            e.preventDefault();

            if (nNew && nEditing) {
                if (confirm("Previose row not saved. Do you want to save it ?")) {
                    saveRow(oTable, nEditing); // save
                    $(nEditing).find("td:first").html("Untitled");
                    nEditing = null;
                    nNew = false;

                } else {
                    oTable.fnDeleteRow(nEditing); // cancel
                    nEditing = null;
                    nNew = false;
                    
                    return;
                }
            }

            var aiNew = oTable.fnAddData(['', '', '', '', '', '']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
        });

        table.on('click', '.block', function (e) {
            e.preventDefault();
            data_element1 = $(this).attr('data-status');

            if (confirm("Are you sure to "+ data_element1 +" this user ?") == false) {
                return;
            }
            else{
              dataString = [];
              dataString[0] = $(this).attr('data-block');
                 //dataString[1] = jqInputs[0].value;
                 dataString[1] = data_element1;
                 url_ = document.getElementById("base_url").innerHTML;
                // alert(url_);
            var jsonString = JSON.stringify(dataString);
            $.ajax({
                type: "POST",
                url: url_+'block_user',
                data: {data : jsonString}, 
                cache: false,
                success: function(){
                   // alert(parm);
                }
            });
            }
            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];
            console.log(data_element1);
            if(data_element1 == 'blocked'){
            $(this).attr('data-status',"active");
            $(this).html("Unblock");
            }
            else{
                $(this).attr('data-status',"blocked");
                $(this).html("Block");
            }
           /* var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);*/
        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();
            
            if (confirm("Are you sure to delete this user?") == false) {
                return;
            }
            else{
                 url_ = document.getElementById("base_url").innerHTML;
        data_element = $(this).attr('data-delete');
        console.log(data_element);
           $.ajax({
                type: "POST",
                url: url_+'delete_user/'+data_element
                
            });
            }
            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
        });

        table.on('click', '.cancel', function (e) {
            e.preventDefault();
            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nEditing = null;
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });

        table.on('click', '.edit', function (e) {
            e.preventDefault();

            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */
                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {
                /* Editing this row and want to save it */
                saveRow(oTable, nEditing);
                nEditing = null;
            } else {
                /* No edit in progress - let's start one */
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {
            handleTable();
        }

    };

}();

jQuery(document).ready(function() {
    TableDatatablesEditable.init();
});