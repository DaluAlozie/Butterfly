// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { authDB } from '../../firebase/serviceConfig';
import { UserType } from '../../components/user/UserContext';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserType | null>) {
  const { email } = req.body
  
  const query = authDB.collection("Users").where("email", "==", email)
  const querySnapshot = await query.get()
  if (querySnapshot.empty) {
    console.log('No matching documents.');
    res.status(200).json(null)
    return 
  }  

  const { firstName, surname } = querySnapshot.docs[0].data()
  
  res.status(200).json({ firstName: firstName, surname: surname, email: email })
}
