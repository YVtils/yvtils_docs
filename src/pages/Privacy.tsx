import { Heading, Text, ThemeProvider } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <div className="content">
            <div>
                <Heading size="2xl">Privacy Policy</Heading>
                <Text size="sm">Last updated: 19.07.2025</Text>

                <Heading size="xl">1. Introduction</Heading>
                <Text size="base">
                    We take the protection of your personal data very seriously. This privacy policy informs you about the nature,
                    scope, and purpose of the collection and use of personal data when visiting our website in accordance with the
                    General Data Protection Regulation (GDPR).
                </Text>

                <Heading size="xl">2. Responsible Party</Heading>
                <Text size="base">
                    <Text weight="semibold">Simeon Weichert</Text>
                    Email: <Text underline>[contact@yvtils.net]</Text>
                </Text>

                <Heading size="xl">3. Access Data and Hosting</Heading>
                <Text size="base">
                    When you access this website, your browser automatically transmits the following data to our hosting provider (Hetzner Online GmbH):
                </Text>
                <ul>
                    <li><Text size="base">IP address</Text></li>
                    <li><Text size="base">Date and time of access</Text></li>
                    <li><Text size="base">URL of the accessed page</Text></li>
                    <li><Text size="base">Referrer URL</Text></li>
                    <li><Text size="base">Browser type and version</Text></li>
                    <li><Text size="base">Operating system</Text></li>
                </ul>
                <Text size="base">
                    This data is stored in server log files for technical reasons and to ensure the security of our systems.
                    The legal basis is <Text italic>Art. 6(1)(f) GDPR</Text> (legitimate interest).
                </Text>
                <Text size="base">
                    Hosting provider:<br />
                    <Text weight="semibold">Hetzner Online GmbH</Text><br />
                    Industriestr. 25<br />
                    91710 Gunzenhausen, Germany<br />
                    <Text underline>https://www.hetzner.com</Text>
                </Text>

                <Heading size="xl">4. Use of Cloudflare</Heading>
                <Text size="base">
                    For performance and security reasons, we use services provided by:
                </Text>
                <Text size="base">
                    <Text weight="semibold">Cloudflare, Inc.</Text><br />
                    101 Townsend St, San Francisco, CA 94107, USA<br />
                    <Text underline>https://www.cloudflare.com</Text>
                </Text>
                <Text size="base">
                    Cloudflare acts as a content delivery network (CDN) and security service. All data transferred to or from this website
                    passes through Cloudflare’s servers. This may include your IP address and request headers.
                </Text>
                <Text size="base">
                    The use of Cloudflare is based on <Text italic>Art. 6(1)(f) GDPR</Text> (legitimate interest in secure and efficient delivery of our website).
                    Cloudflare is certified under the <Text italic>EU-U.S. Data Privacy Framework</Text>.
                </Text>

                <Heading size="xl">5. Google Analytics</Heading>
                <Text size="base">
                    This website uses <Text weight="semibold">Google Analytics</Text>, a web analytics service provided by:
                </Text>
                <Text size="base">
                    <Text weight="semibold">Google Ireland Limited</Text><br />
                    Gordon House, Barrow Street<br />
                    Dublin 4, Ireland
                </Text>
                <Text size="base">
                    Google Analytics uses cookies to analyze how visitors use the website. The information generated (including your IP address)
                    is usually transmitted to a Google server in the USA and stored there.
                </Text>
                <Text size="base">
                    We use <Text italic>IP anonymization</Text> (<Text>anonymizeIp</Text>) to ensure that your IP address is shortened within the EU/EEA before transmission.
                </Text>
                <Text size="base">
                    The use of Google Analytics is based on your <Text italic>consent</Text> according to <Text italic>Art. 6(1)(a) GDPR</Text>.
                    You will be asked to accept or decline tracking via a cookie banner when you first visit our website.
                </Text>
                <Text size="base">
                    You can also opt out at any time by clicking [insert opt-out link or mention browser plugin].
                </Text>
                <Text size="base">
                    For more information on how Google handles user data, see:<br />
                    <Text underline>https://support.google.com/analytics/answer/6004245</Text>
                </Text>

                <Heading size="xl">6. Your Rights</Heading>
                <Text size="base">
                    You have the following rights under the GDPR:
                </Text>
                <ul>
                    <li><Text size="base">Right to access your stored data</Text></li>
                    <li><Text size="base">Right to correction of inaccurate data</Text></li>
                    <li><Text size="base">Right to deletion of your data ("right to be forgotten")</Text></li>
                    <li><Text size="base">Right to restrict processing</Text></li>
                    <li><Text size="base">Right to object to data processing</Text></li>
                    <li><Text size="base">Right to data portability</Text></li>
                    <li><Text size="base">Right to file a complaint with a supervisory authority</Text></li>
                </ul>
                <Text size="base">
                    To exercise any of these rights, please contact us at <Text underline>[contact@yvtils.net]</Text>.
                </Text>

                <Heading size="xl">7. Contact</Heading>
                <Text size="base">
                    If you contact us via email, your message including personal data will be processed solely for the purpose of handling your inquiry.
                    The legal basis is <Text italic>Art. 6(1)(b) GDPR</Text>.
                </Text>

                <Heading size="xl">8. Changes to This Privacy Policy</Heading>
                <Text size="base">
                    We may update this policy to reflect legal changes or new features on the website. Please check back regularly.
                </Text>
            </div>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Privacy />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;