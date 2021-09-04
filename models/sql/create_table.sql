DROP TABLE IF EXISTS schedule;

CREATE TABLE IF NOT EXISTS schedule (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  day VARCHAR(255) NOT NULL,
  start_at TIME NOT NULL,
  end_at TIME NOT NULL
);