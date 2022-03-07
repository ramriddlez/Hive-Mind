//Date and time
var datetime = null,
  date = null;
import Darkmode from "darkmode-js";

new Darkmode().showWidget();
var update = function () {
  date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  datetime = $("#datetime");
  update();
  setInterval(update, 1000);
});

// Opens Modal on click of "start new project" button
$(document).ready(function () {
  $("#modBtn").click(function () {
    $("#exampleModal").modal();
  });
});

// Closes modal on click of "save project" button
$("#saveProj").click(function (e) {
  e.preventDefault();
  // Coding
  $("#exampleModal").modal("toggle");
  return false;
});

//Date picker function
$(function () {
  $("#datepicker").datepicker({ minDate: 0 });
});

//Saves project to table
$("#saveProj").on("click", function () {
  //Form variables
  var project_name = $("#project_name").val();
  var project_type = $("#project_type").val();
  var project_date = $("#datepicker").val();
  var project_wage = $("#project_wage").val();
  // Variables for date to compare
  var given = moment(project_date, "MM-DD-YYYY");
  var current = moment().startOf("day");
  //Difference in number of days
  var dateDiff = moment.duration(given.diff(current)).asDays();
  //Math for total earned
  var estWage = project_wage * 8 * dateDiff;
  //Creates table
  if (project_name != "" && project_type != "" && project_date != "") {
    $("#myTable tbody").append(
      '<tr class="child"><td>' +
        project_name +
        "</td><td>" +
        project_type +
        "</td><td>" +
        project_wage +
        "</td><td>" +
        project_date +
        "</td><td>" +
        dateDiff +
        "</td><td>" +
        estWage +
        '</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>'
    );
  }
});

//Removes row
$(document).on("click", ".remCF1", function () {
  $(this).parent().parent().remove();
  $("#myTable tbody tr").each(function (i) {
    $($(this).find("td")[0]).html(i + 1);
  });
});
