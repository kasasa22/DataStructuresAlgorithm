const router = require('express').Router();
const fs = require('fs');

router.get('/post/:id', (req, res) => {
    let id = parseInt(req.params.id);

    // Read and parse the existing data from Db.json
    let data = fs.readFileSync('./Db.json', 'utf-8');
    data = JSON.parse(data);

    // Find the post with the given ID
    let post = data.find((obj) => obj.id === id);

    if (!post) {
        return res.status(404).send({ msg: "Post not found" });
    }

    // Send the post as a response
    return res.status(200).send({ post });
});


module.exports = router