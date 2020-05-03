-- Make a procedure that makes a credit based on artist, song, and producer name

-- Make a procedure to update link DAW to producer and add the DAW if necessary

DELIMITER //
CREATE PROCEDURE addLinkDAW (IN p_producerName VARCHAR(50), IN p_dawName VARCHAR(50), IN p_mName VARCHAR(25))
BEGIN
    DECLARE v_dawID INT DEFAULT 0; 
    DECLARE v_producerID INT; 

    SELECT d.ID INTO v_dawID FROM daw d WHERE d.manufacturer = p_mName AND p_dawName = d.name; 
    SELECT p.ID INTO v_producerID FROM producer p WHERE p.producerName = p_producerName; 

    IF(v_dawID = 0)THEN
        INSERT INTO daw (name, manufacturer) VALUES (p_dawName, p_mName); 
        SELECT d.ID INTO v_dawID FROM daw d WHERE d.manufacturer = p_mName AND p_dawName = d.name; 
    END IF; 

    INSERT INTO usesDaw VALUES(v_dawID, v_producerID); 
END //
DELIMITER ;