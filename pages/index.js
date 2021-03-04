import GlobalStyle from '@/styles/global';

import Head from '@/components/Head/Head'
import Header from '@/components/Header/Header'
import Billboard from '@/components/Billboard/Billboard'
import RightFrame from '@/components/RightFrame/RightFrame'
import ScrolldownIndicator from '@/components/ScrolldownIndicator/ScrolldownIndicator'

const Home = () => {
    // seta de scroll full top
    // custom cursor
    // sandwich menu button
    // timeline
    // animacao nos links do header

    return (
        <>
            <Head
                title={'Giovani Anhesini | Web Developer'}
            />

            <GlobalStyle />

            <Header>
                <span>about me</span>
                <span>work</span>
                <span>contact</span>
                {/* <span>profile</span>
                <span>experiences</span>
                <span>abilities</span>
                <span>projects</span> */}
            </Header>

            <Billboard>
                {/* <LeftFrame /> */}
                <RightFrame
                    name='Djow.dev_'
                    occupation='The world´s #02nd strongest Weeb developer!'
                />
            </Billboard>
            <ScrolldownIndicator />
            <Billboard>
                {/* <AboutMe /> */}
            </Billboard>
            <Billboard>
                {/* <Work /> */}
            </Billboard>
            <Billboard>
                {/* <Contact /> */}
            </Billboard>

            {/* <Footer /> */}
        </>
    );
}

export default Home;
