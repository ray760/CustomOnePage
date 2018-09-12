import React from 'react';

const authDiv = () => {
  return (
    <section className="auth0 site-section">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>CAN WE CHAT?</h1>

          <h6>How I Got here</h6>
          <p>
            While learning about PassportJS and JWT I saw the "Supported by" and clicked to see Auth0 was and what they did. After exploring the website and learning about the company I immediately looked for the careers link to see if I could possibly be a part of "helping make the internet a better place". What Auth0 brings to the development community in invaluable, and the culture and foundation created for employees look to be on par or above those set by larger organizations.
          </p>

          <p>
            Knowing this would be an arduous endeavor I thought to myself it would be worth it taking a shot to be part of something I find intriguing, cutting edge and full of great minds that could push me and also learn from me as well. I took the time out to make this page ( <a className="repo" href="https://github.com/ray760/CustomOnePage"> checkout the repo </a>) because I wanted to set myself apart and let you all know that being part of your team is something that excites me and that feeling is one I haven't felt in a while. If you got this far then I hope that we can talk soon about my interst in the <a class="repo" href="https://auth0.com/careers/job/engineer-dashboard:617dcb17-986e-4a25-bc9b-f59ce91ab1b1">Dashboard</a> or <a class="repo" href="https://auth0.com/careers/job/ui-engineer-design-system:11e64d5c-495f-4c31-83c6-13f1238c4b17">UI</a> engineering roles.
          </p>
        </div>

        <div className="col-md-8 offset-md-2 text-center">
          <ul className="social-icons list-inline">
            <a href="https://github.com/ray760?tab=repositories">
              <li className="list-inline-item">
                <i className="fa fa-github-square fa-3"></i>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/rayarobertson">
              <li className="list-inline-item">
                <i className="fa fa-linkedin-square fa-4" aria-hidden="true"></i>
              </li>
            </a>
            <a href="http://www.rayfolio.com/auth0/docs/Ray-Robertson-Resume-2018.pdf">
              <li className="list-inline-item">
                <i className="fa fa-file-word-o fa-fw fa-4" aria-hidden="true"></i>
              </li>
            </a>
            <a href="mailto:ray760@yahoo.com?Subject=Auth0%20UI%20Engineer">
              <li className="list-inline-item">
                <i className="fa fa-envelope-square fa-4" aria-hidden="true"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default authDiv;