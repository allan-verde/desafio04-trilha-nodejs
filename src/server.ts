import { app } from ".";
import { router } from "./routes";

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
