const router = require('express').Router();
const fs = require('fs');

router.post('/post', (req, res) => {
    let body = req.body;

    // Check if name and post exist
    if (!(body.name && body.post)) {
        return res.status(400).send({ msg: "One key is missing" });
    }

    // Ensure only name and post keys are being sent
    let size = Object.keys(body).length;
    if (!(size == 2)) return res.status(400).send({ msg: "You are sending extra data" });

    // Validate name length
    if (body.name.length < 6) {
        return res.status(400).send({ msg: "Name should be at least 6 characters long" });
    }

    // Ensure name is not a number
    if (typeof body.name !== 'string') {
        return res.status(400).send({ msg: "Numbers not allowed in name" });
    }

    // Ensure post is a string
    if (typeof body.post !== 'string') {
        return res.status(400).send({ msg: "Only strings are allowed in post" });
    }

    // Read and parse the existing data from Db.json
    let data = fs.readFileSync('./Db.json', 'utf-8');
    data = JSON.parse(data);

    // Find the highest ID in the existing data
    let max = 0;
    data.forEach((obj) => {
        if (obj.id > max) max = obj.id;
    });

    // Add new post with a new ID
    let newPost = {
        id: max + 1,
        name: body.name,
        post: body.post
    };

    // Add the new post to the data array
    data.push(newPost);

    // Write the updated data back to the file
    fs.writeFileSync('./Db.json', JSON.stringify(data, null, 2));

    // Send success response
    return res.status(201).send({ msg: "Post created successfully", post: newPost });
});


module.exports = router;
