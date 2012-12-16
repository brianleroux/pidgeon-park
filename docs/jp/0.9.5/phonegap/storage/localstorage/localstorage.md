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

localStorage
===============

W3C Storage interface (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)の操作を提供します。

    var storage = window.localStorage;

メソッド
-------

- __key__: キーの名前を返します。
- __getItem__: キーによって指定されたアイテムを返します。
- __setItem__: キーによって指定されたアイテムを保存します。
- __removeItem__: キーによって指定されたアイテムを削除します。
- __clear__: 全てのキーとアイテムを削除します。

詳細
-----------

localStorage はキーと値のペアでデータを管理します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

キーを取得する例
-------------

    var keyName = window.localStorage.key(0);

項目を登録する例
-------------

    window.localStorage.setItem("key", "value");

項目を取得する例
-------------

	var value = window.localStorage.getItem("key");

アイテムを削除する例
-------------

	window.localStorage.removeItem("key");

ローカルストレージをクリアする例
-------------

	window.localStorage.clear();

詳細な使用例
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>連絡先の使用例</title>

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
			window.localStorage.setItem("key", "value");
			var keyname = window.localStorage.key(i);
			// keyname の値は "key" となります。
			var value = window.localStorage.getItem("key");
			// value の値は "value" となります。
			window.localStorage.removeItem("key");
			window.localStorage.setItem("key2", "value2");
			window.localStorage.clear();
			// localStorage は空です。
        }
    

        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>ローカルストレージのサンプル</p>
      </body>
    </html>