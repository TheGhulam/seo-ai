import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="rounded-lg bg-yellow-600 px-6 py-3 text-sm text-white hover:bg-yellow-700"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="rounded-lg bg-yellow-600 px-6 py-3 text-sm text-white hover:bg-yellow-700"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          {/* <li>
            <LocaleSwitcher />
          </li> */}
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
