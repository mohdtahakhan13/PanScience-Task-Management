import { useNavigate } from 'react-router-dom';
import { ClipboardList, ArrowRight, Shield, User } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    navigate(`/${role}`);
  };

  return (
    <div className="landing-page-wrapper">
      <div className="landing-page">
        <div className="particles">
          {[...Array(15)].map((_, index) => (
            <div key={index} className={`particle particle-${index + 1}`}></div>
          ))}
        </div>
        
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Row className="w-100 justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6} xl={5}>
              <div className="content-wrapper">
                <div className="logo-container">
                  <ClipboardList size={48} className="logo" />
                  <div className="logo-glow"></div>
                </div>
                
                <div className="title-group">
                  <h1 className="main-title">
                    Task<span className="text-accent">Mate</span>
                  </h1>
                  <p className="subtitle">Efficient Task Management System</p>
                  <div className="highlight-bar"></div>
                </div>
                
                <div className="role-selection">
                  <h2 className="section-title">
                    <span className="title-decoration"></span>
                    Select Your Access Level
                    <span className="title-decoration"></span>
                  </h2>
                  
                  <p className="section-description">
                    Choose your role to access the task management system with appropriate permissions and features.
                  </p>
                  
                  <div className="button-container">
                    <Button 
                      onClick={() => handleNavigation('login-admin')} 
                      className="landing-button admin-btn"
                      size="lg"
                    >
                      <span className="button-content">
                        <Shield size={20} className="me-2" />
                        <span className="button-text">Administrator</span>
                        <ArrowRight size={18} className="button-icon" />
                      </span>
                    </Button>
                    
                    <Button 
                      onClick={() => handleNavigation('login-user')} 
                      className="landing-button user-btn"
                      size="lg"
                    >
                      <span className="button-content">
                        <User size={20} className="me-2" />
                        <span className="button-text">Team Member</span>
                        <ArrowRight size={18} className="button-icon" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;