const admin = require("firebase-admin");

// Load your Firebase Admin credentials
const serviceAccount = require("./serviceAccountKey.json"); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://secondmemoryai-default-rtdb.firebaseio.com"
});

const db = admin.database();

async function deleteData() {
  try {
    await db.ref("pdfDocuments").remove();
    await db.ref("userChatHistory").remove();
    console.log("Deleted pdfDocuments and userChatHistory successfully.");
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

deleteData();
