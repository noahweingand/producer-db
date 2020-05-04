DROP TRIGGER sanitizeSocialMedia; 

DELIMITER //
CREATE TRIGGER sanitizeSocialMedia
BEFORE INSERT ON producer
FOR EACH ROW
BEGIN
    IF TRIM( BOTH '@' from new.twitter) <> '' THEN
        set new.twitter = CONCAT('@', TRIM( BOTH '@' FROM new.twitter)) ; 
    else
        set new.twitter = ''; 
    END IF; 

    IF TRIM( BOTH '@' from new.instagram) <> '' THEN 
        set new.instagram = CONCAT('@', TRIM( BOTH '@' FROM new.instagram)) ; 
    ELSE 
        set new.instagram = ''; 
    END IF; 
END //
DELIMITER ; 

-- Add trigger if song already exists in DB

DROP TRIGGER IF EXISTS songHelper;

DELIMITER //
CREATE TRIGGER songHelper
BEFORE INSERT ON song
FOR EACH ROW
BEGIN
    DECLARE ifExists INT DEFAULT 0; 

    SELECT count(s.ID) INTO ifExists FROM song s WHERE s.album = new.album AND s.title = new.title; 

    IF ifExists > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Song already exists!!!'; 
    END IF; 
END //
DELIMITER ; 