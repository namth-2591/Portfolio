import Acomplishments from '../components/HomePage/Acomplishments/Acomplishments';
import BgAnimation from '../components/HomePage/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/HomePage/Hero/Hero';
import Projects from '../components/HomePage/Projects/Projects';
import Technologies from '../components/HomePage/Technologies/Technologies';
import Timeline from '../components/HomePage/TimeLine/TimeLine';
import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';

const Home = () => {
    return (<Layout>
        <Section grid>
            <Hero/>
            <BgAnimation/>
        </Section>
        <Projects/>
        <Technologies/>
        <Timeline/>
        <Acomplishments/>
    </Layout>);
};

export default Home;
