const getAllPosts = async (db) => {
  const posts = await db.get_posts()
  return posts
}

module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  addPost: async (req, res) => {
  
    const db = req.app.get('db')

    //Pull user id from session
    const { id } = req.session.user

    //Get content from req.body
    const { content } = req.body

    //Save post to db
    await db.add_post([id, content])

    //Send array of posts
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  editPost: async (req, res) => {
   

    const db = req.app.get('db')

    //Get content from body
    const { content } = req.body

    //Get post id from params
    const { post_id } = req.params

    //Save updated post
    await db.edit_post([content, post_id])

    //Send array of posts
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  deletePost: async (req, res) => {
    

    const db = req.app.get('db')

    //Get post id from params
    const { post_id } = req.params

    //Delete post
    await db.delete_post([post_id])

    //Send back updated array
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
}