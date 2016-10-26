
  $( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  } 
  
  
  $('#slider').slider({
	min: 0,
	max: 100,
	value: 50,
	step: 10 // sliderAccess will inherit this
}).sliderAccess({
	touchonly : false,
	where: 'before'
});



$('#basic_example_1').slider().sliderAccess({
						touchonly : false
					});
  