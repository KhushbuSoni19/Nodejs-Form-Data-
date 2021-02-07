test = {
    'id': '',
    companyName: [],
    companyAddress: {
        plotNo: '',
        floorNo: '',
        buildingName: '',
        roadName: '',
        area: '',
        landmark: '',
        city: '',
        country: '',
        pin: null,
    },
    workDomain: [],
    companyType: '',
    companyStatus: '',
    companyNumber: [],
    officeContact: [],
    personContact: [],
    website: [],
    socialLinks: [],
    companyTurnover: [],
    employSize: '',
    startingDate: '',
};


// ---------------------------------------Main function--------------------------------------------------------
data = [];
$(document).ready(function () {
    $('#done').click(function () {
        addId();
        addCompany();
        companyAddress();
        workDomain();
        companyType();
        companyStatus();
        companyNumber();
        officeContact();
        personContact();
        website();
        socialLinks();
        turnover();
        employSize();
        startingDate();
        ajexCall();
        //console.log(test);
    });
});

// -----------------------------------------------------------------------------------------------

// Id

function addId() {
    var id = $('#cId').val();
    test.id = id;
}

// company address

function addCompany() {
    $('.cn').each(function () {
        test.companyName.push($(this).val());
    });
}

// company address
function companyAddress() {
    var values = [];
    $('.ca').each(function () {
        values.push($(this).val());
    });

    // add address values to document
    var address = {
        plotNo: values[0],
        floorNo: values[1],
        buildingName: values[2],
        roadName: values[3],
        area: values[4],
        landmark: values[5],
        city: values[6],
        country: values[7],
        pin: values[8],
    };
    test.companyAddress = address;
}

// work Domain

function workDomain() {
    var values = [];
    $('.wd').each(function () {
        if ($(this).val() == 'Other') {
            values.push($('#work_domain').val());
        } else {
            test.workDomain.push($(this).val());
        }
    });
}

// company type

function companyType() {
    if ($('#company-type').val() == 'Other') {
        test.companyType = $('#Company_Type').val();
    } else {
        test.companyType = $('#company-type').val();
    }
}

// company status

function companyStatus() {
    if ($('#company-status').val() == 'Other') {
        test.companyStatus = $('#Company_status').val();
    } else {
        test.companyStatus = $('#company-status').val();
    }
}

// company number

function companyNumber() {
    var value = [];
    var data1 = {}
    var info = [];

    for (let i = 0; i < $('.cNo').length; i++) {
        $('.cNum-'+i).each(function () {
            info.push($(this).val());
        });
        data1 = {
            cin: info[0],
            pan: info[1],
            gstin: info[2],
            tin: info[3],
            ios: info[4],
        };
        value.push(data1);
        info = [];
    }
    test.companyNumber = value;
}


// office contact

function officeContact() {
    var value = [];
    var data1 = {}
    var info = [];

    for (let i = 0; i < $('.oc').length; i++) {
        $('.oinfo-'+i).each(function () {
            info.push($(this).val());
        });
        data1 = {
            contactNumber: info[0],
            landlineNumber: info[1],
            personalEmail: info[2],
            OffcialEmail: info[3],
        };
        value.push(data1);
        info = [];
    }
    test.officeContact = value;
}

// person Contact

function personContact() {
    var value = [];
    var data1 = {}
    var info = [];

    for (let i = 0; i < $('.pc').length; i++) {
        $('.pinfo-'+i).each(function () {
            info.push($(this).val());
        });
        data1 = {
            name: info[0],
            post: info[1],
            contactNo: info[2],
            otherNo: info[3],
            personalEmail: info[4],
            officialEmail: info[5],
        };
        value.push(data1);
        info = [];
    }
    test.personContact = value;
}


// websites

function website() {
    $('.ws').each(function () {
        test.website.push($(this).val());
    });
}

// social links

function socialLinks() {
    $('.sl').each(function () {
        test.socialLinks.push($(this).val());
    });
}

// turn over

function turnover() {
    var value = [];
    var data1 = {}
    var info = [];

    for (let i = 0; i < $('.to').length; i++) {
        $('.ct-'+i).each(function () {
            info.push($(this).val());
        });
        data1 = {
            year: info[0],
            turnover: info[1],
            currency: info[2],
        };
        value.push(data1);
        info = [];
    }
    test.companyTurnover = value;
}

// employ Size
function employSize() {
    var size = $('#eSize').val();
    test.employSize = size;
}

function startingDate() {
    var date = $('#sDate').val();
    test.startingDate = date;
}

// -----------------------------AJEX call------------------------------------------

function ajexCall() { 
    $.ajax({
        url : '/entry',
        type : 'POST',
        contentType: 'application/json',
        data: JSON.stringify({"viewedProfiles": test}),
        success : function(responce) {
            alert("Data successfully submitted");
            //console.log(responce);
        },
        error : function(err) {
            alert("Internal server error");
            //console.log(err);
        }
    });
 }
