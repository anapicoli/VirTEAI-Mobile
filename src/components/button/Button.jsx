import React from "react";
import { ActivityIndicator } from "react-native";
import { ButtonContainer, Title } from "./styles";

export default function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "default",
  ...rest
}) {
  const isDisabled = disabled || loading;
  return (
    <ButtonContainer
      accessibilityRole="button"
      onPress={onPress}
      disabled={isDisabled}
      $variant={variant}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Title>{title}</Title>
      )}
    </ButtonContainer>
  );
}
