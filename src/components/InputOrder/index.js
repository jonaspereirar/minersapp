import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const InputOrder = forwardRef(({ style, icon, ...rest }, ref) => (
  <Container style={style}>
    {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
    <TInput {...rest} ref={ref} />
  </Container>
));

InputOrder.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

InputOrder.defaultProps = {
  style: {},
  icon: null,
};

export default InputOrder;
