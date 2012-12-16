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

SQLResultSet
=======

 SQLTransaction の executeSql メソッドが呼ばれるときに SQLResultSet とともにコールバックを呼び出します。

プロパティ
-------

- __insertId__: SQL命令文によりデータベースに挿入された行の行番号です。
- __rowAffected__: SQL 命令文によって変更された行の数です。 命令文がデータベースに変更を加えない場合は0を返します。
- __rows__: 返された結果を表す SQLResultSetRowList オブジェクトです。 行が返されなかった場合、オブジェクトは空になります。

詳細
-------

SQLTransaction executeSql メソッドが呼び出されると、コールバックがSQLResultSetオブジェクトとともに呼び出されます。
SQLResultSetオブジェクトは `insertId` 、`rowAffected` 、そして `SQLResultSetList` という3つのプロパティーを持っています。
 `insertId` は SQL へのinsertが成功した行の番号を返します。SQL 命令文がinsertではなかった場合、`insertId` はセットされません。
 `rowAffected` はSQLのselectに対しては常に0を取ります。insert/updateに対しては修正された行の数を返します。
 `SQLResultSetList` はSQLのselectによって返されたデータを保存します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 以上)
- iPhone

SQLを実行する例
------------------

	function queryDB(tx) {
		tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	}

	function querySuccess(tx, results) {
		// insert文でないため空になります。
		console.log("追加された行 = " + results.insertId);
		// select文が挿入されているため0になります。
		console.log("挿入された行 = " + results.rowAffected);
		// select文によって返される行数
		console.log("検索された行 = " + results.rows.length);
	}
	
	function errorCB(err) {
		alert("エラーを処理します: "+err.code);
	}
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
	db.transaction(queryDB, errorCB);

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

		// データベースの操作 
		//
		function populateDB(tx) {
			tx.executeSql('DROP TABLE DEMO IF EXISTS');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
			tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
		}

		// データベースに問い合わせ
		//
		function queryDB(tx) {
			tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
		}

		// 成功時のコールバック
		//
		function querySuccess(tx, results) {
			// insert文でないため空になります。
			console.log("追加された行 = " + results.insertId);
			// select文が挿入されているため0になります。
			console.log("挿入された行 = " + results.rowAffected);
			// select文によって返される行数
			console.log("検索された行 = " + results.rows.length);
		}

		// トランザクション失敗時のコールバック
		//
		function errorCB(err) {
			console.log("エラーが発生しました: "+err.code);
		}

		// トランザクション成功時のコールバック
		//
		function successCB() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(queryDB, errorCB);
		}

		// PhoneGapの準備完了
		//
		function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
			db.transaction(populateDB, errorCB, successCB);
		}
	
        </script>
      </head>
      <body onload="onLoad()">
        <h1>サンプル</h1>
        <p>データベース</p>
      </body>
    </html>