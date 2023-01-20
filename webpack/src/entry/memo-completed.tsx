import React from 'react';
import { createRoot } from 'react-dom/client';
import { getMemo } from '~/django'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <div>
    <div>memo-completed</div>
    <div>{ getMemo().value }</div>
  </div>
)
