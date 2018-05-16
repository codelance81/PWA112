var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');
var componentInstance  = morningstar.initComponent('instanceId',{container: document.getElementById('container') });



function datepicker() {
  $('#datetimepicker6').datetimepicker();
  $('#datetimepicker7').datetimepicker({
      useCurrent: false //Important! See issue #1075
  });
  $("#datetimepicker6").on("dp.change", function (e) {
      $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
  });
  $("#datetimepicker7").on("dp.change", function (e) {
      $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });


