$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Product?api_key=keylSBEfApc4bXPo6";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.name);
                       items.push(value.fields.notes);
                       items.push(value.fields.attachments);
                       items.push(value.fields.position;
                       items.push(value.fields.team_name);
                       items.push(value.fields.team_view);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "name",
                       defaultContent:""},
                     { title: "notes",
                         defaultContent:"" },
                     { title: "attachments",
                       defaultContent:"" },
                     { title: "team_name",
                       defaultContent:""},
                     { title: "team_view",
                         defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready