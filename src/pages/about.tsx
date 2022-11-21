import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <p className="mb-2 mt-0">Thank you for reviewing my test task.</p>
      <p>
        I have used Node JS since I could rapidly set-up the backend environment
        and use it for the purpose of this task efficiently. I hope you will
        like it.
      </p>
    </div>
  </Main>
);

export default About;
