CREATE TABLE producer(
	ID				int NOT NULL AUTO_INCREMENT,
    producerName	varchar(50) NOT NULL,
    firstName		varchar(20),
    lastName		varchar(20),
    dob			    date,
    dod			    date,
    Hometown		varchar(50),
    wikiPage		varchar(255),
    instagram		varchar(30),
    twitter			varchar(15),
    email			varchar(50),
    PRIMARY KEY (ID)
    );

CREATE TABLE song(
	ID			int NOT NULL AUTO_INCREMENT,
	title		varchar(50) NOT NULL,
	length		time,
	album		varchar(50),
	genre		varchar(20),
	PRIMARY KEY(ID));

CREATE TABLE artist(
	ID			int NOT NULL AUTO_INCREMENT,
    stageName 	varchar(50),
	firstName	varchar(20),
	lastName	varchar(20),
    dob			date,
    dod			date,
    hometown    varchar(50),
    wikiPage	varchar(255),
    instagram	varchar(30),
    twitter		varchar(15),
    email		varchar(50),
    PRIMARY KEY (ID)
    );

CREATE TABLE tag(
	ID		int NOT NULL AUTO_INCREMENT,
	name	varchar(50),
	sound	varchar(50),
	PRIMARY KEY (ID));

CREATE TABLE affiliation(
	ID			int NOT NULL AUTO_INCREMENT,
	labelName	varchar(50),
	netWorth	double,
	PRIMARY KEY (ID));

CREATE TABLE award(
	ID			int NOT NULL AUTO_INCREMENT,
	name		varchar(50),
	year		date,
	company	    varchar(50),
	PRIMARY KEY(ID));

CREATE TABLE vst(
	ID				int NOT NULL AUTO_INCREMENT,
	name		    varchar(50),
	manufacturer 	varchar(25),
	PRIMARY KEY(ID));

CREATE TABLE hardware(
	ID			int NOT NULL AUTO_INCREMENT,
	name		    varchar(50),
	manufacturer 	varchar(25),
	PRIMARY KEY(ID));

CREATE TABLE daw(
	ID				int NOT NULL AUTO_INCREMENT,
	name		    varchar(50),
	manufacturer 	varchar(25),
	PRIMARY KEY(ID));

CREATE TABLE users(
	ID				int NOT NULL AUTO_INCREMENT,
	username	    varchar(15),
	passwordHash	char(40),
	Email		    varchar(50),
	Location	    varchar(50),
	PRIMARY KEY (ID));

CREATE TABLE admins(
	ID				int NOT NULL AUTO_INCREMENT,
	username	    varchar(15),
	passwordHash	char(40),
	email		    varchar(50),
	location	    varchar(50),
	PRIMARY KEY (ID));

CREATE TABLE credits(
	producerID	int,
	artistID	int,
	songID		int,
	PRIMARY KEY (producerID, artistID, songID),
	FOREIGN KEY (producerID) REFERENCES producer(ID),
	FOREIGN KEY (artistID) REFERENCES artist(ID),
	FOREIGN KEY (songID) REFERENCES song(ID));

CREATE TABLE usesDaw(
	dawID		int,
	producerID	int,
	PRIMARY KEY (dawID, producerID),
	FOREIGN KEY (dawID) REFERENCES daw(ID),
	FOREIGN KEY (producerID) REFERENCES producer(ID)); 

CREATE TABLE usesHardware(
	hardwareID	int,
	producerID	int,
	PRIMARY KEY (hardwareID, producerID),
	FOREIGN KEY (hardwareID) REFERENCES hardware(ID),
	FOREIGN KEY (producerID) REFERENCES producer(ID));

CREATE TABLE usesVst(
	vstID		    int,
	producerID		int,
	PRIMARY KEY (vstID, producerID),
	FOREIGN KEY (vstID) REFERENCES vst(ID),
	FOREIGN KEY (producerID) REFERENCES producer(ID));

CREATE TABLE hasTag(
	producerID	int, 
	tagID		int, 
	PRIMARY KEY (producerID, tagID),
	FOREIGN KEY (producerID) REFERENCES producer(ID), 
	FOREIGN KEY (tagID) REFERENCES tag(ID)); 

CREATE TABLE hasAward(
	awardID		int,
	producerID	int,
	PRIMARY KEY (awardID, producerID),
	FOREIGN KEY (awardID) REFERENCES award(ID),
	FOREIGN KEY (producerID) REFERENCES producer(ID));

CREATE TABLE hasAffiliation(
	producerID		int, 
	affiliationID	int,
	PRIMARY KEY (producerID, affiliationID),
	FOREIGN KEY (producerID) REFERENCES producer(ID), 
	FOREIGN KEY (affiliationID) REFERENCES affiliation(ID)); 