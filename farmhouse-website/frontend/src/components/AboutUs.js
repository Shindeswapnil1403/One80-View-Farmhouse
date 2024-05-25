import React from 'react';

const BlogContainer = ({ title, children }) => {
  return (
    <div className="blog-container">
      <h2>{title}</h2>
      <div className="blog-content">{children}</div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Information about the farmhouse, history, and unique features.</p>
      <BlogContainer title="Owner's Message">
        <p>
          Welcome to One80 view Farmhouse! I'm the proud owner of this farmhouse, and I'm thrilled to share it with you. I've spent years restoring this beautiful property, and I'm committed to providing a unique and memorable experience for all of our guests. I'm passionate about preserving the history and character of this special place, and I'm always looking for ways to make our guests feel at home. Thank you for considering Farmhouse for your next getaway. I can't wait to welcome you to our farmhouse and share all that it has to offer.
        </p>
        <p>
          Sincerely,<br />
          Bhagwan D. Shinde
        </p>
      </BlogContainer>
      <BlogContainer title="Unique Features">
  <ul class="two-rows">
    <li>Spacious porches and outdoor seating areas</li>
    <li>Beautiful gardens and landscaping</li>
    <li>Cozy fireplaces and reading nooks</li>
    <li class="hidden-on-mobile">Comfortable bedrooms with high-quality linens</li>
    <li class="hidden-on-mobile">Private bathrooms with plush towels and toiletries</li>
    <li class="hidden-on-mobile">Pet-friendly accommodations</li>
  </ul>
</BlogContainer>
    </div>
  );
};

export default AboutUs;