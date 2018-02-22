
<script type="text/javascript">
	
	$(function(){


		
		$.ajax({

			url: "http://api.wunderground.com/api/455c828b0d4b0403/conditions/q/IN/Bangalore.json",
		  	dataType: "json",
		 	success: function(url) {
								    console.log(url);
								    var place='Bangalore';
									$("#place").html(place);
									var temp=url.current_observation.temp_c;
									$("#temp").html(temp);
									
									
									}

			});

		$("#container").draggable();
		});

</script>

