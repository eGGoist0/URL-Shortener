//Пути для получения запросов перенаправлает в нужные контроллеры
import { create } from "domain";
import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";
import { get } from "http";

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;