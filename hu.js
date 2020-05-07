$(function () {
  $(table tbody tr ).each(function (i, e) {
    var tabindex = e.getAttribute();
    console.log('tabindex=' + tabindex + ' Row text: ' + e.textContent);
  });
});
