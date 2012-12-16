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

notification.confirm
====================

カスタマイズ可能な認証ダイアログボックスを表示します。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ ダイアログのメッセージです。 (`String`)
- __confirmCallback:__ - 押されたボタンのインデックス（1,2,3...）とともに呼び出されるコールバック関数です。 (`Number`)
- __title:__ ダイアログのタイトルです。(`String`) (Optional, Default: "Confirm")
- __buttonLabels:__ ボタンのラベルを設定するためのカンマ区切りのStringです。 (`String`) (Optional, Default: "OK,Cancel")
    
概要
-----------

 `notification.confirm` はブラウザの `confirm` 関数よりも広いカスタマイズ性を持ったネイティブダイアログボックスを表示する関数です。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iPhone

使用例
-------------

	// 確認ダイアログの表示プロセスの開始
	function onConfirm(button) {
		alert('選択されたボタン ' + button);
	}

    // 確認ダイアログを表示
    //
    function showConfirm() {
        navigator.notification.confirm(
	        'メッセージの内容',  // メッセージ
			onConfirm,	// 選択されたボタンによって呼ばれるコールバック
	        'タイトルの内容',    // タイトル
	        'ボタンの内容'  // ボタン
        );
    }
        
詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>通知機能の使用例</title>

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
            // 空のコード
        }
    
		// 確認ダイアログの表示プロセスの開始
		function onConfirm(button) {
			alert('選択されたボタン ' + button);
		}

        // 確認ダイアログの表示
        //
        function showConfirm() {
            navigator.notification.confirm(
		        'メッセージの内容',  // メッセージ
				onConfirm,				// 選択されたボタンによって呼ばれるコールバック
		        'タイトルの内容',            // タイトル
		        'ボタンの内容'          // ボタン
            );
        }
    
        </script>
      </head>
      <body onload="onLoad()">
        <p><a href="#" onclick="showConfirm(); return false;">確認</a></p>
      </body>
    </html>