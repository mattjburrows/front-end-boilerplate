/**
 * js > app.js
 * @author Matthew Burrows <matthew.burrows@essencedigital.com>
 */

// Sandbox the jQuery object to the $
( function ( $ ) {

	var $win = $(window),
		$doc = $(document),
		Ess  = Ess || {};

    console.log( {
        msg: 'Welcome to the Essence digital frontend boilerplate',
        win: $win,
        doc: $doc
    } );

} )( jQuery );