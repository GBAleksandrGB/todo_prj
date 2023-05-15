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
    <table class='table table-hover shadow-sm'>
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">REPOSITORY</th>
          <th scope="col">USERS</th>
        </tr>
      </thead>
      { projects.map((project) => <ProjectItem project={ project } key={ project.id } />) }
    </table>
  )
}

export default ProjectLst;