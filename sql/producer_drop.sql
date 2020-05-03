--drops all tables from producer db
SET foreign_key_checks = 0;

drop table if exists artist;
drop table if exists daw;
drop table if exists hardware;
drop table if exists hasTag;
drop table if exists producerCredits;
drop table if exists artistCredits;
drop table if exists producer;
drop table if exists song;
drop table if exists tag;
drop table if exists users;
drop table if exists usesDaw;
drop table if exists usesHardware;
drop table if exists usesVst;
drop table if exists vst;

SET foreign_key_checks = 1;