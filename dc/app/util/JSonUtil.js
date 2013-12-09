JSonUtil = {

	save: function( fileName, data , saveSuccess, saveError){
		
		alert(data);

			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
		        
		    	fileSystem.root.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

		    		fileEntry.createWriter(function(writer){
			    		
		    			alert(data);
		    			
		    	        writer.write(data);

		    	        saveSuccess();
			        	
		    		}, saveError);
		        }, saveError);
		    }, saveError);
		
    }
}