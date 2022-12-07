$(function(){
	//* Get Json Data-- ABC
	getKindJson('src/','livecdupd','CNN');		
})

function btnClick(evt) {
	var obj = evt.currentTarget;
	var clsname = obj.className;
	var file = obj.dataset.url + obj.dataset.folder + "/";
	if (clsname.indexOf("x32") == -1) {
		file += obj.dataset.x64;
	} else {
		file += obj.dataset.x32;
	}	
	window.location=file;	
}

function getKindJson(fpath, fname, fkind) {
	fileName = fpath + fname + '.json';   	
	// read JSON object from file
	$.getJSON(fileName,function(result){         
	   json_obj = result;
		$.each(result, function(kind, field){   
			if(kind == fkind){
				var obj = "#dw-body";
				var rowid=0;		
				var url ="";
				var x32file="";
				var x64file="";
				for(let jj=0; jj<field.length; jj++) {
					rowid = jj+1;					
					url=field[jj].URL;
					x32file=field[jj].x32bits;
					x64file=field[jj].x64bits;
					str = "<tr id='"+ kind+ "-" + rowid + "'>" + 
					"<td>" + field[jj].date + "</td> <td> <p> " + field[jj].product + "</p></td>" +
					"<td> <p>" + field[jj].desc +
					"</p> </td> <td><a class='x32btn btn w3-win8-brown-l4 w3-hover-pale-green' onclick='btnClick(event)' " + 
					" data-x32='" + x32file + "' data-url='" + url + "' data-folder='" + field[jj].Folder + 
					"' download >" + x32file + "</a></td>" +					
					"<td> <a class='x64btn btn w3-win8-brown-l4 w3-hover-pale-green'  onclick='btnClick(event)' " + 
					"' data-x64='" + x64file + "' data-url='" + url + "' data-folder='" + field[jj].Folder + 					
					"' download>" + x64file + "</a> </td> " + 
					" </tr>";
					$(obj).append(str);
				  }
			  
				console.log(kind + " -- " + field.length);	
				return false; // 等於break
			} else{
				console.log(kind + " -- " + field.length);	
				return; 
			}									
		});
	  });
  }
