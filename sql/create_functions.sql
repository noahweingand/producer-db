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