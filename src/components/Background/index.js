import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#ff9000', '#ff1000'],
})`
  flex: 1;
`;
