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

FileSystem
==========

Un objet `FileSystem` représente un système de fichiers.

Propriétés
----------

- __name:__ Le nom du système de fichiers. _(DOMString)_
- __root:__ Le répertoire racine du système de fichiers. _(DirectoryEntry)_

Détails
-------

L'objet `FileSystem` contient les informations d'un système de fichiers. Le nom du système de fichier est unique parmi la liste des systèmes de fichiers exposés.  La propriété root contient un objet `DirectoryEntry` qui représente le répertoire racine du système de fichier.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

	function onSuccess(fileSystem) {
		console.log(fileSystem.name);
		console.log(fileSystem.root.name);
	}
	
	// Atteindre le système de fichier persistant
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple FileSystem</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }

		function onFileSystemSuccess(fileSystem) {
			console.log(fileSystem.name);
			console.log(fileSystem.root.name);
		}
		
		function fail(evt) {
			console.log(evt.target.error.code);
		}
		
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>FileSystem</p>
      </body>
    </html>
