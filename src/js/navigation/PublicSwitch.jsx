import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import { Home, Resume, Portfolio, Contact, NotFound } from '../views'
import { Fade, NavigationBar, PublicSidebar } from '../components'

const PublicSwitch = ({ data, location }) => (
  <div>
    <PublicSidebar />
    <NavigationBar />

    <Fade>
      <Switch key={location.key}>
        <Route exact path="/" component={Home} />
        <Route
          path="/resume"
          component={() => (
            <Resume
              allEducations={data.allEducations}
              allExperiences={data.allExperiences}
              allSkillCategories={data.allSkillCategories}
            />
          )}
        />
        <Route
          path="/portfolio"
          component={() => <Portfolio allPortfolios={data.allPortfolios} />}
        />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Fade>
  </div>
)

export default withRouter(PublicSwitch)
