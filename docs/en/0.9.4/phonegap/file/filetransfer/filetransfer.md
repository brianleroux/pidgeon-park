---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

FileTransfer
==========

FileTransfer is an object that allows you to upload files to a server.

Properties
----------

N/A

Methods
-------

- __upload__: sends a file to a server. 

Details
-------

The `FileTransfer` object provides a way to upload files to a remote server using an HTTP multi-part POST request.  Both HTTP and HTTPS protocols are supported.  Optional parameters can be specified by passing a FileUploadOptions object to the upload method.  On successful upload, the success callback will be called with a FileUploadResult object.  If an error occurs, the error callback will be invoked with a FileTransferError object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)

Quick Example
------------------------------
	
  	var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("An error has occurred: Code = " = error.code);
    }
	
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName="newfile.txt";
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var paths = navigator.fileMgr.getRootPaths();
	var ft = new FileTransfer();
    ft.upload(paths[0] + "newfile.txt", "http://some.server.com/upload.php", win, fail, options);
    
Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.4.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName="newfile.txt";
			options.mimeType="text/plain";

    		var params = new Object();
			params.value1 = "test";
			params.value2 = "param";
		
			options.params = params;
	
			var paths = navigator.fileMgr.getRootPaths();
			var ft = new FileTransfer();
    		ft.upload(paths[0] + "newfile.txt", "http://some.server.com/upload.php", win, fail, options);
        }

		function win(evt) {
        	console.log("Code = " + r.responseCode);
        	console.log("Response = " + r.response);
        	console.log("Sent = " + r.bytesSent);
		}
		
		function fail(evt) {
        	alert("An error has occurred: Code = " = error.code);
		}
		
        </script>
      </head>
      <body onload="onLoad()">
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
