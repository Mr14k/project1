/// <reference path="dojo.js" />
/* Get Consignment Detail */
function RestAPI() { self = this; }
RestAPI.prototype = {
    self: null,
   // urlString: "http://111.118.176.68:90/Tracking.ashx",
    //urlString: "http://localhost:2539/Tracking.ashx",
	  urlString: "https://cntrack.lozics.in/Tracking.Ashx",
	  
    GetConsignmentDetail: function (VNO, successFunction, failFunction, token)
    {
        debugger;
        var data = { 'interface': 'RestAPI', 'method': 'GetConsignmentDetail', 'parameters': { 'VNO': VNO }, 'token': token };
        var jsonData = dojo.toJson(data);
        var xhrArgs = {
            url: self.urlString,
            handleAs: 'json',
            postData: jsonData,
            load: successFunction,
            error: function (error)
            {
                alert(error);
            }
        };
        var deferred = dojo.xhrPost(xhrArgs);
    }
};

function sucess(jsonData) {
    debugger;
    // Create a local var to append content to
    var content = "";

    $("#lblCNNo").html("");
    $("#lblCNDate").html("");
    $("#lblConsignee").html("");
    $("#lblFrom").html("");
    $("#lblTo").html("");
    $("#lblStatus").html("");
    $("#lblDelivery").html("");
    $("#lblIntransit").html("");
    $("#lblUndelivered").html("");


    var objdata = jQuery.parseJSON(jsonData.Value);
    if (objdata.cnmtDetail.length > 0) {
        $("#tbcnmt").show();
        $("#lblCNNo").html(objdata.cnmtDetail[0].CNNO);
        $("#lblCNDate").html(objdata.cnmtDetail[0].VDATE);
        $("#lblConsignee").html(objdata.cnmtDetail[0].CONSIGNEE);
        $("#lblFrom").html(objdata.cnmtDetail[0].FROMSTATION);
        $("#lblTo").html(objdata.cnmtDetail[0].TOSTATION);
        var status = objdata.cnmtDetail[0].STATUS.split("##");
        if (status[1].indexOf('DELIVERED') == 0) {
            $("#lblDelivery").html(status[1]);
        }
        else if (status[1].indexOf('UNDELIVERED') > -1) {
            $("#lblUndelivered").html(status[1]);
        }
        else {
            $("#lblIntransit").html(status[1]);
        }
        $("#lblStatus").html(status[0]);
    }
    else {
        $("#tbcnmt").hide();
    }
    var tbody = "";
    if (objdata.cnmtDetail.length > 0) {
        $("#grid").show();
        for (var i = 0; i < objdata.cnmtDetail.length; i++) {
            tbody = tbody + '<tr><td>' + objdata.cnmtDetail[i].ITEM + ' </td><td style="text-align:right;">' + objdata.cnmtDetail[i].PKGS + ' </td><td style="text-align:right;">' + objdata.cnmtDetail[i].WEIGHT + ' </td><td>' + objdata.cnmtDetail[i].INVOICENO + ' </td><td>' + objdata.cnmtDetail[i].INVOICEDATE + ' </td></tr>';
        }
    }
    else {
        $("#grid").hide();
    }
    $("#tbGrid tbody").html(tbody);
    var movementbody = "";
    if (objdata.movementDetail.length > 0) {
        $("#movement").show();
        for (var i = 0; i < objdata.movementDetail.length; i++) {
            movementbody = movementbody + '<tr><td>' + objdata.movementDetail[i].STNFROM + ' </td><td>' + objdata.movementDetail[i].STNTO + ' </td><td>' + objdata.movementDetail[i].MFDATE + ' </td><td>' + objdata.movementDetail[i].ARRIVALDATE + ' </td></tr>'
        }
    }
    else {
        $("#movement").hide();
    }
    $("#movementGrid tbody").html(movementbody);
    // Set the content of the news node
    //dojo.byId("newsContainerNode").innerHTML = content;
}