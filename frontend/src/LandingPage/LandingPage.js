import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>A-IEP Is Being Rebuilt 🚧</h1>
      <p className="message">
        Hey! So <strong>NYU Governance Lab</strong> has un-deployed the platform my team and I built.
        <br />
        Luckily, I'm using this as an opportunity to <strong>recreate and rebuild</strong> it from scratch!
        <br />
        The old URL <code>a-iep.org</code> no longer shows the product, but I’m working on it.
      </p>

      <p className="stay-tuned">
        Connect with me on <a href="https://www.linkedin.com/in/ananda-analytics/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to be notified of when AI-EP goes live again.
      </p>

      <div className="buttons">
        <a className="custom-button" href="https://rebootdemocracy.ai/blog/HSGAC-Full-Testimony" target="_blank" rel="noopener noreferrer">Read U.S. Senate Endorsement of Our Work</a>
        <a className="custom-button" href="https://creators.spotify.com/pod/profile/thegovlab/episodes/Equitable-Engagement-Lab-Innovate-Public-School-e2fp8fh" target="_blank" rel="noopener noreferrer">Listen to Me Talk About AI-EP On The GovLab Podcast</a>
        <a className="custom-button" href="https://burnes.northeastern.edu/projects/ai-ep/" target="_blank" rel="noopener noreferrer">See Screenshot Snippets of the Original Platform</a>
        <a className="custom-button" href="https://www.youtube.com/watch?v=sL7jts6fKRQ" target="_blank" rel="noopener noreferrer">Watch a 6min Video of Me Sharing My Individual Contribution</a>
      </div>
    </div>
  );
};

export default LandingPage;