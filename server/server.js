// this is our server
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





















app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;