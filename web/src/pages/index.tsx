import React from 'react';
import styled from 'styled-components';
import { useHiQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const Container = styled.div`
  background: #d9d9d9;
  padding: 15px;
`;

const Index : React.FC<{}> = () => {
  const response = useHiQuery();

  return (
    <Container>
      {response?.data?.hi}
    </Container>
  )
}

export default withApollo({ ssr: false })(Index);