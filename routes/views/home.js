const express = require("express");
const router = express.Router();
const HomeService = require("../../services/home");

const homeService = new HomeService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;
  try {
    const elements = await homeService.getElements({ tags });
    res.render("elements", { elements });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
