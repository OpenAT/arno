
$(document).ready( function() {
	$("body[data-rootcatid='2'] .oe_product").click( function( e ) {
        e.preventDefault();
    });
    $("body[data-rootcatid='4'] .oe_product").click( function( e ) {
        e.preventDefault();
    });
	//Opionaler Ansatz für Perfekte Bilder im Shop indem man die Bilder in die Div Box gibt um damit mit Background image zu arbeiten
	//einfacher zentrieren zu können. background:center; background-size;cover; background:no-repeat;
//	$('#products_grid .oe_product').each( function() {
//	    var img_src = $(this).find('.img').attr('src');
//	    $(this).find('.oe_product_image').css('background-image', 'url("' + img_src + '")');
//    });
    //find clicked elemments
    //$("div").click(function(){
    //    alert($(this).attr("class"));
    //});
	// disable quick-add-to-cart-button
	//$("body[data-rootcatid='2'] .quick_add_to_cart .a-submit").unbind('click');
//    if ('parentIFrame' in window) {
//        $(".a-submit").click(function () {
//            partenIframe.scrollToOffset(0, $('.one-page-checkout').offset().top - 25);
//        });
//    }
//    else { // testing only not in Iframe
//        console.log("not in Iframe");
//        $(".a-submit").click(function () {
//                //$.scrollTo($('.one-page-checkout').offset().top - 25);
//                $('html, body').animate({scrollTop: $('.one-page-checkout').offset().top - 100}, 'slow');
//        });
//    }
});
