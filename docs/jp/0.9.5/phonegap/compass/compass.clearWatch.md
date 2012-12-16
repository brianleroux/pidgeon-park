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

compass.clearWatch
========================

watchID パラメータによって参照されるコンパスの監視を停止します。

    navigator.compass.clearWatch(watchID);

- __watchID__: compass.watchHeadingによって返されるID

サポートされているプラットフォーム
-------------------

- Android
- iPhone

使用例
-------------

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... 後に続く ...
    
    navigator.compass.clearWatch(watchID);
    
詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>コンパスの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // watchIDは現在のウォッチ方位を参照します
        var watchID = null;
        
        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            startWatch();
        }

        // コンパスのウォッチを開始
        //
        function startWatch() {
            
            // 3秒ごとにコンパス情報を更新
            var options = { frequency: 3000 };
            
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
        
        // コンパスのウォッチを停止
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: 現在の方位を取得
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = '方位: ' + heading;
        }

        // onError: 方位の取得に失敗
        //
        function onError() {
            alert('エラーが発生しました。');
        }

        </script>
      </head>
      <body onload="onLoad()">
        <div id="heading">方位情報を取得しています...</div>
        <button onclick="startWatch();">ウォッチ開始</button>
        <button onclick="stopWatch();">ウォッチ終了</button>
      </body>
    </html>