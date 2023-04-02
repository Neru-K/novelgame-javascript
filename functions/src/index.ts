import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req: any, res: any) => {
  const original: string = req.query.text;

  const writeResult: FirebaseFirestore.DocumentReference = await admin
    .firestore()
    .collection("messages")
    .add({ original: original });

  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate(
    (
      snap: FirebaseFirestore.DocumentSnapshot,
      context: functions.EventContext
    ) => {
      const original: string = (snap.data() as { original: string }).original;

      functions.logger.log("Uppercasing", context.params.documentId, original);

      const uppercase: string = original.toUpperCase();

      return snap.ref.set({ uppercase }, { merge: true });
    }
  );
