CREATE DATABASE revshop;

CREATE TABLE user(
	ID int NOT NULL auto_increment,
    FirstName varchar(25),
    LastName varchar(25),
    Email varchar(255),
    Password varchar(255),
    PRIMARY KEY(ID)
);

CREATE TABLE products(
ID int NOT NULL AUTO_INCREMENT,
product_name varchar(255),
info TEXT,
price DECIMAL(10,2),
PRIMARY KEY(id)
);

CREATE TABLE orders(
ID int NOT NULL AUTO_INCREMENT,
user_id int,
total DECIMAL(10,2),
street VARCHAR(40),
city varchar(30),
state char(2),
zip char(5),
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE order_items(
order_id int,
product_id int,
PRIMARY KEY(order_id, product_id),
CONSTRAINT FK_ORDERS FOREIGN KEY(order_id) REFERENCES orders(ID),
CONSTRAINT FK_PRODUCTS FOREIGN KEY(product_id) REFERENCES products(ID)
);

CREATE TABLE reviews(
user_id int,
product_id int,
review TEXT,
PRIMARY KEY(user_id, product_id),
CONSTRAINT FK_USERREVIEW FOREIGN KEY(user_id) REFERENCES user(ID),
CONSTRAINT FK_PRODUCTREVIEW FOREIGN KEY(product_id) REFERENCES products(ID)
);

CREATE TABLE cart(
user_id int,
product_id int,
quatity int, 
PRIMARY KEY(user_id, product_id),
CONSTRAINT FK_USERCART FOREIGN KEY(user_id) REFERENCES user(ID),
CONSTRAINT FK_PRODUCTCART FOREIGN KEY(product_id) REFERENCES products(ID)
);



CREATE TABLE favorites(
user_id int,
product_id int,
PRIMARY KEY(user_id, product_id),
CONSTRAINT FK_USERFAV FOREIGN KEY(user_id) REFERENCES user(ID),
CONSTRAINT FK_PRODUCTFAV FOREIGN KEY(product_id) REFERENCES products(ID)
);