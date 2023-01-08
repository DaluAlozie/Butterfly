// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { auth, authDB } from '../../firebase/serviceConfig'
import { addDoc } from 'firebase/firestore'

type ReqProps = {
    email: string,
    firstName: string,
    surname: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
    const { email, firstName, surname }: ReqProps = req.body

    try {
        const user = await auth.createUser(req.body)
        const result = await authDB.collection('/Users').doc(user.uid).set({ email, firstName, surname})
        res.status(200).json(true)

    } catch (error) {
        res.status(200).json(false)
    }
}
