import React from 'react'
import {useParams} from 'react-router-dom'

const ProjectItem = ({ project }) => {
  return (
    <tr>
      <td>{ project.name }</td>
      <td>{ project.repo }</td>
      <td>{ project.users }</td>
    </tr>
  )
}

const ProjectFilter = ({ projects }) => {
  let { name } = useParams();
  let filtered_projects = projects.filter((project) => project.name === name)
  return (
    <table>
      <th>NAME</th>
      <th>REPOSITORY</th>
      <th>USERS</th>
      { filtered_projects.map((project) => <ProjectItem project={ project } key={ project.id } />) }
    </table>
  )
}

export default ProjectFilter;