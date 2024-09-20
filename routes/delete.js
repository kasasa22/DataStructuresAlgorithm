const router = require('express').Router()

const fs = require('fs')

router.delete('/post/:id', (req, res) => {
    let id = parseInt(req.params.id);

    // Read and parse the existing data from Db.json
    let data = fs.readFileSync('./Db.json', 'utf-8');
    data = JSON.parse(data);

    // Find the index of the post with the given ID
    let postIndex = data.findIndex((obj) => obj.id === id);

    if (postIndex === -1) {
        return res.status(404).send({ msg: "Post not found" });
    }

    // Remove the post from the array
    let deletedPost = data.splice(postIndex, 1);

    // Write the updated data back to the file
    fs.writeFileSync('./Db.json', JSON.stringify(data, null, 2));

    // Send success response
    return res.status(200).send({ msg: "Post deleted successfully", deletedPost: deletedPost });
});


module.exports= router