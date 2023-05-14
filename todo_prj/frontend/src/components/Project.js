import React from 'react'
import {Link} from 'react-router-dom'

const ProjectItem = ({ project }) => {
  return (
    <tbody>
      <tr>
        <td><Link to={ `${ project.name }` }>{ project.name }</Link></td>
        <td>{ project.repo }</td>
        <td>{ project.users }</td>
      </tr>
    </tbody>
  )
}

const ProjectLst = ({ projects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>REPOSITORY</th>
          <th>USERS</th>
        </tr>
      </thead>
      { projects.map((project) => <ProjectItem project={ project } key={ project.id } />) }
    </table>
  )
}

export default ProjectLst;