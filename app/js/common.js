$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

	$('.table-api tr td').on('click', function (e) {
		e.preventDefault();
		$('.table-api tr').removeClass('active');
        $(this).parent().toggleClass('active');
    });

	$('.table-api-with-codes tr td').on('click', function (e) {
		e.preventDefault();
		$('.table-api tr').removeClass('active');
        $(this).parent().toggleClass('active');
    });

	$('.table-api-with-codes .collapseToggle').on('click', function (e) {
		e.preventDefault();
		$('.table-api-with-codes tr').removeClass('active');
    });

    

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
