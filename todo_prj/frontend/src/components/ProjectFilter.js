import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectItem = ({ project }) => {
  return (
    <tbody>
      <tr>
        <td>{ project.name }</td>
        <td>{ project.repo }</td>
        <td>{ project.users.join(', ') }</td>
      </tr>
    </tbody>
  )
}

const ProjectFilter = ({ projects }) => {
  let { name } = useParams();
  let filtered_projects = projects.filter((project) => project.name === name)
  return (
    <table className='table table-hover shadow-sm'>
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">REPOSITORY</th>
          <th scope="col">USERS</th>
        </tr>
      </thead>
      { filtered_projects.map((project) => <ProjectItem project={ project } key={ project.id } />) }
    </table>
  )
}

export default ProjectFilter;