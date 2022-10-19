import React from 'react'
import { Control, FieldError, Controller } from 'react-hook-form'
import { TextInput, TextInputProps, Dimensions } from 'react-native'

import { ControllerContainer, Error } from './styles'

type DefaultProps = TextInputProps & {
    control: Control<any>
    name: string
    error?: FieldError
}

export function ControlledInput({ control, error, name, ...rest }: DefaultProps) {
    return (
        <>
            <ControllerContainer>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                        />
                    )}
                />
            </ControllerContainer>
            {error && <Error>{error.message}</Error>}
        </>
    )
}