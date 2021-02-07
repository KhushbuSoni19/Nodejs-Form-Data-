
// office contact
$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button");
        var element = $(".element_position");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin:10px" id="remove"><div class="input-group mb-3 mr-sm-3 oc"><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="Com_Contact" placeholder="Contact No." class="form-control oinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="office_Contact" placeholder="Landline No." class="form-control oinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="email"  name="personal_Email" placeholder="Personal Email" class="form-control oinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="textarea" name="A=official_email" placeholder="Official Email" class="form-control oinfo-'+x+'" autofocus></div><div><div style="cursor:pointer; style = "margin:10px"" class= "remove_button btn btn-info active">Remove</div></div>';
                        x++;
                        $(element).append(field_html)
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// company social link
$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button1");
        var element = $(".element_position1");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin-top:10px" id="remove"><input  style="max-width: 400px;" type="text" id= "abc1" placeholder="Company Social Links" class="form-control sl" autofocus><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div>';
                        $(element).append(field_html)
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// company website
$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button2");
        var element = $(".element_position2");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin-top:10px" id="remove"><input  style="max-width: 400px;" type="text" id= "abc1" placeholder="Company Website" class="form-control ws" autofocus><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div>';
                        $(element).append(field_html)
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// work domain

$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button3");
        var element = $(".element_position3");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div  style = "margin:10px" id="remove"><select style="max-width: 400px;"" name="work_domain" id ="work-domain-'+x+'"  class="form-control wd"><option value="">Select your Work Domain</option><option>HR</option><option>IT</option><option>Finance</option><option>Transport</option><option>Bank</option><option>School/College/University</option><option>Auto Mobile Industry</option><option>Automation Industry</option><option>Hospital</option><option>Pharma Industrial Company</option><option>Other</option></select><input style="border: black; margin: 20px; display:none; " type="text" id="work_domain" name="work_domain"  placeholder="Work Domain" ><div style = "margin:20px " class= "remove_button btn btn-info active">Remove</div></div>';
                        $(element).append(field_html);
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// person

$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button4");
        var element = $(".element_position4");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin:10px" id="remove"> <div class="input-group mb-3 mr-sm-3 pc"><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="PName" placeholder="Name" class="form-control pinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="Post/designation" placeholder="Post/Designation"class="form-control pinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="P_O_Contact" placeholder=" Contact No." class="form-control  pinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="P_O_Contact" placeholder=" Other No." class="form-control pinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="Personal_Email" placeholder="Personal Email" class="form-control  pinfo-'+x+'" autofocus></div></div></div><div class="form-group"><div class="col-sm-10"><div class="form-row mb-4"><input type="textarea" name="official_email" placeholder="Official Email" class="form-control pinfo-'+x+'" autofocus></div></div></div></div><div><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div>';
                        $(element).append(field_html);
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// turnover
$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button5");
        var element = $(".element_position5");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin-top:10px" id="remove"><div class="form-group"><div class="input-group mb-3 mr-sm-3"><label style="max-width: 500px;" class="col-sm-4 control-label">Company Turnover</label><div class="col-sm-10"><div class="form-row mb-4 to"> <select style=" margin-top: 10px; margin-left: 8px; max-width: 205px;" name="Turnover_year" class="form-control ct-'+x+'"><option value="">Select year</option><option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option><option>2023</option><option>2024</option><option>2025</option></select><input style=" margin-top: 10px; margin-left: 8px; max-width : 205px" type="text" placeholder="Company Turnover" class="form-control ct-'+x+'" autofocus> <input style=" margin-top: 10px; margin-left: 8px;max-width: 205px;" type="text"placeholder="currency" class="form-control ct-'+x+'" name="currency" autofocus /></div></div></div></div>  </div><div cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div></div></div>';
                        $(element).append(field_html);
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// company number

$(document).ready(function () {
        var max_fields = 8;
        var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button6");
        var element = $(".element_position6");
        var x = 1;
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        var field_html = '<div style = "margin:10px" id="remove"><div id ="company-no-'+x+'" class="input-group mb-3 mr-sm-3 cNo"><div class="form-group"><label style="max-width: 500px;" class="col-sm-4 control-label">CIN No.</label><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="CIN_No" placeholder="CIN No." class="form-control cNum-'+x+'" autofocus></div></div></div><div class="form-group"><label style="max-width: 500px;" class="col-sm-4 control-label">PAN No.</label><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="PAN_no" placeholder="PAN No." class="form-control cNum-'+x+'" autofocus></div></div></div><div class="form-group"><label style="max-width: 500px;" class="col-sm-4 control-label">GSTIN No.</label><div class="col-sm-10"><div class="form-row mb-4"><input type="text" name="GSTIN_No" placeholder="GSTIN No."class="form-control cNum-'+x+'" autofocus></div></div></div><div class="form-group"><label style="max-width: 500px;" class="col-sm-4 control-label">TIN No.</label><div class="col-sm-10"><div class="form-row mb-4">    <input type="text" placeholder="TIN No." name="TIN_No" class="form-control cNum-'+x+'" autofocus></div></div></div><div class="form-group"><label style="max-width: 500px;" class="col-sm-4 control-label">IOS No.</label><div class="col-sm-10"><div class="form-row mb-4">    <input type="text" name="IOS_No" placeholder="IOS No."class="form-control cNum-'+x+'" autofocus></div></div></div><div><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div></div>';
                        $(element).append(field_html);
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                // $(this).remove("#remove");
                x--;
        })
});

// company name

$(document).ready(function () {
        var max_fields = 10;
       // var wrapper = $(".input_fields_wrap");
        var add_button = $(".add_button7");
        var element = $(".element_position7");
        var x = 1;
        //var field_html = '<div style = "margin:10px" id="remove"><input style = "max-width: 400px;"  type="text" id= "abc1" placeholder="Company Name" name="Company_Name" class="form-control" autofocus><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div>';
        $(add_button).click(function (e) {
                e.preventDefault();
                if (x < max_fields) {
                        // $(element).append(field_html);
                        $(element).append('<div id="remove"><input style = "max-width: 200px;margin-left:8px "  type="text" id= "company-name-'+x+'"  placeholder="Company Name" name="Company_Name" class="form-control cn" autofocus><div style="margin:20px; cursor:pointer;" class= "remove_button btn btn-info active">Remove</div></div>');
                        x++;
                }
        });
        $(element).on("click", ".remove_button", function (e) {
                e.preventDefault();
                $(this).closest("#remove").remove();
                x--;
        });
        //logic for sending data frontend to backend
        $('#submit').click(function(){
                $.ajax({
                        url : "submit.html",
                        data : $('Com_Name').serialize(),
                        success : function(data)
                        {
                                alert(data)
                                $('#Com_Name')[0].reset();
                        }
                });
        });
});
function check(val)
{
 var element = document.getElementById("work_domain");
 if(val == "Other")
  { element.style.display='block';
  }
else
 {  element.style.display='none';
 }
}

function check1(val)
{
 var element = document.getElementById("Company_Type");
 if(val == "Other")
  { element.style.display='block';
  }
else
 {  element.style.display='none';
 }
}

function check2(val)
{
 var element = document.getElementById("Company_status");
 if(val == "Other")
  { element.style.display='block';
  }
else
 {  element.style.display='none';
 }
}




//printing data in console
/*
$(document).ready(function(){
        $('#submit').click(function(){
        $('#Com_Name').text($('#Com_Name').serialize());
});
});*/