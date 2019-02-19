$(document).ready(function(){
	$('.sl').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$(".toggle-mnu").click(function() {
    $(".sandwich").toggleClass("active");
    $('.top-mnu').toggle("active");
	});
	$('.link-search').on('click', function(){
		$('.search-box').toggle();
		return false;
	});
	// $(".li-toggle-main").click(function() {
  //   $('.ul-toggle-drop-container').toggle("active");
	// });
});