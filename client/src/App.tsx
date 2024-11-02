import React, { useState } from 'react';
import Header from './components/Header';
import MapComponent from './components/Map';
import FileUpload from './components/FileUpload';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [showUpload, setShowUpload] = useState(false);
    const [showTheme, setShowTheme] = useState(false); // Nouvel etat pour la thematique

    const toggleUpload = () => {
        setShowUpload(!showUpload);
    };

    const toggleTheme = () => {
        setShowTheme(!showTheme);
    };

    return (
        <div className="bodyBackground"> {/* Ajouter la classe bodyBackground ici */}
            <Header onUploadClick={toggleUpload} />
            <div className="mainContent" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}> {/* Utiliser flexbox pour la mise en page */}
                {showTheme && (
                    <div className="themePopup" style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', position: 'relative', flex: 0.5, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }}> {/* Ajouter le popup de thematique avec fond blanc et position relative */}
                        <div className="themeHeader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>Thématique de la Carte</span>
                            <button className="closeTheme" onClick={toggleTheme} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px' }}>X</button>
                        </div>
                        <div className="themeContent">
                            <p>État des pistes cyclables :</p>
                            <ul>
                                <li><b>Piste 1 :</b> Bon</li>
                                <li><b>Piste 2 :</b> Moyen</li>
                                <li><b>Piste 3 :</b> Mauvais</li>
                            </ul>
                        </div>
                    </div>
                )}
                <div className={showUpload ? "blurBackground" : ""} style={{ flex: 1 }}> {/* La carte reste à droite */}
                    <MapComponent onThemeClick={toggleTheme} /> {/* Passez la fonction toggleTheme a MapComponent */}
                </div>
            </div>
            {showUpload && (
                <>
                    <div className="overlay"></div> {/* Ajout de l'overlay pour assombrir le fond */}
                    <FileUpload />
                </>
            )}
            <Footer />
        </div>
    );
}

export default App;
