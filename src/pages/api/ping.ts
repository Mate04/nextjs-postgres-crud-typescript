// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next';
import {conn} from '../../utils/database';

// eslint-disable-next-line import/no-anonymous-default-export
export default async( req:NextApiRequest , res:NextApiResponse) =>{
  const response = await conn.query('SELECT NOW()');
  console.log(response.rows[0].now);
  return res.json({message: 'pong'});
};