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

notification.alert
==================

Shows a custom alert or dialog box.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ Dialog message (`String`)
- __alertCallback:__ Callback to invoke when alert dialog is dismissed. (`Function`)
- __title:__ Dialog title (`String`) (Optional, Default: "Alert")
- __buttonName:__ Button name (`String`) (Optional, Default: "OK")
    
Description
-----------

Most PhoneGap implementations use a native dialog box for this feature.  However, some platforms simply use the browser's `alert` function, which is typically less customizable.

Supported Platforms
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry Widgets (OS 5.0 and higher)
- iPhone

Quick Example
-------------

    // Android / BlackBerry Widgets (OS 5.0 and higher) / iPhone
    //
    function alertDismissed() {
        // do something
    }

    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('You are the winner!');
        
Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-0.9.2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap is ready
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
	    function alertDismissed() {
	        // do something
	    }

        // Show a custom alert
        //
        function showAlert() {
		    navigator.notification.alert(
		        'You are the winner!',  // message
		        alertDismissed,         // callback
		        'Game Over',            // title
		        'Done'                  // buttonName
		    );
        }
    
        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>