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

FileError
========

`FileError` オブジェクトはエラーが発生した場合にFileWriter/FileReaderのerrorプロパティ上にセットされます。 

プロパティ
----------

- __code:__ 下記のエラーコードのいずれかがセットされます

定数
---------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`

詳細
-----------

`FileError` オブジェクトはファイルの読み書き時に回避不能なエラーが発生した時に発行されます。
現在の状態が FileWriter.DONE または FileWriter.INIT である場合に abort メソッドを呼び出すと、 ABORT_ERR が発行されます。
