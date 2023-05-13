import React from 'react'
import {Link} from 'react-router-dom'

const ProjectItem = ({ project }) => {
  return (
    <tr>
      <td><Link to={ `${project.name}` }>{ project.name }</Link></td>
      <td>{ project.repo }</td>
      <td>{ project.users }</td>
    </tr>
  )
}

const ProjectLst = ({ projects }) => {
  return (
    <table>
      <thead>
        <th>NAME</th>
        <th>REPOSITORY</th>
        <th>USERS</th>
        { projects.map((project) => <ProjectItem project={ project } />) }
      </thead>
    </table>
  )
}

export default ProjectLst;