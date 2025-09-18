import React, { useState, useEffect } from 'react';

import { Heading, ThemeProvider, Text, Button, Spacer, Container, Image, IconComponent, Carousel } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MapDownloadBaseURL = 'https://api.yvtils.net/smp/yv-smp_';
const SeasonImageURL = 'https://api.yvtils.net/images/yv-smp_';

const Seasons = [
    1, 2, 3, 4, 5, 6, 7, 8
];

const Content = () => {
    return (
        <div className="content">
            <Heading size='3xl'>YV SMP</Heading>
            <Spacer size="md" />
            <div className="map-carousel">
                <Heading size="xl">Download Maps</Heading>
                <Spacer size="sm" />
                <Carousel
                    visibleItems={5}
                >
                    {Seasons.map((season, index) => (
                        <div
                            key={season}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <MapEntry season={season} isCenter={index === 0} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

interface MapEntryProps {
    season: number;
    isCenter?: boolean;
}

const MapEntry: React.FC<MapEntryProps> = ({ season }) => {
    return (
        <div className="yvsmp map_entry">
            <Container className={`container map-entry ${season === 1 ? 'no-map' : ''}`}>
                <Heading size="3xl">
                    Season {season}
                </Heading>
                <Spacer size="lg" />
                <Image
                    src={`${SeasonImageURL}${season}`}
                    alt={`Season ${season} Image`}
                    size='large'
                    aspectRatio='16:9'
                    fallback={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-secondary)'
                        }}>
                            <IconComponent name="Image" size={24} />
                            <span style={{ fontSize: '0.875rem' }}>No Image</span>
                        </div>
                    }
                />
                <Spacer size="md" />
                {season === 1 ? (
                    <>
                        <Text>
                            No map available for season 1.
                        </Text>
                    </>
                ) : (
                    <>
                        <a
                            href={`${MapDownloadBaseURL}${season}.zip`}
                            download
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                icon='Download'
                                iconPosition="left"
                                size="lg"
                                variant="primary"
                            >
                                Download Map
                            </Button>
                        </a>
                    </>
                )}

            </Container>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Content />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;