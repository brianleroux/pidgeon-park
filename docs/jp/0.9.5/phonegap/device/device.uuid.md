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

device.uuid
===========
デバイスの固有ID ([Universally Unique Identifier - UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier))を取得します。

    var string = device.uuid;
    
詳細
-----------

UUIDの生成方法については、デバイスの製造者やプラットフォームにより決定されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    // Android: ランダムな64ビットの数値を文字列として返却します。
    //          数値はデバイスの最初の起動時に生成されます。
    //
    // BlackBerry: デバイスのPIN番号を返却します。
    //             この番号は9桁のユニークな数字となります。
    //
    // iPhone: UIDeviceクラスドキュメントに記載されている通り
    //         ハードウェアIDに基づくハッシュ値を返却します。
    //         デバイスに固有でユーザーアカウントとは
    //         リンクされていません。
    //
    var deviceID = device.uuid;

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>デバイスプロパティーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'デバイス名: '     + device.name     + '<br />' + 
                                'PhoneGap: ' + device.phonegap + '<br />' + 
                                'プラットフォーム: ' + device.platform + '<br />' + 
                                'UUID: '     + device.uuid     + '<br />' + 
                                'バージョン: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="deviceProperties">デバイスプロパティーを読み込み中...</p>
      </body>
    </html>