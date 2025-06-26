import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-30 bg-gray-50 px-6 py-12 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">About Vegedo</h1>
          <p className="mt-4 text-lg text-gray-600">
            Freshness at your doorstep – that's the Vegedo promise.
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Vegedo is an online grocery store built with a simple vision – to make fresh, quality groceries easily accessible to everyone. 
            From locally sourced vegetables to daily essentials, we bring the market to your doorstep with just a few clicks.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary">Why Choose Vegedo?</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>🚚 Fast & reliable home delivery</li>
            <li>🌿 Fresh & organic produce directly from farms</li>
            <li>💸 Competitive pricing & great discounts</li>
            <li>🛒 Seamless shopping experience</li>
            <li>🤝 Friendly customer support</li>
          </ul>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our mission is to empower healthier lifestyles by delivering the freshest groceries, every time. We aim to build a strong connection between local farmers and urban families.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary">Our Vision</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To become the most trusted and eco-friendly grocery platform across India, setting a benchmark for convenience and sustainability.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary">Core Values</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside space-y-2">
            <li>🌱 Freshness</li>
            <li>🎯 Customer Focus</li>
            <li>🔄 Sustainability</li>
            <li>📦 Transparency</li>
            <li>🤝 Community</li>
          </ul>
        </section>

        {/* Team Placeholder (Optional) */}
        {/* You can later replace this with real team bios or photos */}
        {/* <section>
          <h2 className="text-2xl font-semibold text-primary">Meet the Team</h2>
          <p className="mt-4 text-gray-700">Coming soon...</p>
        </section> */}
      </div>
    </div>
  );
};

export default About;
