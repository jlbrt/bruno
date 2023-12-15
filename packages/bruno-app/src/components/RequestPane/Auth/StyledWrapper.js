import styled from 'styled-components';

const Wrapper = styled.div`
  .warning-text {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.colors.text.danger};
  }
`;

export default Wrapper;
