import { createElement, useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
    FiArrowRight,
    FiArrowUp,
    FiBarChart2,
    FiCheck,
    FiChevronDown,
    FiCode,
    FiCoffee,
    FiGlobe,
    FiGithub,
    FiHeart,
    FiMail,
    FiMenu,
    FiMessageCircle,
    FiPlay,
    FiSearch,
    FiShield,
    FiUsers,
    FiX,
    FiZap,
} from "react-icons/fi";
import "./index.css";

const navItems = ["Product", "Solutions", "Enterprise", "Resources"];
const features = [
    { icon: FiMessageCircle, title: "Clear conversations", text: "Keep every team update, decision, and discussion in one focused workspace." },
    { icon: FiUsers, title: "Connected teams", text: "Bring people and projects together with channels that stay easy to follow." },
    { icon: FiZap, title: "Work at your pace", text: "Move from idea to action with lightweight tools that fit the way you work." },
];
const footerLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCode],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiShield],
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 420);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="page">
            <header className="siteHeader">
                <a className="brand" href="#top" aria-label="Slack landing page home">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
                    <span>slack<span className="brandDot">.</span></span>
                </a>
                <nav className={`siteNav ${menuOpen ? "isOpen" : ""}`} aria-label="Main navigation">
                    {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}<FiChevronDown aria-hidden="true" /></a>)}
                    <a href="#pricing" onClick={closeMenu}>Pricing</a>
                    <a className="mobileCta" href="#signup" onClick={closeMenu}>Get started <FiArrowRight aria-hidden="true" /></a>
                </nav>
                <div className="headerActions"><a className="signIn" href="#footer">Sign in</a><a className="headerCta" href="#signup">Get started <FiArrowRight aria-hidden="true" /></a><button className="menuButton" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <FiX /> : <FiMenu />}</button></div>
            </header>

            <main id="top">
                <section className="hero sectionWrap">
                    <div className="heroCopy">
                        <p className="eyebrow">WHERE WORK HAPPENS</p>
                        <h1>Great teamwork starts with a better place to work.</h1>
                        <p className="heroText">Slack brings your people, tools, and conversations together so everyone can do their best work from anywhere.</p>
                        <div className="heroActions"><a className="primaryButton" href="#signup">Try Slack for free <FiArrowRight aria-hidden="true" /></a><a className="secondaryButton" href="#product"><FiPlay aria-hidden="true" /> See how it works</a></div>
                        <p className="finePrint"><FiCheck aria-hidden="true" /> No credit card required</p>
                    </div>
                    <div className="heroVisual" aria-label="Slack workspace preview">
                        <div className="visualTop"><span className="windowDots"><i /><i /><i /></span><span>team-workspace</span><FiSearch aria-hidden="true" /></div>
                        <div className="workspace">
                            <aside><strong>Workspace</strong><span># general</span><span># design-team</span><span># product-launch</span><span># customer-love</span></aside>
                            <div className="messages"><div className="messageHead"><span className="avatar">A</span><div><strong>Design team</strong><small>14 members</small></div></div><div className="message"><span className="avatar purple">M</span><p><strong>Maya</strong><br />The new workspace is ready for review. <b>Thanks, team!</b></p></div><div className="message"><span className="avatar orange">R</span><p><strong>Ravi</strong><br />Looks great. I added the final notes to the launch channel.</p></div><div className="messageInput">Write a message...</div></div>
                        </div>
                    </div>
                </section>

                <section className="trust sectionWrap" id="enterprise"><p>Teams move faster when their tools work together.</p><div className="trustNames"><span>airbnb</span><span>ORBIT</span><span>SONOS</span><span>notion</span><span>Uber</span></div></section>

                <section className="featureSection sectionWrap" id="product"><div className="sectionIntro"><p className="eyebrow">ONE SIMPLE WORKSPACE</p><h2>Everything your team needs to stay in sync.</h2><p>Make progress visible, keep context close, and give every project a clear home.</p></div><div className="featureGrid">{features.map(({ icon: FeatureIcon, title, text }) => <article className="featureCard" key={title}><span className="featureIcon">{createElement(FeatureIcon, { "aria-hidden": true })}</span><h3>{title}</h3><p>{text}</p><a href="#signup">Explore feature <FiArrowRight aria-hidden="true" /></a></article>)}</div></section>

                <section className="splitSection sectionWrap" id="solutions"><div className="splitVisual"><FiBarChart2 aria-hidden="true" /><div><strong>Project health</strong><span>On track</span></div><div className="chart"><i /><i /><i /><i /><i /><i /></div></div><div className="splitCopy"><p className="eyebrow">BUILT FOR YOUR FLOW</p><h2>Make progress visible to everyone.</h2><p>Turn updates into shared momentum with channels, simple workflows, and a calm place for the work that matters.</p><a className="textLink" href="#signup">Learn more <FiArrowRight aria-hidden="true" /></a></div></section>

                <section className="cta sectionWrap" id="signup"><FiShield aria-hidden="true" /><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Bring your team together.</h2><p>Start with a workspace that is easy to adopt and ready to grow with you.</p></div><a className="primaryButton" href="https://slack.com/" target="_blank" rel="noopener noreferrer">Get started <FiArrowRight aria-hidden="true" /></a></section>
            </main>

            <footer className="siteFooter" id="footer"><div className="footerMain"><div className="footerBrand"><img src={`${import.meta.env.BASE_URL}logo.png`} alt="" /><strong>slack<span className="brandDot">.</span></strong></div><p>Simple collaboration patterns for modern teams.</p><span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span></div><div className="footerLinks" aria-label="Social and support links">{footerLinks.map(([label, href, FooterIcon]) => <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} key={label}>{createElement(FooterIcon, { "aria-hidden": true })}</a>)}</div></footer>
            {showTop && <button className="toTop" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp aria-hidden="true" /></button>}
        </div>
    );
}

export default App;