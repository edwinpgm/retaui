import React from 'react'
import { render } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  test('render', () => {
    render(<Breadcrumb />)
  })
})