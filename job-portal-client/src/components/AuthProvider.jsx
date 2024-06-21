// import React, { createContext, useContext, useState } from 'react';
// import { User } from '../types/User';

// const AuthContext = React.createContext<User | null>(null);

//  AuthProviderProps = {
//   children: React.ReactNode;
//   isSignedIn?: boolean;
// };

// export default function AuthProvider({
//   children,
//   isSignedIn,
// }: AuthProviderProps) {
//   // Uses `isSignedIn` prop to determine whether or not to render a user
//   const [user] = useState<User | null>(isSignedIn ? { id: 1 } : null);

//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// };
