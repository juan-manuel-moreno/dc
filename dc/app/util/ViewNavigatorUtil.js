ViewNavigatorUtil = {

	replaceView: function( view ){
		if(window.viewNavigator.animating){
			var func = this.replaceViewPerform(view, 3 );
			setTimeout( func , window.viewNavigator.animationDuration );
		} else {
    		window.viewNavigator.replaceView( view );
		}
    },
    replaceViewPerform: function( view , times){
    	return function() {
    		if(window.viewNavigator.animating){
    			if(times > 0){
    				var func = this.replaceViewPerform(view, times - 1 );
    				setTimeout( func , window.viewNavigator.animationDuration );
    			}
    		} else {
    			window.viewNavigator.replaceView( view );
    		}
    	};
    },
	pushView: function( view ){
		if(window.viewNavigator.animating){
			var func = this.pushViewPerform(view, 3 );
			setTimeout( func , window.viewNavigator.animationDuration );
		} else {
    		window.viewNavigator.pushView( view );
		}
    },
    pushViewPerform: function( view , times){
    	return function() {
    		if(window.viewNavigator.animating){
    			if(times > 0){
    				var func = this.pushViewPerform(view, times - 1 );
    				setTimeout( func , window.viewNavigator.animationDuration );
    			}
    		} else {
    			window.viewNavigator.pushView( view );
    		}
    	};
    }

}