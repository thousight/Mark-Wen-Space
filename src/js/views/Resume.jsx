import React, { PureComponent } from 'react'
import { Row, Col } from 'react-bootstrap'

import { Timeline, ProgressBar, Footer } from '../components'

/**
 * Resume page rendering data dynamically
 */
export default class Resume extends PureComponent {
  render() {
    const { allEducations, allExperiences, allSkillCategories } = this.props

    return (
      <div className="resume">
        <div className="resume-title banner-title">
          <h1>Resume</h1>
        </div>

        {/* Experience */}
        <div className="resume-content container">
          <div className="resume-subtitle">
            <span className="resume-subtitle-icon icon-suitcase" />
            <h3>Experience</h3>
          </div>
          <Timeline data={allExperiences} />

          {/* Education */}
          <div className="resume-subtitle">
            <span className="resume-subtitle-icon icon-graduation-cap" />
            <h3>Education</h3>
          </div>
          <Timeline data={allEducations} />

          {/* Skills */}
          <div className="resume-subtitle">
            <span className="resume-subtitle-icon icon-code" />
            <h3>Skills</h3>
          </div>
          <Row>
            <Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
              <div className="card resume-skills-card">
                {[...allSkillCategories]
                  .sort((a, b) => a.order - b.order)
                  .map(category => (
                    <div key={category._id}>
                      <h4 className="resume-skill-category-title">
                        {category.categoryTitle}
                      </h4>
                      <Row className="resume-skill-category">
                        {[...category.skills]
                          .sort((a, b) => b.percent - a.percent)
                          .map(skill => (
                            <Col key={skill.skillName} xs={12} sm={4}>
                              <h5>{skill.skillName}</h5>
                              <ProgressBar
                                percentage={skill.percent}
                                color={category.color}
                              />
                            </Col>
                          ))}
                      </Row>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
    )
  }
}
