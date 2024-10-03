
import Signin from '@/components/signin';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOption';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  return <Signin />;
};

export default SigninPage;