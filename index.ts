/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const pathsNewClientArea = [
  '/dominios',
  '/emails-list'
]

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const urlTemp = new URL(request.url)

    let url = `http://cliente.whmcs.brasil:3000/`;

    if (pathsNewClientArea.includes(urlTemp.pathname)) {
      url = 'http://localhost:3001/'
    }

    request = new Request(url, request);
    const response = await fetch(request);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  },
} satisfies ExportedHandler<Env>;
