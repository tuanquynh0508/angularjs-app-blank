# ANGULARJS APPLICATION BLANK - Ver 1
## Blank template for AngularJs project, base struct, unitest

> ## NOTE:
> Trước khi bắt tay vào dự án cần cài đặt NodeJs, Grunt và Bower

## INSTALL NodeJs:
```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs
```

## INSTALL Grunt, Bower, Karma and Protractor:
```
sudo npm install -g grunt-cli karma bower protractor
npm install -d
bower install
```

### protractor & webdriver are for running e2e test only
```
sudo webdriver-manager update
```

## I) APACHE ENVIRONMENT SETUP

### 1.1) Virtual Host:
```
NameVirtualHost *:8081
Listen *:8081
<VirtualHost *:8081>
	DocumentRoot "/home/user/gits/angularjs-app-blank/dist"
	DirectoryIndex index.html
	#SSLEngine on
	#SSLCertificateFile "conf/ssl.crt/server.crt"
	#SSLCertificateKeyFile "conf/ssl.key/server.key"
	<Directory "/home/user/gits/angularjs-app-blank/dist">
		Options Indexes FollowSymLinks
		AllowOverride All
		#Allow from All
		Require all granted
	</Directory>
</VirtualHost>
```

## II) SETUP CODE

### 2.1) Get NodeJs Application
- Vào thư mục gốc của code để cập nhật các thư viện của NodeJs gõ:
```
npm install -d
```

### 2.2) Get Bower Vendor
- Vào thư mục gốc của code để cập nhật các thư viện gõ:
```
bower install
```

### 2.3) Build project
- Vào thư mục gốc của code để build dự án gõ:
```
grunt build
```

### 2.4) Auto Build project
- Trong quá trình dev, để dự án tự build sau mỗi thay đổi thì làm như sau. Vào thư mục gốc của code gõ:
```
grunt watch
```

## III) Demo Online URL
---
* [http://angularjs.i-designer.net/](http://angularjs.i-designer.net/)

## IV) Tài liệu tham khảo
* [https://angularjs.org/](https://angularjs.org/)

## V) Unit Test

```
grunt karma
```
