'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LogOutButton = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const t = useTranslations('DashboardLayout');

  return (
    <button
      className="rounded-lg bg-yellow-600 px-6 py-3 text-lg text-white hover:bg-yellow-700"
      type="button"
      onClick={() => signOut(() => router.push('/'))}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
