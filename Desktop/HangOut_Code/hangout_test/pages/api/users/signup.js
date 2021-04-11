import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {

        if (req.method === 'POST') {
            const { username, email, password } = JSON.parse(req.body)

           const {db } = await connectToDatabase();

           // find

           const user = await db.collection("users").insertMany([ { username, email, password} ])

            res.json(user)

        } else {
            res.json({ error: 'Method not allowed'})
        }

//   const { db } = await connectToDatabase();
//   const users = await db
//     .collection("users")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   res.json(users);
};