import React from 'react';
import { createRoot } from 'react-dom/client';
import { getData } from '~/django'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <div>
    <div>a.html</div>
    <div>{ getData().app }</div>
  </div>
)
