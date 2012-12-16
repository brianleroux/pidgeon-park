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

accelerometer.getCurrentAcceleration
====================================

加速度センサーはデバイスの傾きの増加量を計測します。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

概要
-----------

加速度センサーはデバイスの傾きの増加量を計測します。
加速度情報は `accelerometerSuccess` コールバック関数によって返されます。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

    function onSuccess(acceleration) {
        alert('X軸における加速度: ' + acceleration.x + '\n' +
              'Y軸における加速度: ' + acceleration.y + '\n' +
              'Z軸における加速度: ' + acceleration.z + '\n' +
              'タイムスタンプ: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('エラーが発生しました');
    };

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>加速度センサーの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込み完了まで待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: 現在の加速度情報を取得
        //
        function onSuccess(acceleration) {
            alert('X軸における加速度: ' + acceleration.x + '\n' +
                  'Y軸における加速度: ' + acceleration.y + '\n' +
                  'Z軸における加速度: ' + acceleration.z + '\n' +
                  'タイムスタンプ: '      + acceleration.timestamp + '\n');
        }
    
        // onError: 加速度取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>加速度センサーの使用例</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>
	
	iPhoneに関する注意点
-------------

- iPhoneはピンポイントでの現在加速度情報を得ることはできません。
- 加速度情報を取得するには加速度の変異を計測しながら一定の時間間隔でデータのキャプチャを行います。そのため、getCurrentAcceleration関数はPhoneGapの [wachAccelerometer] 関数で取得した最新値を返します。