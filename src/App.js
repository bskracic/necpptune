import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExamView from './pages/ExamView';
import GraderPage from './pages/GraderPage';
import LandingPage from './pages/LandingPage';
import SubmissionUploadPage from './pages/SubmissionUploadPage';
const { Header } = Layout;

function App() {
  return (
    <div>
      <Layout style={{height: '100%'}}>
        <Header style={{ height: "5vh", color: 'white', fontSize: 25}}>
          neCPPtune
        </Header>
        <Layout style={{ backgroundColor: 'white', heigth: '75%' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/upload" exact element={< SubmissionUploadPage/>}/>
              <Route path="/grading" element={<GraderPage />} />
              <Route path="/exams" element={<ExamView />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
