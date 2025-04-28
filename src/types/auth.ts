export interface AuthError {
  code: string;
  message: string;
}

export interface User {
  email: string;
  uid: string;
}

export interface AuthResponse {
  user: User;
}

export interface Auth {
  currentUser: User | null;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<{ user: User }>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<{ user: User }>;
  signOut: () => Promise<void>;
  onAuthStateChanged: (callback: (user: User | null) => void) => () => void;
} 