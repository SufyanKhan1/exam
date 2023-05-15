import React from "react";

import { Wrapper } from "./Home.styled";
const Home = () => {
  return (
    <Wrapper>
      <div className="landing-page">
        <header>
          <h1>Welcome to our online assignment platform</h1>
          <p>Get your assignments done by expert writers</p>
        </header>
        <main>
          <section>
            <h2>How it works</h2>
            <ol>
              <li>Submit your assignment details</li>
              <li>Choose an expert writer to work on your assignment</li>
              <li>Receive your completed assignment on time</li>
            </ol>
            <p>
              It's that simple! Our platform connects you with expert writers
              who can deliver high-quality work on time. We understand how
              stressful it can be to juggle multiple assignments and deadlines,
              so let us take the burden off your shoulders.
            </p>
          </section>
          <section>
            <h2>Our team of writers</h2>
            <p>
              Our writers are experts in their fields, with years of experience
              and advanced degrees. They can handle assignments of any
              complexity and deliver high-quality work on time. We have writers
              in a variety of subjects, including:
            </p>
            <ul>
              <li>Mathematics</li>
              <li>Engineering</li>
              <li>Literature</li>
              <li>History</li>
              <li>Computer Science</li>
              <li>And more!</li>
            </ul>
            <p>
              We carefully select our writers to ensure they have the knowledge,
              skills, and experience to deliver the best results for our
              clients. You can choose the writer that best fits your needs based
              on their ratings, reviews, and expertise. You can also communicate
              directly with the writer to ask questions, provide additional
              instructions, and monitor progress.
            </p>
          </section>
          <section>
            <h2>Pricing</h2>
            <p>
              Our prices are competitive and transparent. You can choose the
              writer with the price that fits your budget. We also offer
              discounts for new and returning customers. Our pricing is based on
              several factors, including the complexity of the assignment, the
              deadline, and the writer's expertise.
            </p>
            <p>
              We understand that students often have tight budgets, which is why
              we offer affordable prices without compromising on quality. Our
              platform is a reliable and cost-effective solution for getting
              your assignments done on time.
            </p>
          </section>
          <section>
            <h2>Customer reviews</h2>
            <ul>
              <li>
                "I was impressed by the quality of work I received. The writer
                followed all my instructions and delivered the assignment on
                time." - John D.
              </li>
              <li>
                "I had a tight deadline and was worried about getting my
                assignment done on time. Thanks to this platform, I got it done
                and got an A!" - Sarah K.
              </li>
              <li>
                "I've used this platform multiple times and have never been
                disappointed. The writers are professional and deliver great
                work." - Michael S.
              </li>
            </ul>
            <p>
              We value our clients and strive to provide them with the best
              service possible. That's why we're proud to share these positive
              reviews from our satisfied customers.
            </p>
          </section>
          <section>
            <h2>FAQs</h2>
            <ul>
              <li>
                <strong>Can I communicate with the writer?</strong> Yes, you can
                communicate with the writer directly through our messaging
                system.
              </li>
              <li>
                <strong>What if I'm not satisfied with the work</strong>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </Wrapper>
  );
};

export default Home;
