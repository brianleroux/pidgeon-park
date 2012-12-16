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

media.stopRecord
================
オーディオファイルの録音を中止します。


    media.stopRecord();


概要
-----------
 `media.stopRecord` はオーディオファイルの録音を中止させる同期関数です。


サポートされているプラットフォーム
-------------------

- Android
- iOS

使用例
-------------

    // オーディオを録音します。
    // 
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // 成功時のコールバック
            function() {
                console.log("recordAudio():Audio Success");
            },
            
            // 失敗時のコールバック
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });

        // 録音開始
        mediaRec.startRecord();

        // 10秒後録音停止
        setTimeout(function() {
            mediaRec.stopRecord();
        }, 10000);
    }


詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>メディアの使用例</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.5.js"></script>
        <script type="text/javascript" charset="utf-8">

        // PhoneGapの読み込みを待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // オーディオの録音をします。
        // 
        function recordAudio() {
            var src = "myrecording.mp3";
            var mediaRec = new Media(src, onSuccess, onError);

            // 録音開始
            mediaRec.startRecord();

            // 10秒後に録音を停止
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " 秒");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }

        // PhoneGap準備完了
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // 成功時のコールバック
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }
    
        // 失敗時のコールバック
        //
        function onError(error) {
            alert('コード: '    + error.code    + '\n' + 
                  'メッセージ: ' + error.message + '\n');
        }

        // オーディオの再生位置をセット
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        </script>
      </head>
      <body onload="onLoad()">
        <p id="media">録音中...</p>
        <p id="audio_position"></p>
      </body>
    </html>

iOS に関する注意点
----------

- iOS上でのメソッド名は `stopAudioRecord` になります。
