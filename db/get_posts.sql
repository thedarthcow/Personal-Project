
SELECT p.id, u.email, p.users_id AS author_id, p.content, p.created_at  /* p and u are alias for posts and users */
FROM posts p
JOIN users u ON p.users_id = u.id; /* gives all the posts and who made them */