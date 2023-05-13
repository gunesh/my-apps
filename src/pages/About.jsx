import React from 'react';
import Meta from '../components/Meta';

const About = () => {
  // page content
  const pageTitle = 'About';

  return (
    <div className="about">
      <Meta title={pageTitle} />
      <h2 className="cms-page">About us</h2>
      <br />
      <article className="">
        <div className="about-info">
          <Meta title={pageTitle} />
          <p>
            Welcome to Green Container Impex LLP. A place to nurture your life
            with green and healthy products.
          </p>
          <p>
            At GCI, we believe there is a greener way to live the everyday life.
            We are dedicated to providing you the very best of natural products,
            with an emphasis on health, nutrition and the environment.
          </p>
          <p>
            Founded in June 2022, Green Container Impex is a B2B company,
            committed to bring you the sustainable, healthy and natural products
            directly from the green belt of Central India. We have our office in
            Balaghat, Madhya Pradesh, India.
          </p>
          <p>
            We export wide range of products such as organic millets, bamboo
            furniture, utility products to name but a few. Our utility products
            are made up of high quality hard bamboo and the millets are grown
            organically on the rich soil of Balaghat by the natives. Among
            others, our product list also includes Terracotta clay product like
            slope elevation tiles, designer wall texture tile, interlocking
            pavers, floor tiles, bamboo furniture and other bamboo products,
            organic traditional seeds, bell metal handicrafts etc.
          </p>
          <p>
            When We first started out, our passion for "eco-friendly cleaning
            products" drove us to start our own business.
          </p>
        </div>
      </article>
    </div>
  );
};

export default About;
