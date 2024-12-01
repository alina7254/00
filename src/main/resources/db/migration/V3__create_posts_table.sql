CREATE TABLE IF NOT EXISTS posts (
    id BIGSERIAL PRIMARY KEY,
    content TEXT,
    author VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    op BOOLEAN DEFAULT FALSE,
    post_number INT NOT NULL,
    title VARCHAR(255),
    blob BYTEA,
    board_id INT REFERENCES boards(id) ON DELETE CASCADE,
    reply_to INT REFERENCES posts(id) ON DELETE SET NULL
);
