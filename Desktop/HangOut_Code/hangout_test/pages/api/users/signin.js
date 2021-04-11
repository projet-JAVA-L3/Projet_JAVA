import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {

        if (req.method === 'POST') {
            const { email, password } = JSON.parse(req.body)

           const {db } = await connectToDatabase();

           const user = await db.collection("users").find({email, password}).toArray((err, users) => {
               if(err || users.length > 1) {
                   res.json({ error: 'erreur interne'})
               }
               else if(users.length==0) {
                   res.json({error: 'e-mail ou mot de passe incorrect'})
               }
               // En cas d'un seul utilisateur trouvé
               else {
                   res.json({success: 'connexion effectuée'})
               }
           })

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