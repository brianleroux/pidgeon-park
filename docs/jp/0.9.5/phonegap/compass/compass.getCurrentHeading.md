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

compass.getCurrentHeading
=========================

現在のコンパスの向きを取得します。

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

概要
-----------

コンパスはデバイスが向いている方向を感知するセンサーです。コンパスはその方角を0から359.99の範囲で計測します。

コンパスの向きは `compassSuccess` コールバック関数を通じて返ります。

サポートされているプラットフォーム
-------------------

- Android
- iPhone

使用例
-------------

    function onSuccess(heading) {
        alert('現在の方位: ' + heading);
    };

    function onError() {
        alert('エラーが発生しました。');
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>コンパスの使用例</title>

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
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            alert('現在の方位: ' + heading);
        }
    
        // onError: 方位の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <h1>使用例</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    