// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return new Response("OK");
};
