import React, { Component } from 'react';

class aboutDiv extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <section className="site-section about">
        <div className="row">

          <div className="col-md-8 offset-md-2">
            <h1>I Little About Me</h1>
          </div>

          <div className="col-md-4 offset-md-2">
            <h6>MY LIFE</h6>
            <p>
              I enjoy spending a ton of time perfecting the artistry of parenthood and watching my two boys grow, locking in just the two of us time with my wife to watch "Game of Thrones" or "The Walking Dead", and traveling whenever the opportunity presents itself. I entered the development/engineering industry back in the Flash ActionScript days and evolved with the industry as times changed. Some HTML 5 ad evolution, <a data-vidid="P8Fj4b94WhY" data-toggle="modal" data-target="#ytModal" href="#" onClick={this.props.modal}>Thing On,</a><a href="#">Thing Two,</a> and <a href="#">Thing Three</a>. I enjoy sitting in the middle and collaborating with Designers and Back-End developers to bring ideas to life.
            </p>

          </div>

          <div className="col-md-4">

            <h6>I'M A DEVELOPER</h6>
            <p>
              Currently, I work for <a href={'https://www.trusted.com/'}>Trusted.com</a> on a small team distributed throughout the U.S. We've updated the site with a new look, as well as features, with more updates to come in the backlog. We also spend time on a side project <a href={'www.cyberledger.com'}>Cyberledger.com</a> which is in development and getting feedback from potential clients.
            </p>

            <p>
              Trusted is a great place to work. We communicate well being a distributed team (Slack is amazing and Stride is catching up), I got the opportunity to learn some Kendo UI which I never touched prior, and I get to avoid the tough DMV (D.C, Maryland, Virginia) commutes. But like most folks, I always seek more. Not necessarily stuff or money, but to learn more, grow career-wise and be part of something that is making a huge impact in its space.
            </p>

          </div>
        </div>
      </section>
    )

  }
}

export default aboutDiv;