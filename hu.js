$(function () {
  $('table tbody tr[tabindex]').each(function (i, e) {
    var tabindex = e.getAttribute('tabindex');
    console.log('tabindex=' + tabindex + ' Row text: ' + e.textContent);
  });
});
