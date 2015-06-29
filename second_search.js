
var product_name_normal = $("#productTitle").text();
var encoded_product_name_normal = fixedEncodeURIComponent(product_name_normal);
var product_normal_2 = $(".buying h1").text();
var encoded_product_normal_2 = fixedEncodeURIComponent(encoded_product_normal_2);
var asin = $('ul li:contains("ASIN:")').text();
var asin2 = $('ul li:contains("ASIN:")').text();
var asin2_replace = $.trim(asin2.replace(/(\r\n|\n|\r)/gm,""));
var asin2_string = asin2_replace.substring(asin2_replace.length - 10);
var asin_nr = asin.substring(6);
var asin_td = $('#prodDetails table tbody tr:contains("ASIN")').text();
var asin_td_splitted = asin_td.substring(4,14);
var isbn = $('ul li:contains("ISBN-10:")').text();
var isbn_nr = isbn.substring(9);
console.log("isbn_nr is" + isbn_nr);
var isbn_replace = $.trim(isbn.replace(/(\r\n|\n|\r)/gm,""));
var isbn_string = isbn_replace.substring(isbn_replace.length - 10);



console.log("splitted asin is :" + asin_td_splitted);

function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}


function placeTextAndSearch() {


	if ($("#prodDetails").length > 0 && $("#productTitle").length > 0 && encoded_product_name_normal != 0) {
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt button_4_all' style='margin: 20px 20px 20px 0; border: 1px solid #FF99CC;background: #FF99CC;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' >Open All</a>");
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #daa520;background: #daa520;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "' >Ebay Listings</a>");
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #006666;background: #006666;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc" + "target='_blank'' >Ebay Completed Listings</a>");
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #C73232;background: #C73232;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal +"' >Google Shopping</a>");
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #7799bc;background: #7799bc;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal + "' >Shopping</a>");
		
		console.log("product_name_normal" + product_name_normal);
		console.log("added product buttons on special section");
	};

	if ($("#btAsinTitle").length > 0 && product_normal_2 != 0){

		$("#detail-bullets .content").after("<a class='buttons_sims_fbt button_1_all' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #FF99CC;background: #FF99CC;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' >Open All</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #daa520;background: #daa520;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_normal_2 + "' >Ebay Listings</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #006666;background: #006666;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_normal_2 + "&LH_Complete=1&rt=nc" + "target='_blank'' >Ebay Completed Listings</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #C73232;background: #C73232;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_normal_2 +"' >Google Shopping</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #7799bc;background: #7799bc;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_normal_2 + "' >Shopping</a>");


		console.log("product_normal_2" + product_normal_2);
		console.log("added buttons 33333");			
	};

	if ($("#productTitle").length > 0 && product_name_normal != 0 && $("#descriptionAndDetails").length > 0){

		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt button_3_all' style='margin: 20px 20px 20px 0; border: 1px solid #FF99CC;background: #FF99CC;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' >Open All</a>");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #daa520;background: #daa520;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "' >Ebay Listings</a>");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #006666;background: #006666;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc" + "target='_blank'' >Ebay Completed Listings</a>");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #C73232;background: #C73232;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal +"' >Google Shopping</a>");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #7799bc;background: #7799bc;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal + "' >Shopping</a>");
		
		console.log("product_name_normal" + product_name_normal);
		console.log("added buttons");
	}; 

	if ($("#productTitle").length > 0 && product_name_normal != 0){

		$("#detail-bullets .content").after("<a class='buttons_sims_fbt button_2_all' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #FF99CC;background: #FF99CC;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' >Open All</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #daa520;background: #daa520;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "' >Ebay Listings</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #006666;background: #006666;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc" + "target='_blank'' >Ebay Completed Listings</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #C73232;background: #C73232;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal +"' >Google Shopping</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #7799bc;background: #7799bc;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal + "' >Shopping</a>");
		
		console.log("product_name_normal" + product_name_normal);
		console.log("added buttons");
	}; 

	if ($("#productTitle").length > 0 && product_name_normal != 0 && isbn_string != 0){
		console.log("HUEAARARA");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;float: left;' target='_blank' href='https://keepa.com/#!product/1-" + isbn_string + "' >Keepa</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;float: left;' target='_blank' href='http://camelcamelcamel.com/product/" + isbn_string + "' >Camel</a>");
		console.log("isbn_string ADDED");
	}

	if ($("#productTitle").length > 0 && product_name_normal != 0 && asin2_string != 0){
		console.log("HUEAARARA");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://keepa.com/#!product/1-" + asin2_string + "' >Keepa</a>");
		$("#descriptionAndDetails").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://camelcamelcamel.com/product/" + asin2_string + "' >Camel</a>");
	}

	if ($("#btAsinTitle").length > 0 && product_normal_2 != 0 && isbn_string != 0) {
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://keepa.com/#!product/1-" + isbn_nr + "' >Keepa</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://camelcamelcamel.com/product/" + isbn_nr + "' >Camel</a>");
		console.log("isbn_nr ADDED");
	};

	if ($("#btAsinTitle").length > 0 && product_normal_2 != 0 && asin != 0) {
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://keepa.com/#!product/1-" + asin_nr + "' >Keepa</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://camelcamelcamel.com/product/" + asin_nr + "' >Camel</a>");
	};

	if ($("#productTitle").length > 0 && product_name_normal != 0 && asin != 0) {
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://keepa.com/#!product/1-" + asin_nr + "' >Keepa</a>");
		$("#detail-bullets .content").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; float:left; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://camelcamelcamel.com/product/" + asin_nr + "' >Camel</a>");

	};
	if ($("#productTitle").length > 0 && encoded_product_name_normal != 0 && asin_td_splitted != 0){
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #191919;background: #191919;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='https://keepa.com/#!product/1-" + asin_td_splitted + "' >Keepa</a>");
		$("#prodDetails .wrapper").after("<a class='buttons_sims_fbt' style='margin: 20px 20px 20px 0; border: 1px solid #af9161;background: #af9161;color: #ffffff;padding: 10px;box-shadow: 0px 5px 5px #888888;' target='_blank' href='http://camelcamelcamel.com/product/" + asin_td_splitted + "' >Camel</a>");

	}

}
placeTextAndSearch();

$('a.button_2_all').click(function(e) {
    e.preventDefault();	
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc");
	console.log("1");
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal);
	console.log("2");
	window.open("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal );
	window.open("http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal);
	window.open("http://camelcamelcamel.com/product/" + isbn_string);
	window.open("https://keepa.com/#!product/1-" + isbn_string);
});
$('a.button_1_all').click(function(e) {
    e.preventDefault();	
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_normal_2 + "&LH_Complete=1&rt=nc");
	console.log("1");
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_normal_2);
	console.log("2");
	window.open("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_normal_2 );
	window.open("http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_normal_2);
	window.open("http://camelcamelcamel.com/product/" + asin_nr);
	window.open("https://keepa.com/#!product/1-" + asin_nr);
});
$('a.button_3_all').click(function(e) {
    e.preventDefault();	
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc");
	console.log("1");
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal);
	console.log("2");
	window.open("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal );
	window.open("http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal);
	window.open("http://camelcamelcamel.com/product/" + asin2_string);
	window.open("https://keepa.com/#!product/1-" + asin2_string);
});

$(".button_4_all").click(function(e){
	 e.preventDefault();	
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal + "&LH_Complete=1&rt=nc");
	console.log("1");
	window.open("http://www.ebay.com/sch/i.html?_nkw=" + encoded_product_name_normal);
	console.log("2");
	window.open("https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&source=pshome-c-1-1&sa=X&ei=i7IZVY3rMI72O-OQgMAI&ved=0CB8Q7j8#tbm=shop&q=" + encoded_product_name_normal );
	window.open("http://www.shopping.com/product/products?CLT=SCH&KW=" + encoded_product_name_normal);
	window.open("http://camelcamelcamel.com/product/" + asin_td_splitted);
	window.open("https://keepa.com/#!product/1-" + asin_td_splitted);

})


if($("#aplus-product-description_feature_div").length > 0){
	$("#aplus-product-description_feature_div").append("<a style='margin: 20px 20px 20px 0;background: transparent;color: transparent;padding: 10px;'></a>");
}

if($("#prodDetails").length > 0){
	$("#prodDetails .wrapper").append("<a class='special_product_floating' style='float:left; margin: 20px 20px 20px 0;background: transparent;color: transparent;padding: 10px;'></a>");
}




