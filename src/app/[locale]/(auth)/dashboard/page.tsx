import { getTranslations } from 'next-intl/server';

import Hero from '@/components/Hero';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div className="[&_p]:my-6">
    <Hero />
  </div>
);

export default Dashboard;
