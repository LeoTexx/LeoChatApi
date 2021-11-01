import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast10MessagesController } from "./controllers/GetLast10MessagesController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ensureIsMobile } from "./middleware/ensureIsMobile";

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>LIVE</h1>");
});

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/authenticate/app",
  ensureIsMobile,
  new AuthenticateUserController().handle
);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/messages/last10", new GetLast10MessagesController().handle);
router.get("/messages/last3", new GetLast3MessagesController().handle);
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
