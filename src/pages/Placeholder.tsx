import { ThemeProvider } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

import { Header, Footer, Sidebar } from '@layout';
import ComingSoon from '../components/ComingSoon';

const Content = () => {
    return (
        <div className="content">
            <ComingSoon icon="YVtils" />
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <div className="main_layout">
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
