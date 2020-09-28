INSERT INTO posts (users_id, content, created_at)
VALUES ($1, $2, NOW()) /* NOW gives the current date and time */
returning *;