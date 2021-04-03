import React from 'react';
import styled from 'styled-components';
import { 
  useHiQuery,
  // useUploadFileMutation,
  // useCoolEventSubscription,
  // useRegisterMutation 
} from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const Container = styled.div`
  background: #d9d9d9;
  padding: 15px;
`;

const Index : React.FC<{}> = () => {
  const { data } = useHiQuery();

  return (
    <Container>
      {data?.hi}
    </Container>
  )
}

export default withApollo({ ssr: false })(Index);