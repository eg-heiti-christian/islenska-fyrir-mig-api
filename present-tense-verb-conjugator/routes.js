const router = require("express").Router();

router.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

module.exports = router;