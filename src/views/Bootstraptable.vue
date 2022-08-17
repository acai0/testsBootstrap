<template>
  <div class="container">
    <h1>Test Bootstrap Table</h1>
    <table id="example" class="display" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Position</th>
          <th>Primary Office</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Position</th>
          <th>Primary Office</th>
          <th>Salary</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>Full name:</td>" +
    "<td>" +
    d.name +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Extension number:</td>" +
    "<td>" +
    d.extn +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>All Offices:</td>" +
    "<td>" +
    d.allOffices +
    "</td>" +
    "</tr>" +
    "</table>"
  );
}

$(document).ready(function () {
  var mdata = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      allOffices: "Edinburgh, New York, San Francisco",
      extn: "5421",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      allOffices: "Edinburgh, New York, San Francisco",
      extn: "8422",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      salary: "$86,000",
      start_date: "2009/01/12",
      office: "San Francisco",
      extn: "1562",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      salary: "$433,060",
      start_date: "2012/03/29",
      office: "Edinburgh",
      extn: "6224",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      salary: "$162,700",
      start_date: "2008/11/28",
      office: "Tokyo",
      extn: "5407",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      salary: "$372,000",
      start_date: "2012/12/02",
      office: "New York",
      extn: "4804",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      salary: "$137,500",
      start_date: "2012/08/06",
      office: "San Francisco",
      extn: "9608",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      salary: "$327,900",
      start_date: "2010/10/14",
      office: "Tokyo",
      extn: "6200",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      salary: "$205,500",
      start_date: "2009/09/15",
      office: "San Francisco",
      extn: "2360",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      salary: "$103,600",
      start_date: "2008/12/13",
      office: "Edinburgh",
      extn: "1667",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      salary: "$90,560",
      start_date: "2008/12/19",
      office: "London",
      extn: "3814",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      salary: "$342,000",
      start_date: "2013/03/03",
      office: "Edinburgh",
      extn: "9497",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      salary: "$470,600",
      start_date: "2008/10/16",
      office: "San Francisco",
      extn: "6741",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      salary: "$313,500",
      start_date: "2012/12/18",
      office: "London",
      extn: "3597",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      salary: "$385,750",
      start_date: "2010/03/17",
      office: "London",
      extn: "1965",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      salary: "$198,500",
      start_date: "2012/11/27",
      office: "London",
      extn: "1581",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      salary: "$725,000",
      start_date: "2010/06/09",
      office: "New York",
      extn: "3059",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      salary: "$237,500",
      start_date: "2009/04/10",
      office: "New York",
      extn: "1721",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      salary: "$132,000",
      start_date: "2012/10/13",
      office: "London",
      extn: "2558",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      salary: "$217,500",
      start_date: "2012/09/26",
      office: "Edinburgh",
      extn: "2290",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      salary: "$345,000",
      start_date: "2011/09/03",
      office: "New York",
      extn: "1937",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      salary: "$675,000",
      start_date: "2009/06/25",
      office: "New York",
      extn: "6154",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      salary: "$106,450",
      start_date: "2011/12/12",
      office: "New York",
      extn: "8330",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      salary: "$85,600",
      start_date: "2010/09/20",
      office: "Sidney",
      extn: "3023",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      salary: "$1,200,000",
      start_date: "2009/10/09",
      office: "London",
      extn: "5797",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      salary: "$92,575",
      start_date: "2010/12/22",
      office: "Edinburgh",
      extn: "8822",
    },
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      salary: "$357,650",
      start_date: "2010/11/14",
      office: "Singapore",
      extn: "9239",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      salary: "$206,850",
      start_date: "2011/06/07",
      office: "San Francisco",
      extn: "1314",
    },
    {
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      salary: "$850,000",
      start_date: "2010/03/11",
      office: "San Francisco",
      extn: "2947",
    },
    {
      name: "Shou Itou",
      position: "Regional Marketing",
      salary: "$163,000",
      start_date: "2011/08/14",
      office: "Tokyo",
      extn: "8899",
    },
  ];

  var table = $("#example").DataTable({
    // the panes to display 1 wide per column
    /*
    
    searchPanes: {
      layout: "columns-1",
    },  */
    dom: "Plfrtip",

    columnDefs: [
      {
        searchPanes: {
          show: true,
        },
        targets: [2, 3, 4],
      },
    ],
    data: mdata,
    columns: [
      {
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent:
          "<i class='bi bi-plus-circle-fill' style='color: green'></i>",
      },
      {
        data: "name",
      },
      {
        data: "position",
      },
      {
        data: "office",
      },
      {
        data: "salary",
      },
    ],
    order: [[1, "asc"]],
  });
  /*
  $("#example tfoot th").each(function () {
    var title = $("#example thead th").eq($(this).index()).text();
    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
  });
*/
  // Add event listener for opening and closing details
  $("#example tbody").on("click", "td.details-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });

  // Apply the search
  table.columns().every(function () {
    var that = this;

    $("input", this.footer()).on("keyup change", function () {
      that.search(this.value).draw();
    });
  });
});
</script>
