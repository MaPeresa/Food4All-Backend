import mongo from "mongodb";

let connection_string =
  "mongodb+srv://martinaperesa11:kK_Qvi2!p-_TuR@@food4all.ceyzryj.mongodb.net/";

let client = new mongo.MongoClient(connection_string, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = null;

export default () => {
  return new Promise((resolve, reject) => {
    if (db && client.isConnected()) {
      resolve(db);
    }

    client.connect((err) => {
      if (err) {
        reject("Došlo je do greške prilikom spajanja:" + err);
      } else {
        console.log("Uspješno spajanje na bazu");
        db = client.db("Food4All");
        resolve(db);
      }
    });
  });
};
