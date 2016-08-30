Vue.filter( "zeropad", function( value ) {
  if ( value > 0 && value < 10 ) {
    return "0" + value;
  }
  return value;
});

Vue.filter( "titlecase", function( str ) {
  return str.split( " " ).map( function ( item ) {
      return item.charAt( 0 ).toUpperCase() + item.substring( 1 );
  }).join( " " );
});
