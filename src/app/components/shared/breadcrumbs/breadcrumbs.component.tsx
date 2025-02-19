import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function BreadcrumbComponent() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className='link'  href="/">
          Posts
        </Link>
        <Link
         className='link'
          href="/"
        >
          Edit Post
        </Link>
      </Breadcrumbs>
    </div>
  )
}
