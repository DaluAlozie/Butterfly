import { initializeApp, cert, getApp} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'

let app;
try {
    app = getApp("service");
} catch (error) {
    app = initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            }),
        databaseURL: process.env.FIREBASE_DATABASE_URL
        },
        "service"
    );
}

const authDB = getFirestore(app) 
export { authDB } 