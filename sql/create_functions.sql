DROP FUNCTION IF EXISTS getProducerAge;
DELIMITER //
CREATE FUNCTION getProducerAge(p_prod_name VARCHAR(50)) RETURNS INT
BEGIN
    DECLARE v_dob date;
    DECLARE v_age int;
    SELECT dob INTO v_dob FROM producer WHERE producerName = p_prod_name;
    SET v_age = YEAR(CURDATE()) - YEAR(v_dob);
    RETURN v_age;
END//
DELIMITER ;

DROP FUNCTION IF EXISTS getArtistAge;
DELIMITER //
CREATE FUNCTION getArtistAge(p_artist_name VARCHAR(50)) RETURNS INT
BEGIN
    DECLARE v_dob date;
    DECLARE v_age int;
    SELECT dob INTO v_dob FROM artist WHERE stageName = p_artist_name;
    SET v_age = YEAR(CURDATE()) - YEAR(v_dob);
    RETURN v_age;
END//
DELIMITER ;