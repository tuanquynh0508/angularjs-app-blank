# SYMFONY 2 BLANK - Ver 1
## Blank template for Symfony 2 project
***

> ## NOTE:
> Trước khi bắt tay vào dự án cần cài đặt composer, Apache, PHP, MySQL

## INSTALL COMPOSER:
```
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer 
```
- Về sau chỉ cần gõ: $ composer

## I) APACHE ENVIRONMENT SETUP
---

### 1.1) Virtual Host:
```
NameVirtualHost *:8081
Listen *:8081
<VirtualHost *:8081>
	DocumentRoot "/home/tnguyennhu/gits/angularjs-app-blank/dist"
	DirectoryIndex index.html
	#SSLEngine on
	#SSLCertificateFile "conf/ssl.crt/server.crt"
	#SSLCertificateKeyFile "conf/ssl.key/server.key"
	<Directory "/home/tnguyennhu/gits/angularjs-app-blank/dist">
		Options Indexes FollowSymLinks
		AllowOverride All
		#Allow from All	
		Require all granted
	</Directory>
</VirtualHost>
```

### 1.2) Add HOST File
```
127.0.0.1 api-news.local
```

## II) SYMFONY SETUP CODE
---

### 2.1) Get Composer
- Vào thư mục gốc của code để cập nhật các thư viện của Symfony về, gõ:
```
composer update
```

### 2.2) Config Database
- Vào file app/config/parameters.yml, sửa đổi thông tin database cho đúng

### 2.3) Tạo database
- Từ thư mục gốc của code (api-news folder), gõ lệnh sau để tạo database:
```
php app/console doctrine:database:create
php app/console doctrine:schema:create
```

### 2.4) Insert Data Fixturer mẫu
- Từ thư mục gốc của code (api-news folder), gõ lệnh sau để tạo database:
```
php app/console doctrine:fixtures:load
```

> Hoặc là sử dụng luôn file SQL database.sql để restore database, có thể bỏ qua các bước 2.3 và 2.4

## III) Xem API Doc
---
- Từ trình duyệt gõ http://api-news.local/api/doc để xem thông tin về các Api. Có thể get api result bằng sandbox trong api doc cũng được.


## IV) Chạy API
---
- Sử dụng Postman trên Chrome để chạy thử api, đường link truy cập vào api như sau:
* http://api-news.local/api/v1/article.json?id=xxx
* http://api-news.local/api/v1/articles.json?page=1&limit=10&category_id=xxxx
* http://api-news.local/api/v1/categories.json

## V) BONUS
---
- Lệnh show danh sách tra API trong console:
```
php app/console route:debug | grep api
```

## VI) Demo Online URL
---
* [http://news.i-designer.net/](http://news.i-designer.net/)
* [http://news.i-designer.net/api/doc](http://news.i-designer.net/api/doc)
* [http://news.i-designer.net/api/v1/article.json?id=1](http://news.i-designer.net/api/v1/article.json?id=1)
* [http://news.i-designer.net/api/v1/articles.json?page=1&limit=10&category_id=1](http://news.i-designer.net/api/v1/articles.json?page=1&limit=10&category_id=1)
* [http://news.i-designer.net/api/v1/categories.json](http://news.i-designer.net/api/v1/categories.json)

## VII) Tài liệu tham khảo
---
* [http://welcometothebundle.com/symfony2-rest-api-the-best-2013-way/](http://welcometothebundle.com/symfony2-rest-api-the-best-2013-way/)
* [http://npmasters.com/2012/11/25/Symfony2-Rest-FOSRestBundle.html](http://npmasters.com/2012/11/25/Symfony2-Rest-FOSRestBundle.html)
* [http://obtao.com/blog/2013/05/create-rest-api-in-a-symfony-application/](http://obtao.com/blog/2013/05/create-rest-api-in-a-symfony-application/)
* [https://speakerdeck.com/gordalina/rest-apis-made-easy-with-symfony2](https://speakerdeck.com/gordalina/rest-apis-made-easy-with-symfony2)

## VIII) Cài đặt Grunt
```
sudo npm install -g grunt-cli
npm install -d
```
- Tạo code phpunit coverage
```
grunt phpunit
```
- Chạy phpunit 
```
phpunit -c app/
```
