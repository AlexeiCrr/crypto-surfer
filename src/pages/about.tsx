import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <p className="mb-2 mt-0">Thank you for reviewing my test task.</p>
      <p>
        I hope you will find it good. Sorry i couldn not use Java for Backend,
        but i have not written Java Code for more than a year and barely
        remember how to set up everything fast. I am a Front-end developer that
        wrote some backend when it was needed 😀.
      </p>
    </div>
  </Main>
);

export default About;
