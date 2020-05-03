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