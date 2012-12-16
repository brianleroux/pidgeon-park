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

cameraOptions
=============

Optional parameters to customize the camera settings.

    { quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true };

Options
-------

- __quality:__ Quality of saved image. Range is [0, 100]. (`Number`)

- __destinationType:__ Choose the format of the return value.  Defined in navigator.camera.DestinationType (`Number`)
        
            Camera.DestinationType = {
                DATA_URL : 0,                // Return image as base64 encoded string
                FILE_URI : 1                 // Return image file URI
            };

- __sourceType:__ Set the source of the picture.  Defined in nagivator.camera.PictureSourceType (`Number`)
     
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ Allow simple editing of image before selection. (`Boolean`)
    
Android Quirks
--------------

- Ignores the `allowEdit` parameter.
- Camera.PictureSourceType.PHOTOLIBRARY and Camera.PictureSourceType.SAVEDPHOTOALBUM both display the same photo album.

BlackBerry Quirks
-----------------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.
- Application must have key injection permissions to close native Camera application after photo is taken.
- Using Large image sizes may result in inability to encode image on later model devices with high resolution cameras (e.g. Torch 9800).

Palm Quirks
-----------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.

iPhone Quirks
--------------

- Set `quality` below 50 to avoid memory error on some devices.
- When `destinationType.FILE_URI` is used, photos taken with the camera and edited photos are saved in the application's Documents/tmp directory.
- The application's Documents/tmp directory is deleted when the application ends. Developers may also delete this directory using the navigator.fileMgr APIs if storage space is a concern.

           navigator.fileMgr.deleteDirectory("tmp", onSuccess, onFail);
           