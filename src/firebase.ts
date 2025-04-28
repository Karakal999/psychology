import { Auth, User } from './types/auth';

// Mock storage for user data
let currentUser: User | null = null;
const subscribers: ((user: User | null) => void)[] = [];

const notifySubscribers = () => {
  subscribers.forEach(callback => callback(currentUser));
};

export const auth: Auth = {
  get currentUser() {
    return currentUser;
  },
  
  async signInWithEmailAndPassword(email: string, password: string) {
    // In a real app, we would validate credentials here
    currentUser = {
      email,
      uid: Math.random().toString(36).substring(7),
    };
    notifySubscribers();
    return { user: currentUser };
  },

  async createUserWithEmailAndPassword(email: string, password: string) {
    // In a real app, we would validate and store the user here
    currentUser = {
      email,
      uid: Math.random().toString(36).substring(7),
    };
    notifySubscribers();
    return { user: currentUser };
  },

  async signOut() {
    currentUser = null;
    notifySubscribers();
  },

  onAuthStateChanged(callback: (user: User | null) => void) {
    subscribers.push(callback);
    // Call immediately with current state
    callback(currentUser);
    // Return unsubscribe function
    return () => {
      const index = subscribers.indexOf(callback);
      if (index > -1) {
        subscribers.splice(index, 1);
      }
    };
  },
}; 