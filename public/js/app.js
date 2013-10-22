/**
 * js > app.js
 * @author Matthew Burrows <matthew.burrows@essencedigital.com>
 */

// Sandbox the jQuery object to the $
( function ( $ ) {

	var $win = $(window),
		$doc = $(document),
		Ess  = Ess || function() {};

    Ess.prototype.test = function() {
        return 'This is a test';
    };

    console.log( {
        msg: 'Welcome to the Essence digital frontend boilerplate',
        win: $win,
        doc: $doc
    } );

} )( jQuery );