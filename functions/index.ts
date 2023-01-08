import { authDB } from "../firebase/serviceConfig"
import firestore from 'firebase-functions'
firestore.auth.user().onCreate( async (user )=>{

})