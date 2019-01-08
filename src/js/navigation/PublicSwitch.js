import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Resume, Portfolio, Contact, NotFound } from '../views'
import { NavigationBar, Sidebar } from '../components'

const PublicSwitch = ({ data }) => (
  <div>
    <Sidebar />
    <NavigationBar />
    <Switch>
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
  </div>
)

export default PublicSwitch
