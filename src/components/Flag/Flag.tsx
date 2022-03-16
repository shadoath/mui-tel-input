import React from 'react'
import { Iso3166Alpha2Code } from '@shared/constants/iso'

import { Styled } from './Flag.styled'

export type FlagProps = {
  isoCode: Iso3166Alpha2Code
}

const Flag = (props: FlagProps) => {
  const { isoCode } = props
  return (
    <Styled.Flag data-testid={isoCode} isoCode={isoCode}>
      <Styled.Span>{isoCode}</Styled.Span>
    </Styled.Flag>
  )
}

export default Flag
