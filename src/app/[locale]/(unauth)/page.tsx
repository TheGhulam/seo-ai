import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold">
          Improve Your Search Engine Ranking with Meteorite SEO
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Boost your online visibility and drive more traffic to your website
        </p>
        <Link
          href="/sign-in"
          className="rounded-lg bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      <section
        id="features"
        className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {[
          {
            title: 'Keyword Analysis',
            description: 'Discover high-performing keywords for your niche',
          },
          {
            title: 'On-Page Optimization',
            description:
              'Optimize your content for better search engine visibility',
          },
          {
            title: 'Backlink Monitoring',
            description: 'Track and analyze your backlink profile',
          },
        ].map((feature, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section id="pricing" className="mb-16 text-center">
        <h2 className="mb-8 text-3xl font-bold">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: 'Basic',
              price: '$29',
              features: [
                'Keyword Analysis',
                'On-Page Optimization',
                'Monthly Reports',
              ],
            },
            {
              name: 'Pro',
              price: '$79',
              features: [
                'All Basic features',
                'Backlink Monitoring',
                'Competitor Analysis',
              ],
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: [
                'All Pro features',
                'Dedicated Support',
                'Custom Integrations',
              ],
            },
          ].map((plan, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-3xl font-bold">{plan.price}</p>
              <ul className="mb-6 text-gray-600">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
