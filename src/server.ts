import { serverHttp } from "./app";

const PORT = process.env.PORT || 4000;

serverHttp.listen(4000, () =>
  console.log(`🔥 Server is running on port  ${PORT}`)
);
