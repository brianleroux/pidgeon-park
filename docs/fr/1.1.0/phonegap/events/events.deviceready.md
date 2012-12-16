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

deviceready
===========

Cet évènement est déclenché lorsque PhoneGap est entièrement chargé.

    document.addEventListener("deviceready", yourCallbackFunction, false);

Détails
-------

Il s'agit d'un évènement très important que toute application PhoneGap devrait utiliser.

Le code de PhoneGap est composé de deux parties : la partie native et JavaScript. Pendant le chargement de la partie native, une image de chargement est affichée. En revanche, la partie JavaScript est chargée uniquement avec le DOM. Cela signifie que votre application web pourait , éventuellement, faire appel à des fonctions de PhoneGap avant que celui-ci ne soit chargé.

L'évènement PhoneGap `deviceready` est déclenché une fois PhoneGap entièrement chargé. Une fois cet évènement déclenché, vous pouvez sans crainte faire appel aux fonctions PhoneGap.

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` dès le chargement du DOM de la page HTML chargé.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS

Exemple rapide
--------------

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // L'API PhoneGap est maintenant utilisable sans risque.
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement deviceready PhoneGap</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Appeler onDeviceReady lorsque PhoneGap est prêt.
        //
        // Pour le moment, le document est chargé mais pas phonegap-1.1.0.js.
        // Lorsque PhoneGap sera chargé et capable de communiquer avec la partie native du mobile,
        // il déclenchera l'évènement `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap est chargé et il est maintenant possible d'appeler des fonctions PhoneGap
        //
        function onDeviceReady() {
        	// L'API PhoneGap est maintenant utilisable sans risque.
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    
Singularités BlackBerry (OS 4.6)
--------------------------------

Les évènements personnalisés ne sont pas supportés par le RIM BrowserField (vue navigateur web), l'évènement `deviceready` ne sera donc jamais déclenché. 

Une solution de contournement consiste à scruter manuellement `PhoneGap.available` jusqu'à ce que PhoneGap soit entièrement chargé.

    function onLoad() {
        // Le navigateur de BlackBerry OS 4 ne gère pas les évènements personnalisés.
        // On va donc attendre manuellement que PhoneGap soit disponible.
        //
        var intervalID = window.setInterval(
          function() {
              if (PhoneGap.available) {
                  window.clearInterval(intervalID);
                  onDeviceReady();
              }
          },
          500
        );
    }

    function onDeviceReady() {
        // L'API PhoneGap est maintenant utilisable sans risque.
    }
