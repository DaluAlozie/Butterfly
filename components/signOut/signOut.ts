import { auth } from "../../firebase/config";
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth'

export const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Sign Out Succsessful")
    }).catch((error) => {
      toast.error("Sign Out Unsuccsessful")
    });
  }