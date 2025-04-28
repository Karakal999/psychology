import { Auth, User } from './types/auth';

// Mock storage for user data
interface StoredUser extends User {
  password: string;
}

let currentUser: User | null = null;
const users: StoredUser[] = [];
const subscribers: ((user: User | null) => void)[] = [];

const notifySubscribers = () => {
  subscribers.forEach(callback => callback(currentUser));
};

export const auth: Auth = {
  get currentUser() {
    return currentUser;
  },
  
  async signInWithEmailAndPassword(email: string, password: string) {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    currentUser = { email: user.email, uid: user.uid };
    notifySubscribers();
    return { user: currentUser };
  },

  async createUserWithEmailAndPassword(email: string, password: string) {
    if (users.some(u => u.email === email)) {
      throw new Error('Email already in use');
    }
    const newUser: StoredUser = {
      email,
      password,
      uid: Math.random().toString(36).substring(7),
    };
    users.push(newUser);
    currentUser = { email: newUser.email, uid: newUser.uid };
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