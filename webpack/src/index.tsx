import React from 'react';
import { createRoot } from 'react-dom/client';
import { getData } from '~/django'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <div>{ getData().app }</div>
)
