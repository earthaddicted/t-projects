
$.fn.select2ul= function(){
  var wrapper = "#ulWrapper";
  var container = "#ulContainer";
  var select = this.selector;
  var id = this.attr("id") || "";
  var className = this.attr("class") || "";

  $(select).parent().prepend("<ul id='" + wrapper.substr(1) + "'><li><span></span><ul id='" + container.substr(1) + "'>");

  $(wrapper).click(function() {
	$(container).toggle();
  });

  $(wrapper + " > li:first-child > span").text($(select + " option[value='0']").text());

  $(select + " > option").each(function(i, val) {
	var value = $(this).val();
	$(container).append("<li class=" + value + ">"  + "<a>" + val.innerHTML); 
  });

  $('.selection-b').on('click', container + " li", function () {
	$(wrapper + " > li:first-child > span").text($(this).find("a").text());
	var selected = $(this).attr("class");
	$(select + " > option").attr("selected", false);
	$(select + " > option[value='" + selected + "']").attr("selected", true);
	$(select).change();
  });

  $(document).click(function (e) {
	if (!$(wrapper).is(e.target) && $(wrapper).has(e.target).length === 0) {
	  $(wrapper).find(container).hide();
	}
  });
}
$("select").select2ul();


function updateFromApi(){
  $.get( "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(json) {

	console.log(json);

	var price = json.ask;
	$( "#btc-id" ).html(price);

	var switchValue = $("#btc-switch").prop("checked");

	if (switchValue) {
		$('#btc-change-h').html(ComposeString(json.changes.percent.hour,switchValue));
		$('#btc-change-h').addClass(NumberColor(json.changes.percent.hour));

		$('#btc-change-d').html(ComposeString(json.changes.percent.day,switchValue));
		$('#btc-change-d').addClass(NumberColor(json.changes.percent.day));

		$('#btc-change-w').html(ComposeString(json.changes.percent.week,switchValue));
		$('#btc-change-w').addClass(NumberColor(json.changes.percent.week));

		$('#btc-change-m').html(ComposeString(json.changes.percent.month,switchValue));
		$('#btc-change-m').addClass(NumberColor(json.changes.percent.month));

	} else {
		$('#btc-change-h').html(ComposeString(json.changes.price.hour,switchValue));
		$('#btc-change-h').addClass(NumberColor(json.changes.price.hour));

		$('#btc-change-d').html(ComposeString(json.changes.price.day,switchValue));
		$('#btc-change-d').addClass(NumberColor(json.changes.price.day));

		$('#btc-change-w').html(ComposeString(json.changes.price.week,switchValue));
		$('#btc-change-w').addClass(NumberColor(json.changes.price.week));

		$('#btc-change-m').html(ComposeString(json.changes.price.month,switchValue));
		$('#btc-change-m').addClass(NumberColor(json.changes.price.month));
	}

  });
}

document.load = updateFromApi();

// $('#btc-switch').on('propertychange', updateFromApi);
$( "#btc-switch" ).on( "click", function( ) {
  updateFromApi();
});

function NumberColor(value) {
		return(value > 0 ? 'plus'  : 'minus');
}

function ComposeString(value, percentSelected){
	if(value == '')
		return '-';

	return(value > 0 ? '+'  : '') + value + (percentSelected ? '%' : '$');
}

