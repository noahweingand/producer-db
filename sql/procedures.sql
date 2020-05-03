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


-- Make same procedure but for VSTs
DELIMITER //
CREATE PROCEDURE addLinkVST (IN p_producerName VARCHAR(50), IN p_vstName VARCHAR(50), IN p_mName VARCHAR(25))
BEGIN
    DECLARE v_vstID INT DEFAULT 0; 
    DECLARE v_producerID INT; 

    SELECT v.ID INTO v_vstID FROM vst v WHERE v.manufacturer = p_mName AND p_vstName = v.name; 
    SELECT p.ID INTO v_producerID FROM producer p WHERE p.producerName = p_producerName; 

    IF(v_vstID = 0)THEN
        INSERT INTO vst (name, manufacturer) VALUES (p_vstName, p_mName); 
        SELECT v.ID INTO v_dawID FROM vst v WHERE v.manufacturer = p_mName AND p_vstName = v.name; 
    END IF; 

    INSERT INTO usesVst VALUES(v_vstID, v_producerID); 
END //
DELIMITER ;

-- Make same but for hardware
DELIMITER //
CREATE PROCEDURE addLinkHardware (IN p_producerName VARCHAR(50), IN p_hardName VARCHAR(50), IN p_mName VARCHAR(25))
BEGIN
    DECLARE v_hardID INT DEFAULT 0; 
    DECLARE v_producerID INT; 

    SELECT h.ID INTO v_hardID FROM hardware h WHERE h.manufacturer = p_mName AND p_hardName = h.name; 
    SELECT p.ID INTO v_producerID FROM producer p WHERE p.producerName = p_producerName; 

    IF(v_hardID = 0)THEN
        INSERT INTO hardware (name, manufacturer) VALUES (p_hardName, p_mName); 
        SELECT h.ID INTO v_hardID FROM hardware h WHERE h.manufacturer = p_mName AND p_hardName = h.name; 
    END IF; 

    INSERT INTO usesHardware VALUES(v_hardID, v_producerID); 
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE addTag (IN p_producerName VARCHAR(50), IN p_tagName VARCHAR(50), IN p_soundLink VARCHAR(50))
BEGIN
    DECLARE v_producerID INT; 
    DECLARE v_tagID INT; 
    SELECT p.ID INTO v_producerID FROM producer p WHERE p.producerName = p_producerName; 

    INSERT INTO tag (name, sound) VALUES(p_tagName, p_soundLink); 

    SELECT ID into v_tagID FROM tag t WHERE t.name = p_tagName AND t.sound = p_soundLink; 
    INSERT INTO hasTag VALUES(v_producerID, v_tagID); 
END //
DELIMITER ; 