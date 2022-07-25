const express = require("express");
const router = express.Router();
const HomeService = require("../../services/home");

const homeService = new HomeService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  console.log("req", req.query);

  try {
    const elements = await homeService.getElements({ tags });

    res.status(200).json({
      data: elements,
      message: "home elements listed"
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:elementId", async function(req, res, next) {
  const { elementId } = req.params;

  console.log("req", req.params);

  try {
    const element = await homeService.getElement({ elementId });

    res.status(200).json({
      data: element,
      message: "home element retrieved"
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function(req, res, next) {
  const { body: element } = req;

  console.log("req", req.body);

  try {
    const createdElement = await homeService.createElement({ element });

    res.status(201).json({
      data: createdElement,
      message: "home element created"
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:elementId", async function(req, res, next) {
  const { elementId } = req.params;
  const { body: element } = req;

  console.log("req", req.params, req.body);

  try {
    const updatedElement = await homeService.updateElement({
      elementId,
      element
    });
    res.status(200).json({
      data: updatedElement,
      message: "home element updated"
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:elementId", async function(req, res, next) {
  const { elementId } = req.params;

  console.log("req", req.params);

  try {
    const deletedElement = await homeService.deleteElement({ elementId });

    res.status(200).json({
      data: deletedElement,
      message: "home element deleted"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
