'use client'
import { Icon} from '@chakra-ui/react';
import React from 'react';

export const ColoredIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon w={8} h={8} color='#00C484' {...props} />
);
