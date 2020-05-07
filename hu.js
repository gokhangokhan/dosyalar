 $("tr td").each(function () {
           if ($(this).attr("aria-selected") === "true") {
                $(this).parent().addClass('active')
            } else {
                $(this).parent().removeClass('active')

            }
});
