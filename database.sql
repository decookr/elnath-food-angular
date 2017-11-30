CREATE TABLE "food" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	deliciousness_rating INT NOT NULL,
	is_hot BOOLEAN NOT NULL
);

INSERT INTO food (name, deliciousness_rating, is_hot)
VALUES ('pizza', 500, true),
('tacos', 439, true),
('mushrooms', 1, false)
;

SELECT * FROM food;