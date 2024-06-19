import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  title?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, style, children, ...props }) => {
  return (
    <Pressable
      className="bg-blue-700 rounded-lg py-2.5 px-5 me-2 mb-2"
      style={({ pressed }) => [
        pressed && { backgroundColor: '#1E40AF' }, // bg-blue-800 (hover)
        style,
      ]}
      {...props}
    >
      {title ? <Text className="text-white text-sm font-medium">{title}</Text> : children}
    </Pressable>
  );
};

export default Button;
