/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuickStart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFT 거래 시작을 위한 작업
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            어렵지 않습니다. 상단에 있는 메타머스크 버튼을 클릭하고 지갑을 생성 및 연동합니다.
          </Typography>
        </Box>
      </Box>
      <Box
        component={SyntaxHighlighter}
        language={'javascript'}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
        bgcolor={'#21325b !important'}
      >
        {`
> $ yarn install
// Or
> $ npm install

// Everything installed!


> $ yarn start
// Or
> $ npm run start

// LiveReload started. Opening localhost:3000
        `}
      </Box>
    </Box>
  );
};

export default QuickStart;
