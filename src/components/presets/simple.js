/* eslint-disable no-use-before-define */

import Inline from '../inline.macro'
import { Link, Flex, Text } from './scope'

const code = (
  <Inline>
    <>
      <Link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap'
        rel='stylesheet'
      />
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bg: query.bg,
          color: query.color
        }}
      >
        <Text
          sx={{
            fontFamily: 'Roboto',
            fontSize: 6,
            fontWeight: '700'
          }}
          children={query.headline}
        />
        <Text
          sx={{
            fontFamily: 'Roboto',
            fontSize: 3,
            fontWeight: '300'
          }}
          children={query.caption}
        />
      </Flex>
    </>
  </Inline>
)

const query = {
  headline: 'Add your headline',
  caption: 'Add your caption',
  bg: 'black',
  color: 'white'
}

export default {
  name: 'simple',
  code,
  query
}
