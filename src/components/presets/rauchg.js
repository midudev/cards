/* eslint-disable no-use-before-define */

import Inline from '../inline.macro'
import { Image, Box, Flex, Text } from './scope'

const code = (
  <Inline>
    <>
      <Box
        as='header'
        sx={{ position: 'absolute', pt: '42px', pl: '42px', bg: query.bg }}
      >
        <Flex
          sx={{
            alignItems: 'center'
          }}
        >
          <Image sx={{ width: 24, height: 24 }} src={query.logo} />
          <Text
            as='span'
            sx={{
              ml: 2,
              letterSpacing: '-.03m',
              fontFamily: 'sans-serif',
              fontSize: 4,
              fontWeight: '700'
            }}
          >
            {query.domain}
          </Text>
        </Flex>
      </Box>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bg: query.bg
        }}
      >
        <Text
          sx={{
            px: '46px',
            py: 3,
            letterSpacing: '-.03m',
            fontFamily: 'sans-serif',
            fontSize: 6,
            fontWeight: '700',
            bg: query.color,
            color: query.bg
          }}
          children={query.title}
        />
      </Flex>
    </>
  </Inline>
)

const query = {
  bg: 'white',
  color: 'black',
  logo: 'https://svgur.com/i/KBR.svg',
  domain: 'rauchg.com',
  title: '2020 in Review'
}

export default { name: 'rauchg', code, query }
