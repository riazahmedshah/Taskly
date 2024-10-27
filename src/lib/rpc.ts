import {hc} from "hono/client";

import { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
// export const client = hc<AppType>("http://localhost:3000");


// export const client = hc<AppType>(process.env.DEFAULT_URL!)