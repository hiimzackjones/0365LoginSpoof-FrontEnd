// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const endpoint = "https://us-central1-spoof-f0808.cloudfunctions.net/getCredentials";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = fetch(endpoint).then(x => x.json())
  res.status(200).json(await data);
  res.end();
}